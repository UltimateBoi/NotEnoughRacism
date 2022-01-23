import { PREFIX } from "../../utils/Constants";


let inPets = false;
let tried = false;
let petFound = false;
let swappedPage = false;
let petsName;


function replaceComma(pet) {
    return pet.replace(/,/g, " ");
}

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

register("command", ...petName => {
    ChatLib.command("pets");
    tried = true;
    inPets = true;
    petFound = false;
    swappedPage = false;
    petsName = replaceComma(`${petName}`);
    ChatLib.chat(PREFIX + "Swapping to " + titleCase(`${petsName}`));
}).setTabCompletions(    "Bee",
"Chicken",
"Rabbit",
"Elephant",
"Pig",
"Armidillo",
"Bat",
"Endermite",
"Rock",
"Scatha",
"Silverfish",
"Wither Skeleton",
"Mithril Golem",
"Bal",
"Black Cat",
"Blaze",
"Ender Dragon",
"Golden Dragon",
"Enderman",
"Ghoul",
"Golem",
"Grandma Wolf",
"Griffin",
"Horse",
"Hound",
"Jerry",
"Magma Cube",
"Phoenix",
"Pigman",
"Rat",
"Skeleton Horse",
"Skeleton",
"Snowman",
"Spirit",
"Tarantula",
"Tiger",
"Turtle",
"Wolf",
"Zombie",
"Giraffe",
"Lion",
"Monkey",
"Ocelot",
"Ammonite",
"Baby Yeti",
"Blue Whale",
"Dolphin",
"Flying Fish",
"Squid",
"Megaladon",
"Guardian",
"Jellyfish",
"Parrot",
"Sheep").setName("petswap");

register("postGuiRender", () => {
    if (inPets && tried && !petFound) {
        for (let i = 0; i < 54; i++) {
            if (Player.getOpenedInventory().getStackInSlot(i).getName().removeFormatting().toLowerCase().includes(ChatLib.removeFormatting(petsName.toLowerCase()))) {
                Player.getOpenedInventory().click(i, false, "MIDDLE");
                inPets = false;
                tried = false;
                petFound = true;
                //   ChatLib.chat(petFound)
                //  Client.currentGui.close();
            } else if (Player.getOpenedInventory().getStackInSlot(i).getName().removeFormatting().toLowerCase().includes("next page")) {
                if (petFound) return;
                Player.getOpenedInventory().click(i, false, "MIDDLE");
                swappedPage = true;
            }
        }
    }
    // if (!petFound && swappedPage) {
    //     petFound = false;
    //     swappedPage = false;
    //     try {
    //         // Client.currentGui.close();
    //         ChatLib.chat(PREFIX + titleCase(`${petsName}`) + " Not Found");
    //     } catch (e) {}
    // }
})