import {
    RightClick
} from "../../utils/Utils";
import {
    macros
} from "../../index";

let swap_time = Date.now();


const tripleSwapStep = () => {
    if (macros.typeOfSwap === 0) {
        let itemSlot1;
        let itemSlot2;
        let itemSlot3;
        let originalSlot;
        Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
            if (item !== null && item.getName().includes(macros.tripleSwapSlot1)) {
                itemSlot1 = index;
            }
            if (item !== null && item.getName().includes(macros.tripleSwapSlot2)) {
                itemSlot2 = index;
            }
            if (item !== null && item.getName().includes(macros.tripleSwapSlot3)) {
                itemSlot3 = index;
            }
            if (item !== null && item.getName().includes(macros.macroSwapName)) {
                originalSlot = index;
            }
        })
        if (Client.currentGui.get() === null) {
            if (Date.now() - swap_time > 250) {
                new Thread(() => {
                    Thread.sleep(macros.tripleSwapDelay);
                    Player.setHeldItemIndex(itemSlot1);
                    Thread.sleep(macros.tripleSwapDelay);
                    RightClick.invoke(Client.getMinecraft());
                    Player.setHeldItemIndex(itemSlot2);
                    Thread.sleep(macros.tripleSwapDelay);
                    RightClick.invoke(Client.getMinecraft());
                    Player.setHeldItemIndex(itemSlot3);
                    Thread.sleep(macros.tripleSwapDelay);
                    RightClick.invoke(Client.getMinecraft());
                    Player.setHeldItemIndex(originalSlot);
                    swap_time = Date.now();
                }).start()
            }
        }
    }
}

const tripleSwapClick = (button) => {
    if (macros.typeOfSwap === 1) {
        let itemSlot1;
        let itemSlot2;
        let itemSlot3;
        let originalSlot;
        Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
            if (item !== null && item.getName().includes(macros.tripleSwapSlot1)) {
                itemSlot1 = index;
            }
            if (item !== null && item.getName().includes(macros.tripleSwapSlot2)) {
                itemSlot2 = index;
            }
            if (item !== null && item.getName().includes(macros.tripleSwapSlot3)) {
                itemSlot3 = index;
            }
            if (item !== null && item.getName().includes(macros.macroSwapName)) {
                originalSlot = index;
            }
        })
        if (button === 0) {
            if (Client.currentGui.get() === null) {
                if (Date.now() - swap_time > 500) {
                    if (Player.getHeldItem() !== null && Player.getHeldItem().getName().includes(macros.macroSwapName)) {
                        new Thread(() => {
                            Thread.sleep(macros.tripleSwapDelay);
                            Player.setHeldItemIndex(itemSlot1);
                            Thread.sleep(macros.tripleSwapDelay);
                            RightClick.invoke(Client.getMinecraft());
                            Player.setHeldItemIndex(itemSlot2);
                            Thread.sleep(macros.tripleSwapDelay);
                            RightClick.invoke(Client.getMinecraft());
                            Player.setHeldItemIndex(itemSlot3);
                            Thread.sleep(macros.tripleSwapDelay);
                            RightClick.invoke(Client.getMinecraft());
                            Player.setHeldItemIndex(originalSlot);
                            swap_time = Date.now();
                        }).start()
                    }
                }
            }
        }
    }
}

export {
    tripleSwapClick,
    tripleSwapStep
}; 