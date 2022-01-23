import {
    dungeons,
    config,
    esp
} from "../../index";

import {
    inHowl, 
    inSpidersDen, 
    inEnd, 
    inCrypt, 
    inGunpowderMines, 
    inIsland, 
    inDungeon, 
    inMist,
    inF7, 
    inBoss,
    p3Started,
    bloodOpened
} from "../../utils/IslandUtils"; 

import { bloodMobs } from "../../utils/Constants";

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

const revealHiddenMobs = (mob) => {
    if (mob.getEntity().func_82150_aj()) {
        if (inDungeon) {
            if (config.hiddenFels) {
                if (mob.getClassName() === "EntityEnderman") {
                    mob.getEntity().func_82142_c(false);
                }
            }
            if (config.hiddenBloodMobs) {
                if (mob.getClassName() === "EntityOtherPlayerMP") {
                    bloodMobs.forEach((bloodMob) => {
                        if (ChatLib.removeFormatting(mob.getName()).includes(bloodMob)) {
                            mob.getEntity().func_82142_c(false);
                        }
                    })
                }
            }
            if (config.hiddenSA) {
                if (mob.getClassName() === "EntityOtherPlayerMP") {
                    if (ChatLib.removeFormatting(mob.getName()).includes("Shadow Assassin")) {
                        mob.getEntity().func_82142_c(false);
                    }
                }
            }
        }
        if (inMist) {
            if (config.hiddenGhosts) {
                if (mob.getClassName() === "EntityCreeper") {
                    mob.getEntity().func_82142_c(false);
                }
            }
        }
        if (esp.peltESP) {
            if (mob.getClassName() === "EntityCow" || mob.getClassName() === "EntityRabbit" || mob.getClassName() === "EntitySheep" || mob.getClassName() === "EntityPig" || mob.getClassName() === "EntityChicken") {
                mob.getEntity().func_82142_c(false);
            }
        }
    }
}

export { revealHiddenMobs };