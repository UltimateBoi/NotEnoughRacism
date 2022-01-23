import { macros } from "../..";
import {
    BP,
    C08PacketPlayerBlockPlacement, 
    C09PacketHeldItemChange,
    C0APacketAnimation,
} from "../../utils/Constants";

import {
    RightClick,
    checkHotbarSlots
} from "../../utils/Utils";

const shortBows = [
    "terminator",
    "juju shortbow",
    "artisanal shortbow"
]

const termSwapper = (toggleVar) => {
    if (macros.termSwap === 0) {
        if (toggleVar) {
            if (Client.currentGui.get() !== null) return;
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < shortBows.length; j++) {
                    if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().removeFormatting().toLowerCase().includes(shortBows[j])) {
                        Client.sendPacket(new C09PacketHeldItemChange(i));
                        Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0, 0));
                        Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
                        break;
                    }
                }
            }
        }
    } else if (macros.termSwap === 1) {
        if (termToggle.isKeyDown()) {
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < shortBows.length; j++) {
                    if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().removeFormatting().toLowerCase().includes(shortBows[j])) {
                        Client.sendPacket(new C09PacketHeldItemChange(i));
                        Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0, 0));
                        Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
                        break;
                    }
                }
            }
        }
    }
}

export { termSwapper };