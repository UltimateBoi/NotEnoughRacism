import { macros } from "../..";

let swapTime = new Date().getTime()

const leftClickSoulWhip = (button, toggle) => {
    try {
        if (button === 0 && toggle) {
            let atomsplitslot;
            let whipslot;
            Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
                if (item.getName().includes(macros.leftClickWhip)) {
                    atomsplitslot = index;
                }
                if (item.getName().includes("Soul Whip")) {
                    whipslot = index;
                }
            });
            if (new Date().getTime() - swapTime > 500) {
                if (Player.getHeldItem() !== null) {
                    if (Player.getHeldItem().getName().includes(macros.leftClickWhip)) {
                        Player.setHeldItemIndex(whipslot);
                        RightClick.invoke(Client.getMinecraft());
                        Player.setHeldItemIndex(atomsplitslot);
                        swapTime = new Date().getTime();
                    }
                }
            }
        }
    } catch (e) { }
}

export { leftClickSoulWhip };