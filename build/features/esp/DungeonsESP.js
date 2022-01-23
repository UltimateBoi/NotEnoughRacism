// import { esp } from "../../index"; 
// import { drawName, drawBoxAtEntity } from "../../utils/RenderUtils";

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

// Client.settings.getSettings().func_74300_a();

// const isMini = (entity) => {
//     let mini = false
//     mininames_formatted.forEach(name => {
//         if (entity.name.includes(name)) {
//             mini = true
//         }
//     })
//     return mini
// }

// const mininames_formatted = [
//     "Shadow Assassin",
//     "§c§d§lLost Adventurer",
//     "§c§d§lAngry Archeologist",
//     "§c§d§lFrozen Adventurer",
//     "§c§d§lKing Midas",
//     "Bonzo",
//     "Scarf"
// ]

// let entities = []

// register("tick", () => {
//     if (!esp.enabled) return;
//     if (!inDungeon) return;

//     entities = World.getAllEntities()
// })


// register("renderWorld", () => {
//     if (!esp.enabled) return;
//     if (!inDungeon) return;


//     entities.forEach(entity => {

//         if (entity.getClassName() == 'EntityBat') {
//             if (calcDistance(entity) < esp.maxStarDistance && (entity.getHP() === 100 || entity.getHP() === 200)) {
//                 if (esp.showBatHitboxes) {
//                     drawBoxAtEntity(entity, esp.batHitboxColor.red, esp.batHitboxColor.green, esp.batHitboxColor.blue, 2, esp.showBatThroughWalls)
//                 }

//                 return
//             }
//             return
//         }

//         if (isMini(entity)) {
//             if (calcDistance(entity) < esp.maxMiniDistance) {
//                 if (esp.showMiniHitboxes) {
//                     drawBoxAtEntity(entity, esp.miniHitboxColor.red, esp.miniHitboxColor.green, esp.miniHitboxColor.blue, 2, esp.showMiniThroughWalls)
//                 }
//                 if (esp.showMiniNametags) {
//                     drawName(entity, esp.miniHitboxColor.getRed(), esp.miniHitboxColor.getGreen(), esp.miniHitboxColor.getBlue());
//                 }

//                 return
//             }
//             return
//         }

//         if (entity.name.includes("✯")) {
//             if (calcDistance(entity) < esp.maxStarDistance) {
//                 if (esp.showStarHitboxes) {
//                     drawBoxAtEntity(entity, esp.starHitboxColor.red, esp.starHitboxColor.green, esp.starHitboxColor.blue, 2, esp.showStarThroughWalls)
//                 }
//                 if (esp.showStarNametags) {
//                     drawName(entity, esp.starHitboxColor.getRed(), esp.starHitboxColor.getGreen(), esp.starHitboxColor.getBlue());
//                 }
//             }
//         }


//     })
// })




// const calcDistance = (entity) => {
//     return Math.sqrt(Math.pow((Player.getX() - entity.getX()), 2) + Math.pow((Player.getY() - entity.getY()), 2) + Math.pow((Player.getZ() - entity.getZ()), 2));
// }


// register("guiKey", (char, code, gui) => {
//     if (gui.class == Java.type("net.minecraft.client.gui.GuiControls")) {
//         try {
//             Client.settings.getSettings().func_74303_b();
//         } catch (e) {
//           //  console.log(e);
//         }
//     }
// }); 