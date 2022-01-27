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


    @ButtonProperty({
        name: "Default Items",
        description: "Click the button to import default Sell Items and Books",
        category: "Macros",
        subcategory: "Auto Sell"
    })
    DefaultSellItems() {
        ChatLib.command("dungitems", true)
    }

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

    @SwitchProperty({
        name: "Secret Aura",
        description: "This is an alternative toggle to using the keybind found in your minecraft controls settings",
        category: "Secret Aura",
        subcategory: ""
    })
    secretAuraToggle = false;

    @SliderProperty({
        name: "Secret Aura Reach",
        description: "Set the maximum reach of the secret aura",
        category: "Secret Aura",
        subcategory: "",
        min: 1,
        max: 6
    })
    auraReach = 5;

    @TextProperty({
        name: "Secret Aura Item",
        description: "Choose which item you want to use to click the secret",
        category: "Secret Aura",
        subcategory: ""
    })
    auraHeldItem = "Rogue Sword";

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
        name: "Auto Simon Says CPS",
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
    //     name: "Auto TNT",
    //     description: "Automatically places TNT",
    //     category: "Auto TNT",
    //     subcategory: "Auto TNT"
    // })
    // autoTNT = false; 

    // @CheckboxProperty({
    //     name: "Auto Crypt",
    //     category: "Auto TNT",
    //     subcategory: "Auto TNT"
    // })
    // autoCrypt = false;

    // @CheckboxProperty({
    //     name: "Auto Cracked Bricks",
    //     category: "Auto TNT",
    //     subcategory: "Auto TNT"
    // })
    // autoWall = false;

    // @CheckboxProperty({
    //     name: "Auto Break Gate",
    //     category: "Auto TNT",
    //     subcategory: "Auto TNT"
    // })
    // autoGate = false;
    
    // @SwitchProperty({
    //     name: "Stonkless Stonk",
    //     description: "Secret Aura but requires a click on the ESP Box\n&8- Idea taken from Shady Addons",
    //     category: "Stonkless Stonk",
    //     subcategory: "Stonkless Stonk"
    // })
    // stonklessStonk = false; 

    // @CheckboxProperty({
    //     name: "Disable in Boss",
    //     category: "Stonkless Stonk",
    //     subcategory: "Stonkless Stonk"
    // })
    // disableStonklessInBoss = false;
    
    // @SliderProperty({
    //     name: "Stonkless Stonk Reach",
    //     category: "Stonkless Stonk",
    //     subcategory: "Stonkless Stonk",
    //     min: 0,
    //     max: 6
    // })
    // stonklessStonkReach = 6;



    constructor() {
        this.initialize(this);
        this.addDependency("Secret Aura Reach", "Secret Aura");
        this.addDependency("Secret Aura Item", "Secret Aura");
        this.addDependency("Leap Name", "Auto Spirit Leap");
        this.addDependency("Bugged Chunk Leap Name", "Bugged Chunk Leap");
        this.addDependency("Bugged Chunk Leap Delay", "Bugged Chunk Leap");
        this.addDependency("S1 Leap Name", "Auto Leap in Terms");
        this.addDependency("Stonk Ghost Block Click", "Stonk Ghost Blocks");
        this.addDependency("Auto Simon Says Type", "Auto Simon Says");
        this.addDependency("Auto Simon Says CPS", "Auto Simon Says");
        this.addDependency("Auto Simon Says Reach", "Auto Simon Says");
        // this.addDependency("Stonkless Stonk Reach", "Stonkless Stonk");
        // this.addDependency("Disable in Boss", "Stonkless Stonk");
        // this.addDependency("Auto Crypt", "Auto TNT");
        // this.addDependency("Auto Cracked Bricks", "Auto TNT"); 
        // this.addDependency("Auto Break Gate", "Auto TNT");
    }
}
export default new Dungeons;
