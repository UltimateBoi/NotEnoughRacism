import {
    RightClick
} from "../../utils/Utils";
import {
    macros
} from "../../index";

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
                Player.setHeldItemIndex(ogSlot);
                Player.setHeldItemIndex(slot1);
                RightClick.invoke(Client.getMinecraft());
                Player.setHeldItemIndex(slot2);
                RightClick.invoke(Client.getMinecraft());
                Player.setHeldItemIndex(ogSlot);
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
                        Player.setHeldItemIndex(ogSlot);
                        Player.setHeldItemIndex(slot1);
                        RightClick.invoke(Client.getMinecraft());
                        Player.setHeldItemIndex(slot2);
                        RightClick.invoke(Client.getMinecraft());
                        Player.setHeldItemIndex(ogSlot);
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