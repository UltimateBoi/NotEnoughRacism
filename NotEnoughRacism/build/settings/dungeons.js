/// <reference types="../CTObfuscatedAutocomplete/index" />
/// <reference lib="esnext" />

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

@Vigilant("NotEnoughRacismConfig/Dungeons", "Dungeons", {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Not general!', 'General'];

        return categories.indexOf(b.name) - categories.indexOf(a.name);
    }
})
class Dungeons {


    @SelectorProperty({
        name: "Ghost Block Mode",
        description: "The ghost blocking mode.\n&8- Legit requires a Stonk in your hotbar and only works on blocks that a Stonk can insta break",
        category: "Ghost Blocks",
        subcategory: "Ghost Blocks",
        options: ["Normal", "Legit"]
    })
    ghostBlockMode = 0;


    @SwitchProperty({
        name: "Coordinate Ghost Blocks",
        description: "Automatically creates Ghost Blocks in Floor 7 Boss Room",
        category: "Ghost Blocks",
        subcategory: "Ghost Blocks"
    }) coordGB = false;

    @SwitchProperty({
        name: "Stonk Ghost Blocks",
        description: "Creates Ghost Blocks when you right/left click with a Stonk/Golden Pickaxe\n&8- Might be a bit buggy",
        category: "Ghost Blocks",
        subcategory: "Ghost Blocks"
    }) stonkGB = false;

    @SelectorProperty({
        name: "Stonk Ghost Block Click",
        description: "Select on which click ghost blocks are created",
        category: "Ghost Blocks",
        subcategory: "Ghost Blocks",
        options: ["Right Click", "Left Click"]
    }) stonkGBType = 0;

    //---------------------------------------------------------------------------------------------------

    @SwitchProperty({
        name: "Auto Spirit Leap",
        description: "Enable/Disable AutoSpirit\n&8- Set the ign with /leapign ign",
        category: "Auto Spirit Leap",
        subcategory: "Auto Spirit Leap"
    }) autospiritToggle = false;

    @TextProperty({
        name: "Leap Name",
        description: "Enter the name you want to leap to",
        category: "Auto Spirit Leap",
        subcategory: "Auto Spirit Leap"
    }) spiritNAME = ""

    @SwitchProperty({
        name: "Auto Leap in Terms",
        description: "Auto Leaps to the IGN You set after s1 is done\n&8- Set the ign with /s1ign ign",
        category: "Auto Spirit Leap",
        subcategory: "S1 Auto Leap"
    })
    autoS1Leap = false;

    @TextProperty({
        name: "S1 Leap Name",
        description: "Enter the name you want to leap to",
        category: "Auto Spirit Leap",
        subcategory: "S1 Auto Leap"
    })
    s1LeapName = ""

    @SwitchProperty({
        name: "Bugged Chunk Leap",
        description: "Auto Leaps to the IGN You set after 17s\n&8- Set the ign with /bcign ign",
        category: "Auto Spirit Leap",
        subcategory: "Bugged Chunk Leap"
    })
    buggedChunkLeap = false;

    @TextProperty({
        name: "Bugged Chunk Leap Name",
        description: "Enter name you want to leap to",
        category: "Auto Spirit Leap",
        subcategory: "Bugged Chunk Leap"
    })
    buggedChunkName = ""

    @SliderProperty({
        name: "Bugged Chunk Leap Delay",
        category: "Auto Spirit Leap",
        subcategory: "Bugged Chunk Leap",
        min: 0,
        max: 30
    })
    buggedChunkLeapTime = 17;

    //---------------------------------------------------------------------------------------------------

    // @SwitchProperty({
    //     name: "Block Sword Animation",
    //     description: "Blocks the right click animation for some swords",
    //     category: "Block Sword Animation",
    //     subcategory: "Block Sword Animation"
    // }) blockSword = false;


