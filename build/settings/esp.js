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

@Vigilant("NotEnoughRacismConfig/ESP", "ESP", {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Not general!', 'General'];

        return categories.indexOf(b.name) - categories.indexOf(a.name);
    }
})

class ESP {


    @SwitchProperty({
        name: "Enable",
        description: "Global toggle",
        category: "General"
    }) enabled = false;

    @SliderProperty({
        name: "ESP Refresh Rate",
        description: "Sets how many times a second the world is scanned for mobs, and how often esp will update\n&8- Default is 2\n&8- /ct reload for it to update",
        category: "General",
        min: 1,
        max: 60
    })
    espRefreshRate = 2;

    @SwitchProperty({
        name: "Show Miniboss Nametag",
        description: "Shows nametags through walls",
        category: "Miniboss ESP",
        //  subcategory: "Miniboss ESP"
    }) showMiniNametags = false;

    @SwitchProperty({
        name: "Show Miniboss Hitbox",
        description: "Shows hitboxes",
        category: "Miniboss ESP",
        //    subcategory: "Miniboss ESP"
    }) showMiniHitboxes = false;


    @ColorProperty({
        name: "Miniboss Hitbox Color",
        description: "",
        category: "Miniboss ESP",
        //  subcategory: "Miniboss ESP"
    }) miniHitboxColor = Color.RED;

    @SwitchProperty({
        name: "Show Star Mob Nametag",
        description: "Shows nametags through walls",
        category: "Star Mob ESP",
        //  subcategory: "ESP"
    }) showStarNametags = false;

    @SwitchProperty({
        name: "Show Star Mob Hitbox",
        description: "Shows hitboxes",
        category: "Star Mob ESP",
        // subcategory: "ESP"
    }) showStarHitboxes = false;


    @ColorProperty({
        name: "Star Mob Hitbox Color",
        description: "",
        category: "Star Mob ESP",
        // subcategory: "ESP"
    }) starHitboxColor = Color.RED;


    @SwitchProperty({
        name: "Show Bat Hitbox",
        description: "Shows hitboxes",
        category: "Bat ESP",
        // subcategory: "ESP"
    }) showBatHitboxes = false;


    @ColorProperty({
        name: "Bat Hitbox Color",
        description: "",
        category: "Bat ESP",
        // subcategory: "ESP"
    }) batHitboxColor = Color.RED;


    @SwitchProperty({
        name: "Wither/Blood Key ESP",
        description: "Enables Wither/Blood Key ESP",
        category: "Key ESP",
        subcategory: "Key ESP"
    }) witherKey = false;

    @ColorProperty({
        name: "Wither/Blood Key ESP Color",
        description: "Changes the color for Wither/Blood Key ESP",
        category: "Key ESP",
        subcategory: "Key ESP"
    }) witherKeyColor = Color.RED

    @SwitchProperty({
        name: "Sneaky Creeper ESP",
        description: "Enables Sneaky Creeper ESP",
        category: "Bestiary ESP",
        subcategory: "Sneaky Creeper ESP"
    }) creeperEsp = false;



    @ColorProperty({
        name: "Sneaky Creeper ESP Color",
        description: "Changes the Highlight Color for Sneaky Creepers",
        category: "Bestiary ESP",
        subcategory: "Sneaky Creeper ESP"
    }) creeperESPColor = Color.GREEN;


    @SwitchProperty({
        name: "Arachne Keeper ESP",
        description: "Enables Arachne Keeper ESP",
        category: "Bestiary ESP",
        subcategory: "Arachne Keeper ESP"
    }) arachneKeeperESP = false;

    @ColorProperty({
        name: "Arachne Keeper ESP Color",
        description: "Changes the Highlight Color for Arachne Keepers",
        category: "Bestiary ESP",
        subcategory: "Arachne Keeper ESP"
    }) arachneKeeperESPColor = Color.GREEN;


    @SwitchProperty({
        name: "Pelt Animal ESP",
        description: "Enables Pelt Animal ESP",
        category: "Pelt ESP",
        subcategory: "Pelt ESP"
    }) peltESP = false;

    @ColorProperty({
        name: "Pelt Animal ESP Color",
        description: "Changes the Highlight color for Pelt Animals",
        category: "Pelt ESP",
        subcategory: "Pelt ESP"
    }) peltESPColor = Color.RED

    @TextProperty({
        name: "Player ESP IGN",
        category: "Player ESP",
        subcategory: "Player ESP"
    }) playerESPName = ""

