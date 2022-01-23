/// <reference types="../CTObfuscatedAutocomplete/index" />
/// <reference lib="esnext" />

import esp from "./esp";
import {
    @ButtonProperty,
Color,
    @ColorProperty,
@PercentSliderProperty,
@SelectorProperty,
@TextProperty,
@SwitchProperty,
@SliderProperty,
@Vigilant,
@CheckboxProperty,
@ParagraphProperty
} from '../../../Vigilance';

@Vigilant("NotEnoughRacismConfig/Macros", "Macros", {
    getCategoryComparator:() => (a, b) => {
        const categories = ['Not general!', 'General'];

        return categories.indexOf(b.name) - categories.indexOf(a.name);
    }
})

class Macros {


    @SliderProperty({
        name: "In Combat Macro Click Delay",
        description: "Set a Click Delay for In Combat Macros\n&8- Setting this lower than your ping will cause it to break, so ensure the delay is higher than your ping",
        category: "Misc",
        // subcategory: "Misc",
        min: "0",
        max: "1000"
    })
    wardrobeDelay = 500;

    @SwitchProperty({
        name: "Auto Salvage",
        description: "Automatically salvage non-starred dungeon items when inside of the salvage item menu.\n&8- You need to simply shift click the item in and it will salvage",
        category: "Misc",
        //subcategory: "Misc"
    })
    autoSalvage = false;

    @SwitchProperty({
        name: "Auto Combine",
        description: "Automatically combine enchanted books when inside of an anvil.",
        category: "Misc",
        // subcategory: "Misc"
    })
    autoCombine = false;

    @SwitchProperty({
        name: "Auto Mort",
        description: "Automatically starts dungeon and readies up.",
        category: "Misc",
        // subcategory: "Misc"
    })
    autoMort = false;

    @SelectorProperty({
        name: "Wardrobe Macro Type",
        description: "Choose In Combat or Normal Wardrobe Macro",
        category: "Misc",
        subcategory: "Wardrobe",
        options: ["Normal", "In Combat"]
    })
    wardrobeType = 0;

    @SelectorProperty({
        name: "Storage Macro Type",
        description: "Choose In Combat or Normal Storage Macro",
        category: "Storage",
        subcategory: "Type",
        options: ["Normal", "In Combat"]
    })
    storageType = 0;

    @SelectorProperty({
        name: "Storage Macro 1",
        category: "Storage",
        subcategory: "Slots",
        options: [
            "Backpack 1",
            "Backpack 2",
            "Backpack 3",
            "Backpack 4",
            "Backpack 5",
            "Backpack 6",
            "Backpack 7",
            "Backpack 8",
            "Backpack 9",
            "Backpack 10",
            "Backpack 11",
            "Backpack 12",
            "Backpack 13",
            "Backpack 14",
            "Backpack 15",
            "Backpack 16",
            "Backpack 17",
            "Backpack 18"
        ]
    })
    storage1 = 0;

    @SelectorProperty({
        name: "Storage Macro 2",
        category: "Storage",
        subcategory: "Slots",
        options: [
            "Backpack 1",
            "Backpack 2",
            "Backpack 3",
            "Backpack 4",
            "Backpack 5",
            "Backpack 6",
            "Backpack 7",
            "Backpack 8",
            "Backpack 9",
            "Backpack 10",
            "Backpack 11",
            "Backpack 12",
            "Backpack 13",
            "Backpack 14",
            "Backpack 15",
            "Backpack 16",
            "Backpack 17",
            "Backpack 18"
        ]
    })
    storage2 = 0;

    @SelectorProperty({
        name: "Storage Macro 3",
        category: "Storage",
        subcategory: "Slots",
        options: [
            "Backpack 1",
            "Backpack 2",
            "Backpack 3",
            "Backpack 4",
            "Backpack 5",
            "Backpack 6",
            "Backpack 7",
            "Backpack 8",
            "Backpack 9",
            "Backpack 10",
            "Backpack 11",
            "Backpack 12",
            "Backpack 13",
            "Backpack 14",
            "Backpack 15",
            "Backpack 16",
            "Backpack 17",
            "Backpack 18"
        ]
    })
    storage3 = 0;

    @SelectorProperty({
        name: "Storage Macro 4",
        category: "Storage",
        subcategory: "Slots",
        options: [
            "Backpack 1",
            "Backpack 2",
            "Backpack 3",
            "Backpack 4",
            "Backpack 5",
            "Backpack 6",
            "Backpack 7",
            "Backpack 8",
            "Backpack 9",
            "Backpack 10",
            "Backpack 11",
            "Backpack 12",
            "Backpack 13",
            "Backpack 14",
            "Backpack 15",
            "Backpack 16",
            "Backpack 17",
            "Backpack 18"
        ]
    })
    storage4 = 0;

