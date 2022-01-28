import {
    RightClick
} from "../../utils/Utils";
import {
    macros
} from "../../index";
import { BP, C08PacketPlayerBlockPlacement, C09PacketHeldItemChange } from "../../utils/Constants";

let swap_time = Date.now();


const doublwSwapStep = () => {
    if (macros.swapType === 0) {
        let slot1;
        let slot2;
        let ogSlot;
        Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
            if (item !== null && item.getName().includes(macros.doubleSwapSlot1)) {
                slot1 = index;
            }
            if (item !== null && item.getName().includes(macros.doubleSwapSlot2)) {
                slot2 = index;
            }
            if (item !== null && item.getName().includes(macros.swapMacroName)) {
                ogSlot = index;
            }
        });
        if (Client.currentGui.get() === null) {
            //  if (Date.now() - swap_time > 500) {
            Client.sendPacket(new C09PacketHeldItemChange(ogSlot1));
            Client.sendPacket(new C09PacketHeldItemChange(slot1));
            Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(slot1).getItemStack(), 0, 0, 0));
            Client.sendPacket(new C09PacketHeldItemChange(slot2));
            Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(slot2).getItemStack(), 0, 0, 0));
            Client.sendPacket(new C09PacketHeldItemChange(ogSlot1));
            swap_time = Date.now();
            // }
        }
    }
}

const doubleSwapClick = (button) => {
    if (macros.swapType === 1) {
        let slot1;
        let slot2;
        let ogSlot;
        Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
            if (item !== null && item.getName().includes(macros.doubleSwapSlot1)) {
                slot1 = index;
            }
            if (item !== null && item.getName().includes(macros.doubleSwapSlot2)) {
                slot2 = index;
            }
            if (item !== null && item.getName().includes(macros.swapMacroName)) {
                ogSlot = index;
            }
        });
        if (button === 0) {
            if (Client.currentGui.get() === null) {
                if (Date.now() - swap_time > 250) {
                    if (Player.getHeldItem() !== null && Player.getHeldItem().getName().includes(macros.swapMacroName)) {
                        Client.sendPacket(new C09PacketHeldItemChange(ogSlot1));
                        Client.sendPacket(new C09PacketHeldItemChange(slot1));
                        Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(slot1).getItemStack(), 0, 0, 0));
                        Client.sendPacket(new C09PacketHeldItemChange(slot2));
                        Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(slot2).getItemStack(), 0, 0, 0));
                        //  Player.setHeldItemIndex(ogSlot);
                        Client.sendPacket(new C09PacketHeldItemChange(ogSlot1));
                        swap_time = Date.now();
                    }
                }
            }
        }
    }
}

export {
    doubleSwapClick,
    doublwSwapStep
}; 