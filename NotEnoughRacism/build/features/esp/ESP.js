// import {
//     drawInnerEspBox,
//     drawEspBox,
//     drawName
// } from "../../utils/RenderUtils"

// let inHowl = false;
// let inSpidersDen = false;
// let inEnd = false;
// let inCrypt = false;
// let inGunpowderMines = false;
// let inIsland = false;
// let inDungeon = false;
// let inMist = false;
// let inF7 = false; 
// let inBoss = false;
// let p3Started = false;
// let bloodOpened = false;


// register("step", () => {
//     let scoreboardLines = Scoreboard.getLines().map(line => line.getName().removeFormatting().toLowerCase());
//     scoreboardLines.forEach(line => {
//         if (line.includes("howl") || line.includes("castle")) {
//             inHowl = true;
//         }
//         if (line.includes("spider")) {
//             inSpidersDen = true;
//         }
//         if (line.includes("coal") || line.includes("graveyard")) {
//             inCrypt = true;
//         }
//         if (line.includes("end") || line.includes("drag") || line.includes("void")) {
//             inEnd = true;
//         }
//         if (line.includes("gunpowder")) {
//             inGunpowderMines = true;
//         }
//         if (line.includes("your")) {
//             inIsland = true;
//         }
//         if (line.includes("cata")) {
//             inDungeon = true;
//         }
//         if (line.includes("f7")) {
//             inF7 = true;
//         }
//         if (line.includes("mist")) {
//             inMist = true;
//         }
//     })
// }).setFps(2);

// register("worldLoad", () => {
//     inHowl = false;
//     inSpidersDen = false;
//     inEnd = false;
//     inCrypt = false;
//     inGunpowderMines = false;
//     inIsland = false;
//     inDungeon = false;
//     inMist = false;
//     inF7 = false;
//     inBoss = false;
//     p3Started = false;
//     bloodOpened = false;
// })

// import {
//     esp,
//     slayer
// } from "../../index"; 

// import { BIND_PREFIX } from "../../utils/Constants"; 
// // Player ESP

// const playerESPKey = new KeyBind("Toggle Player ESP", Keyboard.KEY_NONE, BIND_PREFIX)

// let espON = false;
// register("tick", () => {
//     if (playerESPKey.isPressed()) {
//         ChatLib.chat(`${(espON = !espON) ? PREFIX + 'Player ESP &aEnabled' : PREFIX + 'Player ESP &cDisabled'}`);
//     }
// });

// let espOnPlayer = [];
// register("step", () => {
//     let localEntities = [];
//     World.getAllEntities().forEach((entity) => {
//         if (ChatLib.removeFormatting(entity.getName()).toLowerCase() === slayer.playerESPName) {
//             localEntities.push(entity);
//         }
//     })
//     espOnPlayer = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (espON) {
//         espOnPlayer.forEach(entity => {
//             drawInnerEspBox(entity.getX(), entity.getY() + 0, entity.getZ(), 1, 2, slayers.playerColor.getRed(), slayers.playerColor.getGreen(), slayers.playerColor.getBlue(), 0.30, true);
//             drawName(entity, slayers.playerColor.getRed(), slayers.playerColor.getGreen(), slayers.playerColor.getBlue());
//         })
//     }
// });

// // ESP Smaller Slayer Minis 

// let emanEntities = [];
// register("step", () => {
//     let localEntities = [];
//     if (inEnd) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Voidling Devotee") || ChatLib.removeFormatting(entity.getName()).includes("Voidling Radical")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     emanEntities = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && slayer.voidgloomMinis) {
//         emanEntities.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 3, entity.getZ(), 1, 3, slayers.voidlingRadi.getRed(), slayers.voidlingRadi.getGreen(), slayers.voidlingRadi.getBlue(), slayers.voidlingRadi.getAlpha(), true);
//             drawName(entity, slayers.voidlingRadi.getRed(), slayers.voidlingRadi.getGreen(), slayers.voidlingRadi.getBlue());
//         })
//     }
// });

// let taraEntities = [];
// register("step", () => {
//     let localEntities = [];
//     if (inSpidersDen) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Tarantula Vermin") || ChatLib.removeFormatting(entity.getName()).includes("Tarantula Beast")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     taraEntities = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && slayer.taraMinis) {
//         taraEntities.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayers.taraBeast.getRed(), slayers.taraBeast.getGreen(), slayers.taraBeast.getBlue(), slayers.taraBeast.getAlpha(), true);
//             drawName(entity, slayers.taraBeast.getRed(), slayers.taraBeast.getGreen(), slayers.taraBeast.getBlue());
//         })
//     }
// });

