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


@Vigilant("NotEnoughRacismConfig/General", "General", {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Not general!', 'General'];

        return categories.indexOf(b.name) - categories.indexOf(a.name);
    }
})
class Settings {

    moveSongGui = new Gui(); 

    @SliderProperty({
        name: "NER Chroma Speed",
        description: "For some reason the lower the slider is, the faster the chroma and the higher the slider is the slower the chroma",
        category: "General",
        subcategory: "Settings",
        min: 1,
        max: 50
    })
    chromaSpeed = 15;

    @SelectorProperty({
        name: "NER Gui Button-style",
        description: "Choose, whether you want to gui buttons to have a chroma or a white text",
        category: "General",
        subcategory: "Settings",
        options: ['Chroma', 'White']
    })
    guibuttonstyle = 0;

    @SwitchProperty({
        name: "Rich Presence",
        description: "Enable Discord Rich Presence for NotEnoughRacism",
        category: "General",
        subcategory: "Settings"
    })
    rpcEnabled = false;

    // @SwitchProperty({
    //     name: "Spotify Controller",
    //     description: "Toggles Spotify Controls",
    //     category: "Spotify",
    //     subcategory: "Spotify"
    // })
    // spotifyToggle = false;

    // @SwitchProperty({
    //     name: "Render current song",
    //     description: "Renders current song on screen",
    //     category: "Spotify",
    //     subcategory: "Spotify",
    // })
    // renderSong = false;

    // @ButtonProperty({
    //     name: "Move Rendered Song",
    //     description: "Set the location for the Rendered Song",
    //     category: "Spotify",
    //     subcategory: "Spotify",
    //     placeholder: "Move"
    // })
    // moveSong() {
    //     this.moveSongGui.open()
    // }; 

    // @ButtonProperty({
    //     name: "Link Spotify",
    //     description: "Link your Spotify Account",
    //     category: "Spotify",
    //     subcategory: "Spotify",
    //     placeholder: "Link"
    // })
    // linkSpotify() {
    //     SpotifyController.initialize();
    // };

    // @SliderProperty({
    //     name: "width",
    //     category: "Spotify",
    //     subcategory: "Spotify",
    //     hidden: true,
    //     min: 16,
    //     max: 1000
    // })
    // spotifyWidth = 16; 

    // @SliderProperty({
    //     name: "height",
    //     category: "Spotify",
    //     subcategory: "Spotify",
    //     hidden: true,
    //     min: 5,
    //     max: 1000
    // })
    // spotifyHeight = 5; 

    // @SliderProperty({
    //     name: "spotifyX",
    //     category: "Spotify",
    //     subcategory: "Spotify",
    //     hidden: true,
    //     min: 0,
    //     max: Renderer.screen.getWidth()
    // })
    // spotifyX = 0; 

    // @SliderProperty({
    //     name: "spotifyY",
    //     category: "Spotify",
    //     subcategory: "Spotify",
    //     hidden: true,
    //     min: 0,
    //     max: Renderer.screen.getHeight()
    // })
    // spotifyY = 0; 

    // @SliderProperty({
    //     name: "imgX",
    //     category: "Spotify",
    //     subcategory: "Spotify",
    //     hidden: true,
    //     min: 0,
    //     max: Renderer.screen.getHeight()
    // })
    // imX = 0; 

    // @SliderProperty({
    //     name: "imgY",
    //     category: "Spotify",
    //     subcategory: "Spotify",
    //     hidden: true,
    //     min: 0,
    //     max: Renderer.screen.getHeight()
    // })
    // imgY = 0; 

    @SwitchProperty({
        name: "Auto Island",
        description: "Returns to your island upon a server restart",
        category: "Auto Island",
        subcategory: "Auto Island"
    })
    autoIsland = false;

    @SelectorProperty({
        name: "Auto Island Type",
        description: "Choose the type of Auto Island\n&8- If your account is in the coop choose Normal, if they are not choose Visit",
        category: "Auto Island",
        subcategory: "Auto Island",
        options: ["Normal", "Visit"]
    })
    autoIslandType = 0;

    @TextProperty({
        name: "Auto Island IGN",
        description: "Set the IGN for the account to visit\n&8- The spelling/capatilisation must be accurate as the detection depends on it",
        category: "Auto Island",
        subcategory: "Auto Island"
    })
    autoIslandIGN = ""


