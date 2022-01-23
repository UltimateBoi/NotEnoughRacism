import { dungeons } from "../../index";
import { BP, blockCoords } from "../../utils/Constants";
let inHowl = false;
let inSpidersDen = false;
let inEnd = false;
let inCrypt = false;
let inGunpowderMines = false;
let inIsland = false;
let inDungeon = false;
let inMist = false;
let inF7 = false; 
let inBoss = false;
let p3Started = false;
let bloodOpened = false;


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
    inBoss = false;
    p3Started = false;
    bloodOpened = false;
})

const coordGhostBlocks = () => {
    if (inF7) {
        blockCoords.forEach(coord => {
            World.getWorld().func_175698_g(new BP(coord[0], coord[1], coord[2]))
        })
    }
}

export { coordGhostBlocks }; 