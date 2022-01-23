import { macros } from "../../index";
import { PREFIX } from "../../utils/Constants"; 

let pet = false;
let sb = false;
let st = false;
let tried = false;
let page = 0



const enderChestTick = () => {
    ChatLib.chat(PREFIX + "Opening Ender Chest Page")
    ChatLib.command("pets")
    pet = true;
    tried = true;
    page = macros.echestPage
}

const enderChestGUI = () => {
    if (pet && tried) {
        let inv = Player.getOpenedInventory()
        if (inv.getName().includes("Pets")) {
            inv.click(48, false, "MIDDLE")
            pet = false;
            sb = true;
        }
    } else if (sb && tried) {
        let inv = Player.getOpenedInventory()
        if (inv.getName().includes("SkyBlock Menu")) {
            inv.click(25, false, "MIDDLE")
            sb = false;
            st = true;
        }
    } else if (st && tried) {
        let inv = Player.getOpenedInventory()
        if (inv.getName().includes("Storage")) {
            inv.click(page + 9, false, "LEFT")
            st = false;
            tried = false;
        }
    }
}

export { enderChestGUI, enderChestTick }; 