    @ColorProperty({
        name: "Player ESP Color",
        description: "Sets the Highlight Color for Players",
        category: "Player ESP",
        subcategory: "Player ESP"
    }) playerColor = Color.RED

    @SwitchProperty({
        name: "Tarantula Miniboss ESP",
        description: "Enables Tarantula Miniboss ESP",
        category: "Tarantula Broodfathers",
        subcategory: "Miniboss"
    }) taraMinis = false;

    @SwitchProperty({
        name: "Tarantula Boss ESP",
        description: "Enables Tarantula Boss ESP",
        category: "Tarantula Broodfathers",
        subcategory: "Boss"
    }) taraBoss = false;

    @ColorProperty({
        name: "Tarantula Vermin/Beast Color",
        description: "Sets Tarantula Vermin/Beast ESP Color",
        category: "Tarantula Broodfathers",
        subcategory: "Miniboss"
    }) taraBeast = Color.GREEN

    @ColorProperty({
        name: "Mutant Tarantula Color",
        description: "Sets Mutant Tarantula ESP Color",
        category: "Tarantula Broodfathers",
        subcategory: "Miniboss"
    }) mutantTara = Color.RED

    @ColorProperty({
        name: "Tarantula Boss Color",
        description: "Sets Tarantula Boss ESP Color",
        category: "Tarantula Broodfathers",
        subcategory: "Boss"
    }) taraBossColor = Color.BLUE

    //---------------------------------------------------------------------------------------------------

    @SwitchProperty({
        name: "Sven Miniboss ESP",
        description: "Enables Sven Miniboss ESP",
        category: "Sven Packmasters",
        subcategory: "Miniboss"
    }) svenMinis = false;

    @SwitchProperty({
        name: "Sven Boss ESP",
        description: "Enables Sven Boss ESP",
        category: "Sven Packmasters",
        subcategory: "Boss"
    }) svenBoss = false;

    @ColorProperty({
        name: "Sven Pack Enforcer/Follower Color",
        description: "Sets Sven Pack Enforcer/Follower Color ESP Color",
        category: "Sven Packmasters",
        subcategory: "Miniboss"
    }) svenFollower = Color.GREEN

    @ColorProperty({
        name: "Sven Alpha Color",
        description: "Sets Sven Alpha ESP Color",
        category: "Sven Packmasters",
        subcategory: "Miniboss"
    }) svenAlpha = Color.RED

    @ColorProperty({
        name: "Sven Boss Color",
        description: "Sets Sven Boss ESP Color",
        category: "Sven Packmasters",
        subcategory: "Boss"
    }) svenBossColor = Color.BLUE

    //---------------------------------------------------------------------------------------------------

    @SwitchProperty({
        name: "Revenant Miniboss ESP",
        description: "Enables Revenant Miniboss ESP",
        category: "Revenant Horror",
        subcategory: "Miniboss"
    }) revMinis = false;

    @SwitchProperty({
        name: "Revenant Boss ESP",
        description: "Enables Revenant Boss ESP",
        category: "Revenant Horror",
        subcategory: "Boss"
    }) revBoss = false;

    @ColorProperty({
        name: "Revenant Color",
        description: "Sets Revenant Miniboss Color ESP Color",
        category: "Revenant Horror",
        subcategory: "Miniboss"
    }) revMiniColor = Color.GREEN

    @ColorProperty({
        name: "Atoned Revenant Miniboss Color",
        description: "Sets Atoned Revenant Miniboss ESP Color",
        category: "Revenant Horror",
        subcategory: "Miniboss"
    }) atonedMini = Color.RED

    @ColorProperty({
        name: "Revenant Boss Color",
        description: "Sets Revenant Boss ESP Color",
        category: "Revenant Horror",
        subcategory: "Boss"
    }) revBossColor = Color.BLUE

    //---------------------------------------------------------------------------------------------------

    @SwitchProperty({
        name: "Voidgloom Miniboss ESP",
        description: "Enabled Voidgloom Miniboss ESP",
        category: "Voidgloom Seraph",
        subcategory: "Miniboss"
    }) voidgloomMinis = false;

    @ColorProperty({
        name: "Voidling Devotee/Radical ESP Color",
        description: "Sets Voidling Devotee/Radical ESP Color",
        category: "Voidgloom Seraph",
        subcategory: "Miniboss"
    }) voidlingRadi = Color.GREEN