// let svenEntities = [];
// register("step", () => {
//     let localEntities = [];
//     if (inHowl) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Pack Enforcer") || ChatLib.removeFormatting(entity.getName()).includes("Sven Follower")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     svenEntities = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && slayer.svenMinis) {
//         svenEntities.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayers.svenFollower.getRed(), slayers.svenFollower.getGreen(), slayers.svenFollower.getBlue(), 1, true);
//             drawName(entity, slayers.svenFollower.getRed(), slayers.svenFollower.getGreen(), slayers.svenFollower.getBlue());
//         })
//     }
// });

// let revEntities = [];
// register("step", () => {
//     let localEntities = [];
//     if (inCrypt) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Revenant Sycophant") || ChatLib.removeFormatting(entity.getName()).includes("Revenant Champion") || ChatLib.removeFormatting(entity.getName()).includes("Deformed Revenant")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     revEntities = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && slayer.revMinis) {
//         revEntities.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 2, entity.getZ(), 1, 2, slayers.revMiniColor.getRed(), slayers.revMiniColor.getGreen(), slayers.revMiniColor.getBlue(), slayers.revMiniColor.getAlpha(), true);
//             drawName(entity, slayers.revMiniColor.getRed(), slayers.revMiniColor.getGreen(), slayers.revMiniColor.getBlue());
//         })
//     }
// });

// // ESP Bigger Slayer Minis 

// let emanRed = [];
// register("step", () => {
//     let localEntities = [];
//     if (inEnd) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Voidcrazed")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     emanRed = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && slayer.voidcrazedManiac) {
//         emanRed.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 3, entity.getZ(), 1, 3, slayers.voidcrazedManiac.getRed(), slayers.voidcrazedManiac.getGreen(), slayers.voidcrazedManiac.getBlue(), slayers.voidcrazedManiac.getAlpha(), true);
//             drawName(entity, slayers.voidcrazedManiac.getRed(), slayers.voidcrazedManiac.getGreen(), slayers.voidcrazedManiac.getBlue());
//         })
//     }
// });

// let taraRed = [];
// register("step", () => {
//     let localEntities = [];
//     if (inSpidersDen) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Mutant")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     taraRed = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && slayer.mutantTara) {
//         taraRed.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayers.mutantTara.getRed(), slayers.mutantTara.getGreen(), slayers.mutantTara.getBlue(), slayers.mutantTara.getAlpha(), true);
//             drawName(entity, slayers.mutantTara.getRed(), slayers.mutantTara.getGreen(), slayers.mutantTara.getBlue());
//         })
//     }
// });

// let svenRed = [];
// register("step", () => {
//     let localEntities = [];
//     if (inHowl) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Sven Alpha")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     svenRed = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && slayer.svenAlpha) {
//         svenRed.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayers.svenAlpha.getRed(), slayers.svenAlpha.getGreen(), slayers.svenAlpha.getBlue(), 1, true);
//             drawName(entity, slayers.svenAlpha.getRed(), slayers.svenAlpha.getGreen(), slayers.svenAlpha.getBlue());
//         })
//     }
// });

// let atonedRevs = [];
// register("step", () => {
//     let localEntities = [];
//     if (inCrypt) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Atoned Champion") || ChatLib.removeFormatting(entity.getName()).includes("Atoned Revenant")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     atonedRevs = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && slayer.atonedRevs) {
//         atonedRevs.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 2, entity.getZ(), 1, 2, slayers.atonedMini.getRed(), slayers.atonedMini.getGreen(), slayers.atonedMini.getBlue(), slayers.atonedMini.getAlpha(), true);
//             drawName(entity, slayers.atonedMini.getRed(), slayers.atonedMini.getRed(), slayers.atonedMini.getGreen(), slayers.atonedMini.getBlue());
//         })
//     }
// });

// // ESP Slayer Bosses

// let taraBoss = [];
// register("step", () => {
//     let localEntities = [];
//     if (inSpidersDen) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Tarantula Broodfather")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     taraBoss = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && slayer.taraBoss) {
//         taraBoss.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayers.taraBossColor.getRed(), slayers.taraBossColor.getGreen(), slayers.taraBossColor.getBlue(), slayers.taraBossColor.getAlpha(), true);
//             drawName(entity, slayers.taraBossColor.getRed(), slayers.taraBossColor.getGreen(), slayers.taraBossColor.getGreen());
//         })
//     }
// });

// let svenBoss = [];
// register("step", () => {
//     let localEntities = [];
//     if (inHowl) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Sven Packmaster")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     svenBoss = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && slayer.svenBoss) {
//         svenBoss.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayers.svenBossColor.getRed(), slayers.svenBossColor.getGreen(), slayers.svenBossColor.getBlue(), 1, true);
//             drawName(entity, slayers.svenBossColor.getRed(), slayers.svenBossColor.getGreen(), slayers.svenBossColor.getBlue());
//         })
//     }
// });

