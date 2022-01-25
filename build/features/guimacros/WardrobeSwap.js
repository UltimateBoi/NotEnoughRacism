import { macros } from "../../index";
import { mc } from "../../utils/Constants";
import { PREFIX } from "../../utils/Constants";

let attemptedToSwapArmor = false;
let hasOpenedSBMenu = false;
let hasOpenedWardrobeMenu = false;
let slotNumber = 69;

const autoWardrobeTick = (first, second, third, fourth, fifth, sixth, seventh, eighth, nineth) => {
    if (first.isPressed()) {
        ChatLib.chat(PREFIX + "Swapping Armor")
        ChatLib.command("pets");
        slotNumber = 1;
        attemptedToSwapArmor = true;
    }
    if (second.isPressed()) {
        ChatLib.chat(PREFIX + "Swapping Armor")
        ChatLib.command("pets");
        slotNumber = 2;
        attemptedToSwapArmor = true;
    }
    if (third.isPressed()) {
        ChatLib.chat(PREFIX + "Swapping Armor")
        ChatLib.command("pets");
        slotNumber = 3;
        attemptedToSwapArmor = true;
    }
    if (fourth.isPressed()) {
        ChatLib.chat(PREFIX + "Swapping Armor")
        ChatLib.command("pets");
        slotNumber = 4;
        attemptedToSwapArmor = true;
    }
    if (fifth.isPressed()) {
        ChatLib.chat(PREFIX + "Swapping Armor")
        ChatLib.command("pets");
        slotNumber = 5;
        attemptedToSwapArmor = true;
    }
    if (sixth.isPressed()) {
        ChatLib.chat(PREFIX + "Swapping Armor")
        ChatLib.command("pets");
        slotNumber = 6;
        attemptedToSwapArmor = true;
    }
    if (seventh.isPressed()) {
        ChatLib.chat(PREFIX + "Swapping Armor")
        ChatLib.command("pets");
        slotNumber = 7;
        attemptedToSwapArmor = true;
    }
    if (eighth.isPressed()) {
        ChatLib.chat(PREFIX + "Swapping Armor")
        ChatLib.command("pets");
        slotNumber = 8;
        attemptedToSwapArmor = true;
    }
    if (nineth.isPressed()) {
        ChatLib.chat(PREFIX + "Swapping Armor")
        ChatLib.command("pets");
        slotNumber = 9;
        attemptedToSwapArmor = true;
    }
}

const autoWardrobeGUI = () => {
    //  try {
    if (attemptedToSwapArmor && Player.getOpenedInventory().getName().includes("Pets")) {
        let inv = Player.getOpenedInventory();
        inv.click(48, false, "MIDDLE");
        hasOpenedSBMenu = true;
    } else if (attemptedToSwapArmor && hasOpenedSBMenu && Player.getOpenedInventory().getName().includes("SkyBlock Menu")) {
        let inv = Player.getOpenedInventory();
        inv.click(32, false, "MIDDLE");
        hasOpenedWardrobeMenu = true;
    } else if (attemptedToSwapArmor && hasOpenedWardrobeMenu && Player.getOpenedInventory().getName().includes("Wardrobe")) {
        let inv = Player.getOpenedInventory();
        for (let i = 0; i < 45; i++) {
            let item = inv.getStackInSlot(i);
            if (item !== null && item.getName().includes(`Slot ${slotNumber}:`)) {
                let action = Action.of(inv, i, "CLICK");
                action.setClickString("LEFT");
                action.complete();
                setTimeout(() => {
                    Client.currentGui.close();
                }, 100);
                hasOpenedSBMenu = false;
                hasOpenedWardrobeMenu = false;
                attemptedToSwapArmor = false;
            }
        }
    }
    //  } catch (e) { console.log(e) }
}

export { autoWardrobeGUI, autoWardrobeTick }; 