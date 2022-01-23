import request from "../../../request/index"
import Promise from "../../../Promise/index"
import {PREFIX} from "./Constants";
const BigInteger = Java.type("java.math.BigInteger")
const Random = Java.type("java.util.Random")
const MessageDigest = Java.type("java.security.MessageDigest")
const RuntimeException = Java.type("java.lang.RuntimeException")
const JavaString = Java.type("java.lang.String")
const Minecraft = Java.type('net.minecraft.client.Minecraft');
const Desktop = Java.type('java.awt.Desktop');
const URI = Java.type('java.net.URI');

class SpotifyController {
    constructor() {
        this.accessToken = null;
        this.expiry = null;
        this.firstInitAttempt = false;
    }

    initialize() {
        const serverId = hash(Minecraft.func_71410_x().func_110432_I().func_148255_b())
        const body = {
            accessToken: Minecraft.func_71410_x().func_110432_I().func_148254_d(),
            selectedProfile: Minecraft.func_71410_x().func_110432_I().func_148255_b(),
            serverId: serverId
        }
        return post("https://sessionserver.mojang.com/session/minecraft/join", body, serverId)
            .then(() => {
                return get("https://api.ner.gg/spotify/session" + "?serverId=" + serverId + "&username=" + Player.getName())
            })
            .then(response => {
                this.accessToken = response.accessToken;
                this.expiry = response.expiryDate;
            })
            .catch(error => {
                error = JSON.parse(error)
                if (error.error === "User not connected to Spotify") {
                    return this.spotifyAuth()
                } else {
                    print(error)
                    return ChatLib.chat(PREFIX + "Error while initializing spotify: " + error.error ?? error.message)
                }
            })
    }

    spotifyAuth() {
        const serverId = hash(Minecraft.func_71410_x().func_110432_I().func_148255_b())
        const body = {
            accessToken: Minecraft.func_71410_x().func_110432_I().func_148254_d(),
            selectedProfile: Minecraft.func_71410_x().func_110432_I().func_148255_b(),
            serverId: serverId
        }
        return void post("https://sessionserver.mojang.com/session/minecraft/join", body, serverId)
            .then(() => {
                let spotifyUrl = "https://api.ner.gg/spotify/login?serverId=" + serverId + "&username=" + Player.getName()
                if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
                    Desktop.getDesktop().browse(new URI(spotifyUrl));
                } else {
                    new Message(
                        new TextComponent(PREFIX + "Please click here to authorize with spotify.")
                            .setHover("show_text", spotifyUrl)
                            .setClick("open_url", spotifyUrl)
                    ).chat()
                }
            })
    }

    skipToNext() {
        if (this.expiredToken()) {
            return this.getNewToken()
                .then(() => {
                    return this.skip(next)
                })
        }

        return post("https://api.spotify.com/v1/me/player/next", {}, {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.accessToken
        })
            .then(() => {
                return ChatLib.chat(PREFIX + "Skipped to next track.")
            })
            .catch(error => {
                error = JSON.parse(error).error
                if (error.status === 401) {
                    return this.getNewToken()
                        .then(() => {
                            return this.skipToNext()
                        })
                } else {
                    print(error.message)
                    return ChatLib.chat(PREFIX + "Error while skipping song: " + error.message)
                }
            })
    }

    skipToPrevious() {
        if (this.expiredToken()) {
            return this.getNewToken()
                .then(() => {
                    return this.skip(previous)
                })
        }

        return post("https://api.spotify.com/v1/me/player/previous", {}, {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.accessToken
        })
            .then(() => {
                ChatLib.chat(PREFIX + "Skipped to previous track.")
            })
            .catch(error => {
                error = JSON.parse(error).error
                if (error.status === 401) {
                    return this.getNewToken()
                        .then(() => {
                            return this.skipToPrevious()
                        })
                } else {
                    if (error.message === "Player command failed: Restriction violated") {
                        return put("https://api.spotify.com/v1/me/player/seek?position_ms=0", {}, {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.accessToken
                        })
                            .then(() => {
                                ChatLib.chat(PREFIX + "Skipped to previous track.")
                            })
                            .catch(error => {
                                error = JSON.parse(error).error
                                if (error.status === 401) {
                                    return this.getNewToken()
                                        .then(() => {
                                            return this.skipToPrevious()
                                        })
                                } else {
                                    return ChatLib.chat(PREFIX + "Error while skipping song: " + error.message)
                                }
                            })
                    }
                    return ChatLib.chat(PREFIX + "Error while skipping song: " + error.message)
                }
            })
    }

    getNewToken() {
        const serverId = hash(Minecraft.func_71410_x().func_110432_I().func_148255_b())
        const body = {
            accessToken: Minecraft.func_71410_x().func_110432_I().func_148254_d(),
            selectedProfile: Minecraft.func_71410_x().func_110432_I().func_148255_b(),
            serverId: serverId
        }
        return post("https://sessionserver.mojang.com/session/minecraft/join", body, serverId)
            .then(() => {
                return get("https://api.ner.gg/spotify/session" + "?serverId=" + serverId + "&username=" + Player.getName())
            })
            .then(response => {
                this.accessToken = response.accessToken;
                this.expiry = response.expiryDate;
            })
    }

    expiredToken() {
        return this.expiry < Date.now()
    }

}

function hash(uuid) {
    try {
        const md = MessageDigest.getInstance("sha1")
        const salt = new BigInteger(130, new Random()).toString(32)
        const string = new JavaString(uuid + salt);
        return new BigInteger(md.digest(string.getBytes())).toString(16)
    } catch (e) {
        throw new RuntimeException(e)
    }
}

function get(url) {
    const returnedPromise = request({
        url: url,
        method: "GET",
        headers: {
            ["User-Agent"]: "Mozilla/5.0 (ChatTriggers)"
        }
    })

    return new Promise((resolve, reject) => {
        returnedPromise.then(response => {
            if (!response) response = "{}";
            resolve(JSON.parse(response))
        }).catch(error => {
            reject(error)
        })
    })
}

function post(url, body, headers = {}) {
    headers["User-Agent"] = "Mozilla/5.0 (ChatTriggers)"
    const returnedPromise = request({
        url: url,
        method: "POST",
        headers,
        body
    });
    return new Promise((resolve, reject) => {
        returnedPromise
            .then((value) => {
                if (!value) {
                    value = "{}"
                }
                value = JSON.parse(value)
                resolve(value)
            })
            .catch((err) => {
                reject(err)
            });
    })
}

function put(url, body, headers = {}) {
    headers["User-Agent"] = "Mozilla/5.0 (ChatTriggers)"
    const returnedPromise = request({
        url: url,
        method: "PUT",
        headers,
        body
    });
    return new Promise((resolve, reject) => {
        returnedPromise
            .then((value) => {
                if (!value) {
                    value = "{}"
                }
                value = JSON.parse(value)
                resolve(value)
            })
            .catch((err) => {
                reject(err)
            });
    })
}

export default new SpotifyController()

