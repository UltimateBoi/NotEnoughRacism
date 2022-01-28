import { macros } from "../..";
import { BP, C08PacketPlayerBlockPlacement, C09PacketHeldItemChange } from "../../utils/Constants";

let swapTime = new Date().getTime()

const leftClickSoulWhip = (button, toggle) => {
    try {
        if (button === 0 && toggle) {
            let atomsplitslot;
            let whipslot;
            Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
                if (item !== null && item.getName().includes(macros.leftClickWhip)) {
                    atomsplitslot = index;
                }
                if (item !== null && item.getName().includes("Soul Whip")) {
                    whipslot = index;
                }
            });
            if (new Date().getTime() - swapTime > 500) {
                if (Player.getHeldItem() !== null) {
                    if (Client.currentGui.get() === null) {
                        if (Player.getHeldItem().getName().includes(macros.leftClickWhip)) {
                            Client.sendPacket(new C09PacketHeldItemChange(whipslot));
                            Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(whipslot).getItemStack(), 0, 0, 0))
                            Client.sendPacket(new C09PacketHeldItemChange(atomsplitslot));
                            swapTime = new Date().getTime();
                        }
                    }
                }
            }
        }
    } catch (e) { console.error(e.message) }
}

export { leftClickSoulWhip };