    @SelectorProperty({
        name: "Ender Chest Macro",
        category: "Ender Chest",
        // subcategory: "Storage",
        options: [
            "Page 1",
            "Page 2",
            "Page 3",
            "Page 4",
            "Page 5",
            "Page 6",
            "Page 7",
            "Page 8",
            "Page 9"
        ]
    })
    echestPage = 0;


    @TextProperty({
        name: "Swap Delay",
        description: "Set a Swap Delay for Bone Macro",
        category: "Bone Macros",
        subcategory: "Delays"
    })
    swapDelay = ""

    @TextProperty({
        name: "Bone Delay",
        description: "Set a Bone Delay for Bone Macro",
        category: "Bone Macros",
        subcategory: "Delays"
    })
    boneDelay = ""

    @TextProperty({
        name: "Bone Macro Swap Slot 1",
        description: "Set Swap Slot 1 for Bone Macro",
        category: "Bone Macros",
        subcategory: "Item Slots"
    })
    swapSlot1 = ""

    @TextProperty({
        name: "Bone Macro Swap Slot 2",
        description: "Set Swap Slot 2 for Bone Macro",
        category: "Bone Macros",
        subcategory: "Item Slots"
    })
    swapSlot2 = ""

    @TextProperty({
        name: "Bone Macro Swap Slot 3",
        description: "Set Swap Slot 3 for Bone Macro",
        category: "Bone Macros",
        subcategory: "Item Slots"
    })
    swapSlot3 = ""

    @SelectorProperty({
        name: "Terminator Swap Type",
        description: "Swap between Toggle o Holding a key down",
        category: "Misc",
        subcategory: "Terminator",
        options: ["Toggle", "Hold"]
    })
    termSwap = 0;

    @SelectorProperty({
        name: "Axe of the Shredded Macro Type",
        description: "Change AOTS Macro bewteen Toggle and Hold",
        category: "Misc",
        subcategory: "Axe of the Shredded",
        options: ["Toggle", "Hold", "Left Click"]
    })
    axeSwap = 0;

    @TextProperty({
        name: "Axe of the Shredded Left Click Item",
        description: "Item you want Left Click AOTS to work with",
        category: "Misc",
        subcategory: "Axe of the Shredded"
    })
    aotsLCItem = "Valkyrie"; 

    @TextProperty({
        name: "Left Click Soul Whip Item",
        description: "Set the item you want Left Click Soul Whip to work with",
        category: "Misc",
        subcategory: "Soul Whip"
    })
    leftClickWhip = "Atomsplit Katana"

    @SelectorProperty({
        name: "Swap Type",
        description: "Set the swap type for Double Swap Macro",
        category: "Double Swap Macros",
        subcategory: "Swap Type",
        options: ["Swap", "Left Click"]
    })
    swapType = 0;

    @TextProperty({
        name: "Item to Left Click/Swap Back to",
        description: "/ct reload for the change to take effect",
        category: "Double Swap Macros",
        subcategory: "Item Slots"
    })
    swapMacroName = ""

    @TextProperty({
        name: "Swap Slot 1",
        category: "Double Swap Macros",
        subcategory: "Item Slots"
    })
    doubleSwapSlot1 = ""

    @TextProperty({
        name: "Swap Slot 2",
        category: "Double Swap Macros",
        subcategory: "Item Slots"
    })
    doubleSwapSlot2 = ""


    @SelectorProperty({
        name: "Swap Type",
        description: "Set the swap type for Triple Swap Macro",
        category: "Triple Swap Macros",
        subcategory: "General",
        options: ["Swap", "Left Click"]
    })
    typeOfSwap = 0;

    @TextProperty({
        name: "Item to Left Click/Swap Back to",
        description: "/ct reload for the change to take effect",
        category: "Triple Swap Macros",
        subcategory: "Item Slots"
    })
    macroSwapName = ""

    @TextProperty({
        name: "Swap Slot 1",
        category: "Triple Swap Macros",
        subcategory: "Item Slots"
    })
    tripleSwapSlot1 = ""

    @TextProperty({
        name: "Swap Slot 2",
        category: "Triple Swap Macros",
        subcategory: "Item Slots"
    })
    tripleSwapSlot2 = ""

    @TextProperty({
        name: "Swap Slot 3",
        category: "Triple Swap Macros",
        subcategory: "Item Slots",
    })
    tripleSwapSlot3 = ""

    @SliderProperty({
        name: "Triple Swap Delay (ms)",
        category: "Triple Swap Macros",
        subcategory: "General",
        min: 0,
        max: 500
    })
    tripleSwapDelay = 100;


    constructor() {
        this.initialize(this);
    }
}
export default new Macros;