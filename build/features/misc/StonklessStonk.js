// import { dungeons, RenderLib } from "../../index";
// import { drawBoxAtBlock } from "../../utils/RenderUtils";
// const EnumFacing = Java.type("net.minecraft.util.EnumFacing");
// const BlockPoss = Java.type("net.minecraft.util.BlockPos");
// const BlockChest = Java.type("net.minecraft.block.BlockChest");
// const BlockLever = Java.type("net.minecraft.block.BlockLever");
// const TileEntitySkull = Java.type("net.minecraft.tileentity.TileEntitySkull")
// const Vec3 = Java.type("net.minecraft.util.Vec3");
// const ArrayLists = Java.type("java.util.ArrayList");
// const mc = Client.getMinecraft();

// let position;
// let alreadyClicked = new ArrayLists;



// let inDungeon = false;

// register("step", function () {
//     Scoreboard.getLines().forEach((x) => {
//         let unformatted = ChatLib.removeFormatting(x);
//         if (/ ⏣ The Catac.+ombs \(.+\)/.test(unformatted)) {
//             inDungeon = true;
//         }
//     })
// }).setFps(2);

// register("worldLoad", () => {
//     inDungeon = false;
// })

// const stonklessStonk = () => {
//     if (inDungeon) {
//         if (Client.currentGui.get() == null) {
//             for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) {
//                 for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) {
//                     for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) {
//                         position = new BlockPoss(x, y, z);
//                         let block = mc.field_71441_e.func_180495_p(position).func_177230_c();
//                     }
//                 }
//             }
//         }
//     }
// }

// let blocks;
// let entities = [];
// register("step", () => {
//     let localEntities = [];
//     for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) {
//         for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) {
//             for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) {
//                 blocks = World.getBlockAt(x, y, z);
//                 if (blocks.type.getRegistryName().includes("minecraft:chest") || blocks.type.getRegistryName().includes("minecraft:lever") || blocks.type.getRegistryName().includes("minecraft:skull")) {
//                     if (mc.field_71476_x !== null && String(new BlockPoss(blocks.x, blocks.y, blocks.z)).includes(String(mc.field_71476_x.func_178782_a()))) {
//                     localEntities.push([blocks.x + 0.5, blocks.y + 0, blocks.z + 0.5, 1, 1, 0, 255, 0, 0.30, true]);
//                     } else {
//                     localEntities.push([blocks.x + 0.5, blocks.y + 0, blocks.z + 0.5, 1, 1, 40, 40, 40, 0.30, true]);
//                     }
//                     // ChatLib.chat(localEntities[0])
//                 }
//             }
//         }
//     }
//     entities = localEntities;
//   //  ChatLib.chat(entities[0])
// }).setFps(2);


// register("renderWorld", () => {
//     entities.forEach((block) => {
//         if (block !== undefined) {
//         //    ChatLib.chat(block)
//             RenderLib.drawInnerEspBox(...block);
//         }
//     })
// })

// //                             
