import {
    mc,
    ADVANCE_PREFIX
} from "../../utils/Constants";

import { macros } from "../../index";

import {
    C08PacketPlayerBlockPlacement, 
    C09PacketHeldItemChange,
    C0APacketAnimation
} from "../../utils/Constants";


const boneMacros = () => {
    let isInCurrentMacro = false;
    if (Client.currentGui.get() !== null) return;
    if (!isInCurrentMacro) {
        isInCurrentMacro = true
        for (let i = 0; i < 9; i++) {
            if (Player.getInventory().getStackInSlot(i).getName().toUpperCase().includes("BONEMERANG")) {
                Player.getPlayer().field_71071_by.field_70461_c = i
                let method = mc.getClass().getDeclaredMethod("func_147121_ag");
                method.setAccessible(true);
                method.invoke(mc);
                Thread.sleep(macros.boneDelay)
            }
        }
        let noGiants = true
        for (let i = 0; i < 9; i++) {
            if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes(macros.swapSlot1)) {
                Player.getPlayer().field_71071_by.field_70461_c = i
                noGiants = false
                Thread.sleep(macros.swapDelay)
                break;
            }
        }
        for (let i = 0; i < 9; i++) {
            if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes(macros.swapSlot2)) {
                Player.getPlayer().field_71071_by.field_70461_c = i
                Thread.sleep(macros.swapDelay)
                break;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes(macros.swapSlot3)) {
                Player.getPlayer().field_71071_by.field_70461_c = i
                Thread.sleep(macros.swapDelay)
                break;
            }
        }
        isInCurrentMacro = false
    }

}

export { boneMacros }; 