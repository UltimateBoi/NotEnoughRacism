import { dungeons } from "../..";
import { BP } from "../../utils/Constants";

let inHowl = false;
let inSpidersDen = false;
let inEnd = false;
let inCrypt = false;
let inGunpowderMines = false;
let inIsland = false;
let inDungeon = false;
let inMist = false;
let inF7 = false; 



register("step", () => {
    let scoreboardLines = Scoreboard.getLines().map(line => line.getName().removeFormatting().toLowerCase());
    scoreboardLines.forEach(line => {
        if (line.includes("howl") || line.includes("castle")) {
            inHowl = true;
        }
        if (line.includes("spider")) {
            inSpidersDen = true;
        }
        if (line.includes("coal") || line.includes("graveyard")) {
            inCrypt = true;
        }
        if (line.includes("end") || line.includes("drag") || line.includes("void")) {
            inEnd = true;
        }
        if (line.includes("gunpowder")) {
            inGunpowderMines = true;
        }
        if (line.includes("your")) {
            inIsland = true;
        }
        if (line.includes("cata")) {
            inDungeon = true;
        }
        if (line.includes("f7")) {
            inF7 = true;
        }
        if (line.includes("mist")) {
            inMist = true;
        }
    })
}).setFps(2);

register("worldLoad", () => {
    inHowl = false;
    inSpidersDen = false;
    inEnd = false;
    inCrypt = false;
    inGunpowderMines = false;
    inIsland = false;
    inDungeon = false;
    inMist = false;
    inF7 = false;
})

let sleepAmt = new Date().getTime()
const autoRogueSword = (toggle) => {
    if (toggle && inDungeon) {
        if (Client.currentGUi.get() === null) {
            if (new Date().getTime() - sleepAmt > dungeons.autoRogueCD) {
                try {
                    for (let i = 0; i < 9; i++) {
                        if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().removeFormatting().toLowerCase().includes("rogue")) {
                            Client.sendPacket(new C09PacketHeldItemChange(i));
                            for (let j = 0; j < dungeons.autoRogueClicks; j++) {
                                Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0, 0));
                               // ChatLib.chat("Clicked Rogue Sword");
                            }
                            Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
                            break;
                        }
                    }
                    sleepAmt = new Date().getTime()
                } catch (e) {
                   
                }
            }
        }
    }
}

export { autoRogueSword };