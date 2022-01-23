// import { DiscordRPC, DiscordEventHandlers, DiscordRichPresence } from "../../utils/Constants";
// import { config } from "../../index";
// let loaded = true;

// let Windows = java.lang.System.getProperty("os.name").startsWith("Windows");
// let handler;
// const timestamp = Date.now();
// let currentServer = "";

// if (Windows) {
//     handler = new DiscordEventHandlers.Builder()
//         .setReadyEventHandler((user) => {
//             print("Welcome " + user.username + "#" + user.discriminator + "!");
//         })
//         .build();
//     DiscordRPC.discordInitialize("904062487308165180", handler, true);
//     if (config.rpcEnabled) {
//         loaded = false;
//         const presence = new DiscordRichPresence.Builder("")
//             .setDetails("Main Menu")
//             .setStartTimestamps(timestamp)
//             .setBigImage("necron", null)
//             .build();
//         DiscordRPC.discordUpdatePresence(presence);
//     }
//     register("gameUnload", () => {
//         DiscordRPC.discordShutdown();
//     });
// }

// function rpc() {
//     if (Windows) {
//         if (config.rpcEnabled) {
//             setTimeout(function() {
//                 if (currentServer !== Server.getIP()) {
//                     let presence;
//                     currentServer = Server.getIP();
//                     if (currentServer !== "") {
//                         if (currentServer === "localhost") {
//                             presence = new DiscordRichPresence.Builder("")
//                                 .setDetails("Singleplayer")
//                                 .setStartTimestamps(timestamp)
//                                 .setBigImage("necron", null)
//                                 .build();
//                         } else {
//                             presence = new DiscordRichPresence.Builder("")
//                                 .setDetails(currentServer)
//                                 .setStartTimestamps(timestamp)
//                                 .setBigImage("necron", null)
//                                 .build();
//                         }
//                     } else {
//                         presence = new DiscordRichPresence.Builder("")
//                             .setDetails("Main Menu")
//                             .setStartTimestamps(timestamp)
//                             .setBigImage("necron", null)
//                             .build();
//                     }
//                     DiscordRPC.discordUpdatePresence(presence);
//                 }
//             }, 1000)
//         }
//         if (!config.rpcEnabled && currentServer !== undefined) {
//             DiscordRPC.discordClearPresence();
//             currentServer = undefined;
//         }
//     }
// }

// export { rpc }