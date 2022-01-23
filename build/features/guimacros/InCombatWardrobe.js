import { macros } from "../../index";
import { PREFIX } from "../../utils/Constants"; 


let pets = false;
let sbMenu = false;
let openWardrobe = false;



const InCombatWardrobeTick = () => {
    if (macros.wardrobeType === 1) {
        ChatLib.command("pets");
        ChatLib.chat(PREFIX + "Opening Wardrobe")
        pets = true;
        openWardrobe = true;
    } else if (macros.wardrobeType === 0) {
        ChatLib.command("wardrobe")
        ChatLib.chat(PREFIX + "Opening Wardrobe")
    }
}

const inCombatWardrobeGUI = () => {
    if (pets === true && openWardrobe === true) {
        if (Player.getOpenedInventory().getName().includes("Pets")) {
            Player.getOpenedInventory().click(48, false, "MIDDLE") // Goes to SB Menu
            sbMenu = true;
            pets = false;
        }
    } else if (sbMenu === true && openWardrobe === true) {
        if (Player.getOpenedInventory().getName().includes("SkyBlock Menu")) {
            Player.getOpenedInventory().click(32, false, "MIDDLE") // Enters Wardrobe Menu
            pets = false;
            sbMenu = false;
            openWardrobe = false;
        }
    }
}

export { inCombatWardrobeGUI, InCombatWardrobeTick }; 