    @ColorProperty({
        name: "Voidcrazed Maniac ESP Color",
        description: "Sets Voidcrazed Maniac ESP Color",
        category: "Voidgloom Seraph",
        subcategory: "Miniboss"
    }) voidcrazedManiac = Color.RED


    constructor() {
        this.initialize(this);
        this.addDependency("Voidcrazed Maniac ESP Color", "Enable");
        this.addDependency("Voidling Devotee/Radical ESP Color", "Enable");
        this.addDependency("Voidgloom Miniboss ESP", "Enable");
        this.addDependency("Revenant Boss Color", "Enable");
        this.addDependency("Atoned Revenant Miniboss Color", "Enable");
        this.addDependency("Revenant Color", "Enable");
        this.addDependency("Revenant Boss ESP", "Enable");
        this.addDependency("ESP Refresh Rate", "Enable");
        this.addDependency("Show Miniboss Nametag", "Enable");
        this.addDependency("Show Miniboss Hitbox", "Enable");
        this.addDependency("Miniboss Hitbox Color", "Enable");
        this.addDependency("Show Star Mob Nametag", "Enable");
        this.addDependency("Show Star Mob Hitbox", "Enable");
        this.addDependency("Star Mob Hitbox Color", "Enable");
        this.addDependency("Show Bat Hitbox", "Enable");
        this.addDependency("Bat Hitbox Color", "Enable");
        this.addDependency("Wither/Blood Key ESP", "Enable");
        this.addDependency("Wither/Blood Key ESP Color", "Enable");
        this.addDependency("Arachne Keeper ESP", "Enable");
        this.addDependency("Arachne Keeper ESP Color", "Enable");
        this.addDependency("Sneaky Creeper ESP", "Enable");
        this.addDependency("Sneaky Creeper ESP Color", "Enable");
        this.addDependency("Pelt Animal ESP", "Enable");
        this.addDependency("Pelt Animal ESP Color", "Enable");
        this.addDependency("Player ESP IGN", "Enable");
        this.addDependency("Player ESP Color", "Enable");
        this.addDependency("Tarantula Boss ESP", "Enable");
        this.addDependency("Tarantula Boss Color", "Enable");
        this.addDependency("Tarantula Miniboss ESP", "Enable");
        this.addDependency("Tarantula Vermin/Beast Color", "Enable");
        this.addDependency("Mutant Tarantula Color", "Enable");
        this.addDependency("Sven Boss ESP", "Enable");
        this.addDependency("Sven Boss Color", "Enable");
        this.addDependency("Sven Miniboss ESP", "Enable");
        this.addDependency("Sven Pack Enforcer/Follower Color", "Enable");
        this.addDependency("Sven Alpha Color", "Enable");
        this.addDependency("Revenant Miniboss ESP", "Enable");
        this.addDependency("Revenant Color", "Enable");

        // -----------------------------------------------------------

        this.addDependency("Voidcrazed Maniac ESP Color", "Voidgloom Miniboss ESP");
        this.addDependency("Voidling Devotee/Radical ESP Color", "Voidgloom Miniboss ESP");
        this.addDependency("Revenant Color", "Revenant Miniboss ESP");
        this.addDependency("Atoned Revenant Miniboss Color", "Revenant Miniboss ESP");
        this.addDependency("Revenant Boss Color", "Revenant Boss ESP");
        this.addDependency("Miniboss Hitbox Color", "Show Miniboss Hitbox");
        this.addDependency("Star Mob Hitbox Color", "Show Star Mob Hitbox");
        this.addDependency("Bat Hitbox Color", "Show Bat Hitbox");
        this.addDependency("Wither/Blood Key ESP Color", "Wither/Blood Key ESP");
        this.addDependency("Arachne Keeper ESP Color", "Arachne Keeper ESP");
        this.addDependency("Sneaky Creeper ESP Color", "Sneaky Creeper ESP");
        this.addDependency("Pelt Animal ESP Color", "Pelt Animal ESP");
        this.addDependency("Tarantula Boss Color", "Tarantula Boss ESP");
        this.addDependency("Tarantula Vermin/Beast Color", "Tarantula Miniboss ESP");
        this.addDependency("Mutant Tarantula Color", "Tarantula Miniboss ESP");
        this.addDependency("Sven Boss Color", "Sven Boss ESP");
        this.addDependency("Sven Pack Enforcer/Follower Color", "Sven Miniboss ESP");
        this.addDependency("Sven Alpha Color", "Sven Miniboss ESP");
    }

}
export default new ESP;