    // @ParagraphProperty({
    //     name: "Block Sword Animation Swords",
    //     description: 'Edit which swords animations are blocked\n&8- For swords like "End Stone Sword", you need to enter "end stone" (basically remove "sword")\n&8- Use a "," to split items',
    //     category: "Block Sword Animation",
    //     subcategory: "Block Sword Animation"

    // })
    // blockedSwords = "Hyperion, Scylla, Valkyrie, Astraea, Rogue, Aspect of the End"

    //---------------------------------------------------------------------------------------------------

    @SwitchProperty({
        name: "Reveal Hidden Fels",
        description: "Reveals Hidden Fels",
        category: "QOL",
        subcategory: "Entities"
    })
    hiddenFels = false;

    @SwitchProperty({
        name: "Revels Hidden Shadow Assassins",
        description: "Reveals Hidden Shadow Assassins",
        category: "QOL",
        subcategory: "Entities"
    })
    hiddenSA = false;

    @SwitchProperty({
        name: "Reveal Hidden Blood Mobs",
        description: "Reveals Stealthy Blood Mobs",
        category: "QOL",
        subcategory: "Entities"
    })
    hiddenBloodMobs = false;

    // @SwitchProperty({
    //     name: "Hide Non Starred Mobs Name Tags",
    //     category: "QOL",
    //     subcategory: "Entities"
    // })
    // nonStarMobsTags = false;

    // @SwitchProperty({
    //     name: "Hide Terracota Name Tags",
    //     category: "QOL",
    //     subcategory: "Entities"
    // })
    // terraNameTags = false;

    @SwitchProperty({
        name: "Auto Close Chests",
        description: "Auto closes the Chest GUI",
        category: "QOL",
        subcategory: "QOL"
    })
    autoCloseSecretChests = false;

    @SwitchProperty({
        name: "Hit through Wither Cloak Creepers",
        category: "QOL",
        subcategory: "Entities"
    })
    creeperGhostArm = false;

    // @SwitchProperty({
    //     name: "Spirit Bear Aimbot",
    //     description: "Auto Looks at the Spirit Bear and Left Clicks",
    //     category: "QOL",
    //     subcategory: "Spirit Bear"
    // })
    // spiritBearAura = false;
    //---------------------------------------------------------------------------------------------------

    @SwitchProperty({
        name: "Block Giant Sword Right Click",
        category: "Block Clicks",
        subcategory: "Block Clicks"
    })
    gsBlock = false;

    @SwitchProperty({
        name: "Block Cells Allignment",
        category: "Block Clicks",
        subcategory: "Block Clicks"
    })
    gyroBlock = false;
    //---------------------------------------------------------------------------------------------------

    @SliderProperty({
        name: "Auto Sell Delay",
        description: "Set a Click Delay for Auto Sell Macros\n&8- Setting this lower than your ping may cause it to break or miss a few items",
        category: "Macros",
        subcategory: "Auto Sell",
        min: "0",
        max: "500"
    })
    autoSell = 250;

    @ParagraphProperty({
        name: "Add Items to Dungeon Sell",
        description: "Add more items to the Sell List",
        category: "Macros",
        subcategory: "Auto Sell"
    })
    dungSellList = ""

    // @ParagraphProperty({
    //     name: "Enchanted Books to Sell",
    //     description: "Set which enchanted books are sold\n&8- Seperate books with a ,",
    //     category: "Macros",
    //     subcategory: "Auto Sell"
    // })
    // bookSellList = ""

    @ButtonProperty({
        name: "Default Items",
        description: "Click the button to import default Sell Items and Books",
        category: "Macros",
        subcategory: "Auto Sell"
    })
    DefaultSellItems() {
        ChatLib.command("dungitems", true)
    }

    // @SliderProperty({
    //     name: "Auto Rogue Speed",
    //     description: "Set the speed you want Auto Rogue to click till\n&8- Only set it in multiples of 10",
    //     category: "Macros",
    //     subcategory: "Auto Rogue",
    //     min: "0",
    //     max: "500"
    // })
    // autoRogueSpeed = 500;