    @SwitchProperty({
        name: "Reveal Hidden Mobs",
        category: "Reveal Hidden Mobs",
        subcategory: "Reveal Hidden Mobs"
    })
    revealHiddenMobs = false;

    @CheckboxProperty({
        name: "Reveal Hidden Fels",
        description: "Reveals Hidden Fels",
        category: "Reveal Hidden Mobs",
        subcategory: "Reveal Hidden Mobs"
    })
    hiddenFels = false;

    @CheckboxProperty({
        name: "Reveal Hidden Shadow Assassins",
        description: "Reveals Hidden Shadow Assassins",
        category: "Reveal Hidden Mobs",
        subcategory: "Reveal Hidden Mobs"
    })
    hiddenSA = false;

    @CheckboxProperty({
        name: "Reveal Hidden Blood Mobs",
        description: "Reveals Stealthy Blood Mobs",
        category: "Reveal Hidden Mobs",
        subcategory: "Reveal Hidden Mobs"
    })
    hiddenBloodMobs = false;


    @CheckboxProperty({
        name: "Reveal Hidden Ghosts",
        description: "Reveals Hidden Ghosts",
        category: "Reveal Hidden Mobs",
        subcategory: "Reveal Hidden Mobs"
    })
    hiddenGhosts = false;

    @SwitchProperty({
        name: "Ghost Arm",
        category: "Ghost Arm",
        subcategory: "Ghost Arm"
    })
    ghostArmToggle = false;

    @CheckboxProperty({
        name: "Hit through Players",
        description: "Allows you to hit through players",
        category: "Ghost Arm",
        subcategory: "Ghost Arm"
    })
    playerGhostArm = false;

    @CheckboxProperty({
        name: "Summons Ghost Arm",
        description: "Allows you to hit through summons\n&8- Only works with Summons which are Zombies in Leather Armor",
        category: "Ghost Arm",
        subcategory: "Ghost Arm"
    }) ghostArm = false;

    @CheckboxProperty({
        name: "Hit through Wither Cloak Creepers",
        category: "Ghost Arm",
        subcategory: "Ghost Arm"
    })
    creeperGhostArm = false;

    @CheckboxProperty({
        name: "Livid Ghost Arm",
        description: "Allows you to hit through incorrect livids",
        category: "Ghost Arm",
        subcategory: "Ghost Arm"
    })
    lividGhostArm = false;

    @SwitchProperty({
        name: "Block Clicks",
        category: "Block Clicks",
        subcategory: "Block Clicks"
    })
    blockClicks = false;

    @CheckboxProperty({
        name: "Block SB Menu/Magical Map Clicks",
        category: "Block Clicks",
        subcategory: "Block Clicks"
    })
    blockSBMenu = false;

    @CheckboxProperty({
        name: "Block Giant Sword Right Click",
        category: "Block Clicks",
        subcategory: "Block Clicks"
    })
    gsBlock = false;

    @CheckboxProperty({
        name: "Block Cells Allignment",
        category: "Block Clicks",
        subcategory: "Block Clicks"
    })
    gyroBlock = false;



    constructor() {
        this.initialize(this);
        this.addDependency("Reveal Hidden Fels", "Reveal Hidden Mobs");
        this.addDependency("Reveal Hidden Shadow Assassins", "Reveal Hidden Mobs");
        this.addDependency("Reveal Hidden Blood Mobs", "Reveal Hidden Mobs");
        this.addDependency("Reveal Hidden Ghosts", "Reveal Hidden Mobs");
        this.addDependency("Block SB Menu/Magical Map Clicks", "Block Clicks");
        this.addDependency("Block Giant Sword Right Click", "Block Clicks");
        this.addDependency("Block Cells Allignment", "Block Clicks");
        this.addDependency("Hit through Players", "Ghost Arm");
        this.addDependency("Summons Ghost Arm", "Ghost Arm");
        this.addDependency("Livid Ghost Arm", "Ghost Arm");
        this.addDependency("Hit through Wither Cloak Creepers", "Ghost Arm");
        this.addDependency("Auto Island Type", "Auto Island");
        this.addDependency("Auto Island IGN", "Auto Island")
    }

}
export default new Settings();