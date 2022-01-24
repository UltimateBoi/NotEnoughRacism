import { BP, C08PacketPlayerBlockPlacement, C09PacketHeldItemChange } from "../../utils/Constants";
import { RightClick } from "../../utils/Utils";

const grindGhosts = (toggle) => {
    try {
    if (toggle) {
        let giantsSlot;
        let soulwhipSlot;
        Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
            if (item !== null && (item.getName().includes("Giant's Sword") || item.getName().includes("Emerald Blade") || item.getName().includes("Valkyrie"))) {
                giantsSlot = index;
            }
            if (item !== null && item.getName().includes("Soul Whip")) {
                soulwhipSlot = index;
            }
        })
        if (Client.currentGui.get() === null) {
            try {
                Player.setHeldItemIndex(giantsSlot);
                Client.sendPacket(new C09PacketHeldItemChange(soulwhipSlot));
                Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(soulwhipSlot).getItemStack(), 0, 0, 0))
            } catch (e) { console.error(e) }
        }
    }
} catch (e) { console.error(e.message) }
}

export { grindGhosts };