// let revBoss = [];
// register("step", () => {
//     let localEntities = [];
//     if (inCrypt) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Revenant Horror") || ChatLib.removeFormatting(entity.getName()).includes("Atoned Horror")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     revBoss = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && slayer.revBoss) {
//         revBoss.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 2, entity.getZ(), 1, 2, slayers.revBossColor.getRed(), slayers.revBossColor.getGreen(), slayers.revBossColor.getBlue(), slayers.revBossColor.getAlpha(), true);
//             drawName(entity, slayers.revBossColor.getRed(), slayers.revBossColor.geGreen(), slayers.revBossColor.getBlue());
//         })
//     }
// });

// // Key ESP

// let witherKey = [];
// register("step", () => {
//     let localEntities = [];
//     if (inDungeon) {
//         World.getAllEntities().forEach((entity) => {
//             if (ChatLib.removeFormatting(entity.getName()).includes("Wither Key") || ChatLib.removeFormatting(entity.getName()).includes("Blood Key")) {
//                 localEntities.push(entity);
//             }
//         })
//     }
//     witherKey = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && esp.witherKey) {
//         witherKey.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() + 1, entity.getZ(), 1, 1, esp.witherKeyColor.getRed(), esp.witherKeyColor.getGreen(), esp.witherKeyColor.getBlue(), esp.witherKeyColor.getAlpha(), true);
//             drawName(entity, esp.witherKeyColor.getRed(), esp.witherKeyColor.getGreen(), esp.witherKeyColor.getlue());
//         })
//     }
// });

// // Pelt ESP

// let peltEntities = [];
// register("step", () => {
//     let localEntities = [];
//     World.getAllEntities().forEach((entity) => {
//         if (ChatLib.removeFormatting(entity.getName()).includes("Trackable") || ChatLib.removeFormatting(entity.getName()).includes("Untrackable") || ChatLib.removeFormatting(entity.getName()).includes("Undetected") || ChatLib.removeFormatting(entity.getName()).includes("Endangered") || ChatLib.removeFormatting(entity.getName()).includes("Elusive")) {
//             localEntities.push(entity);
//         }
//     })
//     peltEntities = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (esp.enabled && esp.peltESP) {
//         peltEntities.forEach(entity => {
//             drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, esp.peltESPColor.getRed(), esp.peltESPColor.getGreen(), esp.peltESPColor.getBlue(), esp.peltESPColor.getAlpha(), true);
//             drawName(entity, esp.peltESPColor.getRed(), esp.peltESPColor.getGreen(), esp.peltESPColor.getBlue());
//         })
//     }
// });

// // Other ESP
// let entities = [];
// register("step", () => {
//     let localEntities = [];
//     if (inGunpowderMines) {
//         World.getAllEntitiesOfType(Creeper)
//             .forEach(entity => {
//                 localEntities.push(entity);
//             });
//     }
//     entities = localEntities;
// }).setFps(esp.espRefreshRate);
// register("renderWorld", () => {
//     if (!esp.enabled) return;
//     if (!esp.creeperEsp)
//         return;
//     entities.forEach(entity => {
//         drawInnerEspBox(entity.getRenderX(), entity.getRenderY(), entity.getRenderZ(), entity.getWidth(), entity.getHeight(), esp.creeperESPColor.getRed(), esp.creeperESPColor.getGreen(), esp.creeperESPColor.getBlue(), .30, true);
//         entity.getEntity().func_82142_c(false)
//             //drawName(entity)
//     });
// });



// // -------------------------------


// let entities1 = [];
// register("step", () => {
//     if (!esp.arachneKeeperESP) return;
//     let localEntities = [];
//     let scoreboardLines = Scoreboard.getLines().map(line => line.getName().removeFormatting().toLowerCase());
//     let inSpidersDen = false;
//     scoreboardLines.forEach(line => {
//         if (line.includes("spider"))
//             inSpidersDen = true;
//     });
//     if (inSpidersDen) {
//         World.getAllEntities()
//             .forEach(entity => {
//                 if (ChatLib.removeFormatting(entity.getName()).includes("Arachne's Keeper"))
//                     localEntities.push(entity);
//             });
//     }
//     entities1 = localEntities;
// }).setFps(esp.espRefreshRate);

// register("renderWorld", () => {
//     if (!esp.enabled) return;
//     if (!esp.arachneKeeperESP)
//         return;
//     entities1.forEach(entity => {
//         drawInnerEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, esp.arachneKeeperESPColor.getRed(), esp.arachneKeeperESPColor.getGreen(), esp.arachneKeeperESPColor.getBlue(), 0.30, true);
//         drawName(entity, esp.arachneKeeperESPColor.getRed(), esp.arachneKeeperESPColor.getGreen(), esp.arachneKeeperESPColor.getBlue());
//     });
// });
