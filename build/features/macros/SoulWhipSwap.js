import { RightClick } from "../../utils/Utils";

const grindGhosts = (toggle) => {
    try {
    if (toggle) {
        let giantsSlot;
        let soulwhipSlot;
        Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
            if (item.getName().includes("Giant's Sword") || item.getName().includes("Emerald Blade") || item.getName().includes("Valkyrie")) {
                giantsSlot = index;
            }
            if (item.getName().includes("Soul Whip")) {
                soulwhipSlot = index;
            }
        })
        if (Client.currentGui.get() === null) {
            try {
                Player.setHeldItemIndex(giantsSlot);
                Player.setHeldItemIndex(soulwhipSlot);
                RightClick.invoke(Client.getMinecraft());
            } catch (e) { }
        }
    }
} catch (e) {}
}

export { grindGhosts };