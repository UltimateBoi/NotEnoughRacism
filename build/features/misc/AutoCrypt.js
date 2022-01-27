// import { dungeons } from "../..";
// import { BP, C08PacketPlayerBlockPlacement, C09PacketHeldItemChange } from "../../utils/Constants";
// const stoneSlab = Java.type("net.minecraft.block.BlockStoneSlab")
// const crackedBricks = Java.type("net.minecraft.blocks.BlockStoneBrick.EnumType");
// const ArrayLists = Java.type("java.util.ArrayList");
// const EnumFacing = Java.type("net.minecraft.util.EnumFacing");
// const Vec3 = Java.type("net.minecraft.util.Vec3");

// let alreadyClicked = new ArrayLists;
// let time = new Date().getTime();
// let time2 = new Date().getTime();
// let time3 = new Date().getTime();


// let inBoss = false;
// let p3Started = false;
// let inHowl = false;
// let inSpidersDen = false;
// let inEnd = false;
// let inCrypt = false;
// let inGunpowderMines = false;
// let inIsland = false;
// let inDungeon = false;
// let inMist = false;
// let inF7 = false;


// register("chat", () => {
//     inBoss = true;
// }).setChatCriteria("&r&4[BOSS] Necron&r&c: &r&cFinally, I heard so much about you. The Eye likes you very much.&r").setContains();

// register("chat", () => {
//     p3Started = true;
// }).setChatCriteria("[BOSS] Necron: I'VE HAD ENOUGH! YOU HUMANS ARE FIGHTING WITHOUT HONOR!").setContains();