    @SliderProperty({
        name: "Auto Rogue Clicks",
        description: "Set how many times Auto Rogue will Click",
        category: "Macros",
        subcategory: "Auto Rogue",
        min: 0,
        max: 100
    })
    autoRogueClicks = 0;

    @SliderProperty({
        name: "Auto Rogue Frequency",
        description: "Set how often Auto Rogue will trigger",
        category: "Macros",
        subcategory: "Auto Rogue",
        min: 0,
        max: 60
    })
    autoRogueCD = 30;

    // @SwitchProperty({
    //     name: "Disable Auto Rogue in a GUI",
    //     description: "Disabled Auto Rogue when opening a GUI/Chat",
    //     category: "Macros",
    //     subcategory: "Auto Rogue"
    // })
    // autoRogueGUI = false;

    // @SwitchProperty({
    //     name: "Rabbit Hat Swap",
    //     category: "Macros",
    //     subcategory: "Rabbit Hat"
    // })
    // rabbitHat = false;

    // @ParagraphProperty({
    //     name: "Helmets to swap",
    //     description: "Set which helmets are swapped with Rabbit Hat\n&8- Seperate each with a ,",
    //     category: "Macros",
    //     subcategory: "Rabbit Hat"
    // })
    // rabHatHelmets = "Wither Goggles, Diamond Necron Head"
    //     //---------------------------------------------------------------------------------------------------

    // @SwitchProperty({
    //     name: "Toggle Secret Aura",
    //     description: "This is an alternative toggle to using the keybind found in your minecraft controls settings",
    //     category: "Secret Aura",
    //     subcategory: ""
    // })
    // secretAuraToggle = false;

    // @SliderProperty({
    //     name: "Secret Aura Reach",
    //     description: "Set the maximum reach of the secret aura",
    //     category: "Secret Aura",
    //     subcategory: "",
    //     min: 1,
    //     max: 6
    // })
    // auraReach = 5;

    // @TextProperty({
    //     name: "Secret Aura Item",
    //     description: "Choose which item you want to use to click the secret",
    //     category: "Secret Aura",
    //     subcategory: ""
    // })
    // auraHeldItem = "Rogue Sword";


    // @SwitchProperty({
    //     name: "Crystal Reach",
    //     description:"",
    //     category: "Simon Says",
    //     subcategory: "Crystal Aura"
    // })
    // crystalAura = false;


    @SwitchProperty({
        name: "Auto Simon Says",
        description: "Auto does Simon Says when you click the starting button",
        category: "Simon Says",
        subcategory: "Auto Simon Says"
    })
    autoSS = false;

    @SelectorProperty({
        name: "Auto Simon Says Type",
        description: "",
        category: "Simon Says",
        subcategory: "Auto Simon Says",
        options: ["Click", "Aura"]
    })
    autoSSType = 0;

    @SliderProperty({
        name: "Auto Simons Says CPS",
        description: "Default is 100",
        category: "Simon Says",
        subcategory: "Auto Simon Says",
        min: 0,
        max: 200
    })
    autoSSCPS = 100;

    @SliderProperty({
        name: "Auto Simon Says Reach",
        description: "Set the Reach for Auto Simon Says",
        category: "Simon Says",
        subcategory: "Auto Simon Says",
        min: 0,
        max: 6
    })
    autoSSReach = 6;

    // @SwitchProperty({
    //     name: "Lights Aura",
    //     category: "Simon Says",
    //     subcategory: "Lights Aura"
    // })
    // lightsaAura = false;

    // @SliderProperty({
    //     name: "Lights Aura Reach",
    //     category: "Simon Says",
    //     subcategory: "Lights Aura",
    //     min: 0,
    //     max: 6
    // })
    // lightsAuraReach = 0;

    constructor() {
        this.initialize(this);
    }
}
export default new Dungeons;
