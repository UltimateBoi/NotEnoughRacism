import RichPresence from "../../../../RichPresence/index";
import { config } from "../../index";
import sleep from "../../../../sleep/index";
let currentServer = "";

/**
 * @type {RichPresence}
 */
let RPC;
try {
    if (config.rpcEnabled) {
        RPC = new RichPresence("904062487308165180", {
            largeImageKey: "necron",
            startTimestamp: Date.now(),
            details: "Main Menu",
            readyListener: function (event) {
                print(`Logged in as ${event.user.name}#${event.user.discriminator}`);
            }
        })
    } else {
        RPC = new RichPresence("904062487308165180", {
            largeImageKey: "necron",
            startTimestamp: Date.now(),
            details: "Main Menu",
            hidePresence: true,
            readyListener: function (event) {
                print(`Logged in as ${event.user.name}#${event.user.discriminator}`);
            }
        })
        currentServer = undefined;
    }
} catch (err) { console.log("RPC ERROR: " + err.message) }

function rpc() {
    if (RPC === undefined) return   
    // try {
    if (config.rpcEnabled) {
        sleep(1000, function () {
            if (currentServer !== Server.getIP()) {
                currentServer = Server.getIP();
                switch (currentServer) {
                    case "":
                        RPC.updatePresence({
                            details: "Main Menu",
                        })
                        break;
                    case "localhost":
                        RPC.updatePresence({
                            details: "Singleplayer"
                        })
                        break;
                    default:
                        RPC.updatePresence({
                            details: currentServer
                        })
                }
            }
        })
    } else if (!config.rpcEnabled && currentServer !== undefined) {
        RPC.clearPresence();
        currentServer = undefined;
    }
    //  } catch { console.log("RPC ERROR: " + e.message); }
}

export { rpc }