import { macros } from "../../index"; 
import { PREFIX } from "../../utils/Constants"; 

let inPets = false;
let inSBMenu = false;
let openStorage = false;

const openStorageTick = () => {
    if (macros.storageType === 0) {
        ChatLib.chat(PREFIX + "Opening Storage")
        ChatLib.command("storage")
    } else if (macros.storageType === 1) {
        ChatLib.chat(PREFIX + "Opening In Combat Storage")
        ChatLib.command("pets")
        inPets = true;
        openStorage = true;
    }
}

const openStorageGUI = () => {
    if (inPets && openStorage) {
        let inv = Player.getOpenedInventory()
        if (inv.getName().includes("Pets")) {
            inv.click(48, false, "MIDDLE")
            inPets = false;
            inSBMenu = true;
        }
    } else if (inSBMenu && openStorage) {
        let inv = Player.getOpenedInventory()
        if (inv.getName().includes("SkyBlock Menu")) {
            inv.click(25, false, "MIDDLE")
            inSBMenu = false;
            openStorage = false;
        }
    }
}

// --------------------------------------------------------------------------------------------------------

let inPet = false;
let inSB = false;
let inStorage = false;
let storageOpen = false;
let slot = 0;

const autoStorageTick = (one, two, three, four) => {
    if (one.isPressed()) {
        ChatLib.chat(PREFIX + "Opening Backpack")
        ChatLib.command("pets")
        inPet = true;
        storageOpen = true;
        slot = macros.storage1
    }
    if (two.isPressed()) {
        ChatLib.chat(PREFIX + "Opening Backpack")
        ChatLib.command("pets")
        inPet = true;
        storageOpen = true;
        slot = macros.storage2
    }
    if (three.isPressed()) {
        ChatLib.chat(PREFIX + "Opening Backpack")
        ChatLib.command("pets")
        inPet = true;
        storageOpen = true;
        slot = macros.storage3
    }
    if (four.isPressed()) {
        ChatLib.chat(PREFIX + "Opening Backpack")
        ChatLib.command("pets")
        inPet = true;
        storageOpen = true;
        slot = macros.storage4
    }
}

const autoStorageGUI = () => {
    if (inPet && storageOpen) {
        let inv = Player.getOpenedInventory()
        if (inv.getName().includes("Pets")) {
            inv.click(48, false, "MIDDLE")
            inPet = false;
            inSB = true;
        }
    } else if (inSB && storageOpen) {
        let inv = Player.getOpenedInventory()
        if (inv.getName().includes("SkyBlock Menu")) {
            inv.click(25, false, "MIDDLE")
            inSB = false;
            inStorage = true;
        }
    } else if (inStorage && storageOpen) {
        let inv = Player.getOpenedInventory()
        if (inv.getName().includes("Storage")) {
            inv.click(slot + 27, false, "LEFT")
            inStorage = false;
            storageOpen = false;
        }
    }
}

export {
    openStorageTick,
    openStorageGUI,
    autoStorageGUI,
    autoStorageTick
}; 