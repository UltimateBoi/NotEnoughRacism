import { dungeons } from "../..";
import { BP, C08PacketPlayerBlockPlacement, C09PacketHeldItemChange } from "../../utils/Constants";
const stoneSlab = Java.type("net.minecraft.block.BlockStoneSlab")
const crackedBricks = Java.type("net.minecraft.blocks.BlockCrackedStoneBrick");
const ArrayLists = Java.type("java.util.ArrayList");
const EnumFacing = Java.type("net.minecraft.util.EnumFacing");
const Vec3 = Java.type("net.minecraft.util.Vec3");

let alreadyClicked = new ArrayLists;
let time = new Date().getTime();

register("step", () => {
    if (dungeons.autoCrypt) {
        for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) {
            for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) {
                for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) {
                    let position = new BP(x, y, z);
                    let block = Client.getMinecraft().field_71441_e.func_180495_p(position).func_177230_c();
                    if (Client.currentGui.get() === null && !alreadyClicked.contains(position) && Client.getMinecraft().field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - Client.getMinecraft().field_71439_g.func_70047_e(), position.func_177952_p()) <= 6) {
                        if (block instanceof stoneSlab) {
                            if (World.getBlockAt(position.func_177958_n(), position.func_177956_o() - 1, position.func_177952_p()).type.getID() === 109.0) {
                                for (let i = 0; i < 9; i++) {
                                    if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().toLowerCase().includes("infinityboom tnt")) {
                                        if (new Date().getTime() - time > 500) {
                                            //    ChatLib.chat("item in inv")
                                            Client.sendPacket(new C09PacketHeldItemChange(i));
                                            Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
                                            // ChatLib.chat("clicked");
                                            Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
                                            alreadyClicked.add(position);
                                            time = new Date().getTime();
                                            //  ChatLib.chat(String(alreadyClicked)); 
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if (block instanceof crackedBricks) {
                            ChatLib.chat("true");
                        }
                    }
                }
            }
        }
    }
}).setFps(1); 