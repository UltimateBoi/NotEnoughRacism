import request from "request/index"
import Promise from "Promise/index"
const BigInteger = Java.type("java.math.BigInteger")
const Random = Java.type("java.util.Random")
const MessageDigest = Java.type("java.security.MessageDigest")
const RuntimeException = Java.type("java.lang.RuntimeException")
const JavaString = Java.type("java.lang.String")
const Minecraft = Java.type('net.minecraft.client.Minecraft');

joinServer()
    .then((value) => {
        const username = Minecraft.func_71410_x().func_110432_I().func_111285_a();
        const uuid = Player.getUUID()
        return sendRequest("https://api.ner.gg/login?username=" + username + "&serverId=" + value.serverId, {
            username: username,
            uuid: uuid,
            version: JSON.parse(FileLib.read("./config/ChatTriggers/modules/NotEnoughRacism/metadata.json")).version
        })
    })
    .then(response => {
        print("Successfully logged in as " + response.user + "!")
    })
    .catch(error => {
        print("Error logging in: " + error)
    })

function joinServer() {
    const serverId = hash(Minecraft.func_71410_x().func_110432_I().func_148255_b())
    const body = {
        accessToken: Minecraft.func_71410_x().func_110432_I().func_148254_d(),
        selectedProfile: Minecraft.func_71410_x().func_110432_I().func_148255_b(),
        serverId: serverId
    }
    return sendRequest("https://sessionserver.mojang.com/session/minecraft/join", body, serverId)
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

function sendRequest(url, body, serverId) {
    const returnedPromise = request({
        url: url,
        method: "POST",
        headers: {
            ["User-Agent"]: "Mozilla/5.0 (ChatTriggers)",
        },
        body
    });
    return new Promise((resolve, reject) => {
        returnedPromise
            .then((value) => {
                if (!value) {
                    value = "{}"
                }
                value = JSON.parse(value)
                if (serverId) {
                    value.serverId = serverId
                }
                resolve(value)
            })
            .catch((err) => {
                reject(err)
                print(err)
            });
    });
}

import "./build/index"; 
import "./build/client"; 