// register("worldLoad", () => {
//     inBoss = false;
//     p3Started = false;
//     inHowl = false;
//     inSpidersDen = false;
//     inEnd = false;
//     inCrypt = false;
//     inGunpowderMines = false;
//     inIsland = false;
//     inDungeon = false;
//     inMist = false;
//     inF7 = false;
// });


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
//     if (dungeons.autoTNT && inDungeon) {
//         for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) {
//             for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) {
//                 for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) {
//                     let position = new BP(x, y, z);
//                     let block = Client.getMinecraft().field_71441_e.func_180495_p(position).func_177230_c();
//                     if (Client.currentGui.get() === null && !alreadyClicked.contains(position) && Client.getMinecraft().field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - Client.getMinecraft().field_71439_g.func_70047_e(), position.func_177952_p()) < 6) {
//                         if (dungeons.autoCrypt && !inBoss) {
//                             if (block instanceof stoneSlab) {
//                                 // ChatLib.chat(String(block));
//                                 if (World.getBlockAt(position.func_177958_n(), position.func_177956_o() - 1, position.func_177952_p()).type.getID() === 109.0) {
//                                     for (let i = 0; i < 9; i++) {
//                                         if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().toLowerCase().includes("infinityboom tnt")) {
//                                             let holding = Player.getHeldItemIndex();
//                                             if (new Date().getTime() - time > 2000) {
//                                                 //    ChatLib.chat("item in inv")
//                                                 //  Client.sendPacket(new C09PacketHeldItemChange(i));
//                                                 Player.setHeldItemIndex(i);
//                                                 //Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0 ,0))
//                                                 Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
//                                                 Player.setHeldItemIndex(holding);
//                                                 ChatLib.chat("clicked");
//                                                 //  Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
//                                                 alreadyClicked.add(position);
//                                                 time = new Date().getTime();
//                                                 //  ChatLib.chat(String(alreadyClicked)); 
//                                                 break;
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                         if (dungeons.autoWall && !inBoss) {
//                             if (String(block).includes("minecraft:stonebrick")) {
//                                 if (World.getBlockAt(position.func_177958_n(), position.func_177956_o(), position.func_177952_p()).getMetadata() === 2) {
//                                     for (let i = 0; i < 9; i++) {
//                                         if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().toLowerCase().includes("infinityboom tnt")) {
//                                             let holding = Player.getHeldItemIndex();
//                                             if (new Date().getTime() - time2 > 2000) {
//                                                 //    ChatLib.chat("item in inv")
//                                                 //  Client.sendPacket(new C09PacketHeldItemChange(i));
//                                                 Player.setHeldItemIndex(i);
//                                                 //Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0 ,0))
//                                                 Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
//                                                 Player.setHeldItemIndex(holding);
//                                                 ChatLib.chat("clicked");
//                                                 //  Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
//                                                 alreadyClicked.add(position);
//                                                 time2 = new Date().getTime();
//                                                 //  ChatLib.chat(String(alreadyClicked)); 
//                                                 break;
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                         if (dungeons.autoGate && inBoss && p3Started && inF7) {
//                             // 1
//                             if (World.getBlockAt(296, 133, 321).type === "minecraft:stonebrick") {
//                                 if (World.getBlockAt(299, 115, 322) === "minecraft:cobblestone" && String(block).includes("minecraft:cobblestone")) {
//                                     for (let i = 0; i < 9; i++) {
//                                         if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().toLowerCase().includes("infinityboom tnt")) {
//                                             let holding = Player.getHeldItemIndex();
//                                             if (new Date().getTime() - time3 > 2000) {
//                                                 //    ChatLib.chat("item in inv")
//                                                 //  Client.sendPacket(new C09PacketHeldItemChange(i));
//                                                 Player.setHeldItemIndex(i);
//                                                 //Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0 ,0))
//                                                 Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
//                                                 Player.setHeldItemIndex(holding);
//                                                 ChatLib.chat("clicked");
//                                                 //  Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
//                                                 alreadyClicked.add(position);
//                                                 time3 = new Date().getTime();
//                                                 //  ChatLib.chat(String(alreadyClicked)); 
//                                                 break;
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                             // 2
//                             if (World.getBlockAt(217, 133, 328).type === "minecraft:stonebrick") {
//                                 if (World.getBlockAt(216, 115, 331) === "minecraft:cobblestone" && String(block).includes("minecraft:cobblestone")) {
//                                     for (let i = 0; i < 9; i++) {
//                                         if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().toLowerCase().includes("infinityboom tnt")) {
//                                             let holding = Player.getHeldItemIndex();
//                                             if (new Date().getTime() - time3 > 500) {
//                                                 //    ChatLib.chat("item in inv")
//                                                 //  Client.sendPacket(new C09PacketHeldItemChange(i));
//                                                 Player.setHeldItemIndex(i);
//                                                 //Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0 ,0))
//                                                 Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
//                                                 Player.setHeldItemIndex(holding);
//                                                 ChatLib.chat("clicked");
//                                                 //  Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
//                                                 alreadyClicked.add(position);
//                                                 time3 = new Date().getTime();
//                                                 //  ChatLib.chat(String(alreadyClicked)); 
//                                                 break;
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                             // #
//                             if (World.getBlockAt(210, 133, 249).type === "minecraft:stonebrick") {
//                                 if (World.getBlockAt(207, 115, 248) === "minecraft:cobblestone" && String(block).includes("minecraft:cobblestone")) {
//                                     for (let i = 0; i < 9; i++) {
//                                         if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().toLowerCase().includes("infinityboom tnt")) {
//                                             let holding = Player.getHeldItemIndex();
//                                             if (new Date().getTime() - time3 > 500) {
//                                                 //    ChatLib.chat("item in inv")
//                                                 //  Client.sendPacket(new C09PacketHeldItemChange(i));
//                                                 Player.setHeldItemIndex(i);
//                                                 //Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0 ,0))
//                                                 Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
//                                                 Player.setHeldItemIndex(holding);
//                                                 ChatLib.chat("clicked");
//                                                 //  Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
//                                                 alreadyClicked.add(position);
//                                                 time3 = new Date().getTime();
//                                                 //  ChatLib.chat(String(alreadyClicked)); 
//                                                 break;
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }).setFps(1); 