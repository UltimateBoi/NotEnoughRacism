import { BP, ADVANCE_PREFIX, ghostBlockExclude, mc } from "../../utils/Constants";
import { dungeons } from "../../index";
import { ghostBlocks } from "./GhostBlocks";
let lookingAt = Player.lookingAt();

const stonkGhostBlockPlayerInteract = (action, pos, event) => {
    if (dungeons.stonkGBType === 0) {
        if (Player.getHeldItem() !== null) {
            if (Player.getHeldItem().getName().includes("Stonk") || Player.getHeldItem().getName().includes("Golden Pickaxe")) {
                if (lookingAt.getClass() === Block) {
                    if (!ghostBlockExclude.includes(lookingAt.type.getRegistryName())) {
                        if (action.toString() === "RIGHT_CLICK_BLOCK" || action.toString() === "RIGHT_CLICK_AIR") {
                            cancel(event);
                        }
                    }
                }
            }
        }
    } else if (dungeons.stonkGBType === 1) {
        if (Player.getHeldItem() !== null) {
            if (Player.getHeldItem().getName().includes("Stonk") || Player.getHeldItem().getName().includes("Golden Pickaxe")) {
                if (lookingAt.getClass() === Block) {
                    if (!ghostBlockExclude.includes(lookingAt.type.getRegistryName())) {
                        if (action.toString() === "LEFT_CLICK_BLOCK" || action.toString() === "LEFT_CLICK_AIR") {
                            cancel(event);
                        }
                    }
                }
            }
        }
    }
}
const stonkGhostBlocksTick = () => {
    try {
        if (Player.getHeldItem() !== null) {
            if (Player.getHeldItem().getName().includes("Stonk") || Player.getHeldItem().getName().includes("Golden Pickaxe")) {
                if (dungeons.stonkGBType === 0) {
                    if (mc.field_71474_y.field_74313_G.func_151470_d()) {
                        ghostBlocks();
                    }
                } else if (dungeons.stonkGBType === 1) {
                    if (mc.field_71474_y.field_74312_F.func_151470_d()) {
                        ghostBlocks();
                        World.getWorld().func_175698_g(new BP(lookingAt.getX(), lookingAt.getY(), lookingAt.getZ()));
                    }
                }
            }
        }
    } catch (err) {  }
}


export { stonkGhostBlockPlayerInteract, stonkGhostBlocksTick };

// let lookingAt = Player.lookingAt();
// if (lookingAt.getClass() === Block) {
//         if (!ghostBlockExclude.includes(lookingAt.type.getRegistryName())) {
//             World.getWorld().func_175698_g(new BP(lookingAt.getX(), lookingAt.getY(), lookingAt.getZ()));
//         }
// }
// }