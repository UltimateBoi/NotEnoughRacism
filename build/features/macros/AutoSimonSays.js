import { dungeons } from "../../index";

import {BP} from "../../utils/Constants"; 
import { RightClick } from "../../utils/Utils";

const EnumFacing = Java.type("net.minecraft.util.EnumFacing");
// let BP = Java.type("net.minecraft.util.BP");
const BlockStoneButton = Java.type("net.minecraft.block.BlockButtonStone");
const Vec3 = Java.type("net.minecraft.util.Vec3");
const ArrayLists = Java.type("java.util.ArrayList");
let alreadyClicked = new ArrayLists;

let inBoss = false;
let p3Started = false;


register("chat", () => {
    inBoss = true;
}).setChatCriteria("&r&4[BOSS] Necron&r&c: &r&cFinally, I heard so much about you. The Eye likes you very much.&r");

register("chat", () => {
    p3Started = true;
}).setChatCriteria("[BOSS] Necron: I'VE HAD ENOUGH! YOU HUMANS ARE FIGHTING WITHOUT HONOR!").setContains();

register("worldLoad", () => {
    inBoss = false;
    p3Started = false;
    alreadyClicked.clear()
});


const clickSimonSays = (button) => {
    if (dungeons.autoSSType === 0) {
        if (button !== 1) return;
        if (Player.getY() !== 120) return;
        if (Player.lookingAt().getX() === 309) {
            if (Player.lookingAt().getY() === 121) {
                if (Player.lookingAt().getZ() === 290) { // Reminder: Set Z back to 290 once done testing
                    for (let i = 0; i < dungeons.autoSSCPS / 2; i++) {
                        RightClick.invoke(Client.getMinecraft());
                    }
                }
            }
        }
    }
}

const autoSimonSays = () => {
    if (dungeons.autoSS && p3Started && dungeons.autoSSType === 1) {
        if (Client.currentGui.get() === null) {
            let position = new BP(309, 121, 290);
            let block = Client.getMinecraft().field_71441_e.func_180495_p(position).func_177230_c();
            if (!alreadyClicked.contains(position) && Client.getMinecraft().field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - Client.getMinecraft().field_71439_g.func_70047_e(), position.func_177952_p()) < dungeons.autoSSReach) {
                if (block instanceof BlockStoneButton) {
                    for (let i = 0; i < dungeons.autoSSCPS; i++) {
                        Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
                        //  ChatLib.chat("Clicked");
                    }
                    alreadyClicked.add(position);
                }
            }
        }
    }
}

export { autoSimonSays, clickSimonSays };


