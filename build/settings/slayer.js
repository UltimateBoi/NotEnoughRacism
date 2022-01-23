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

@Vigilant("NotEnoughRacismConfig/Slayers", "Slayers", {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Not general!', 'General'];

        return categories.indexOf(b.name) - categories.indexOf(a.name);
    }
})

class Slayer {


    @SwitchProperty({
        name: "Summons Ghost Arm",
        description: "Allows you to hit through summons\n&8- Only works with Summons which are Zombies in Leather Armor",
        category: "QOL",
        subcategory: "Ghost Arm"
    }) ghostArm = false;

    @TextProperty({
        name: "Player ESP IGN",
        category: "QOL",
        subcategory: "Player ESP"
    }) playerESPName = ""

    @ColorProperty({
        name: "Player ESP Color",
        description: "Sets the Highlight Color for Players",
        category: "QOL",
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
    }
}
export default new Slayer;