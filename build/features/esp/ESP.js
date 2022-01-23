import {
    drawName,
    drawBoxAtEntity
} from "../../utils/RenderUtils"

import {
    RenderLib
} from "../../index"

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

import {
    esp,
    slayer
} from "../../index";

import { BIND_PREFIX } from "../../utils/Constants";

const Creeper = Java.type("net.minecraft.entity.monster.EntityCreeper");
const playerESPKey = new KeyBind("Toggle Player ESP", Keyboard.KEY_NONE, BIND_PREFIX)

let espON = false;
register("tick", () => {
    if (playerESPKey.isPressed()) {
        ChatLib.chat(`${(espON = !espON) ? PREFIX + 'Player ESP &aEnabled' : PREFIX + 'Player ESP &cDisabled'}`);
    }
});

const espNames = [
    // Voidlings
    "Voidling Devotee", // 0
    "Voidling Radical", // 1
    "Voidcrazed Maniac", // 2
    // Tara
    "Tarantula Vermin", // 3
    "Tarantula Beast", // 4
    "Mutant Tarantula", // 5
    "Tarantula Broodfather", // 6
    // Svens
    "Pack Enforcer", // 7
    "Sven Follower", // 8
    "Sven Alpha", // 9
    "Sven Packmaster", // 10
    // Revs
    "Revenant Sycophant", // 11
    "Revenant Champion", // 12
    "Deformed Revenant", // 13
    "Atoned Champion", // 14
    "Atoned Revenant", // 15
    "Revenant Horror", // 16
    "Atoned Horror", // 17
    // Misc
    slayer.playerESPName, // 18
    "Arachne's Keeper", // 19
    "Trackable", // 20
    "Untrackable", // 21
    "Undetected", // 22
    "Endangered", // 23
    "Elusive", // 24
    "Sneaky Creeper", // 25
    // Dungeons
    "Wither Key", // 26
    "Blood Key", // 27
    "Shadow Assassin", // 28
    "Lost Adventurer", // 29
    "Angry Archeologist", // 30
    "Frozen Adventurer", // 31
    "King Midas", // 32
    "Bonzo", // 33
    "Scarf", // 34
    "✯" // 35
];

let rawEntityList = [];
let entities = [];
let bats = [];

const getEntities = () => {
    let localRawEntities = [];
    let localBats = [];
    if (esp.enabled) {
        World.getAllEntities().forEach((entity) => {
            espNames.forEach((name) => {
                if (ChatLib.removeFormatting(entity.getName()).toLowerCase().includes(name.toLowerCase())) {
                    localRawEntities.push(entity);
                }
                rawEntityList = localRawEntities;
            })
            if (entity.getClassName() === "EntityBat") {
                if (entity.getEntity().func_110143_aJ() !== 6) {
                    localBats.push(entity);
                }
                bats = localBats;
            }
            let localEntities = [];
            if (inGunpowderMines) {
                World.getAllEntitiesOfType(Creeper)
                    .forEach(entity => {
                        localEntities.push(entity);
                    });
            }
            entities = localEntities;
        })
    }
};

const drawBoxOnEntity = () => {
    if (esp.enabled) {
        rawEntityList.forEach((entity) => {
            // PLayer ESP
            if (espON) {
                if (entity.getName() === espNames[18]) {
                    RenderLib.drawEspBox(entity.getX(), entity.getY() + 0, entity.getZ(), 1, 2, slayer.playerColor.getRed(), slayer.playerColor.getGreen(), slayer.playerColor.getBlue(), 1, true);
                    drawName(entity, slayer.playerColor.getRed(), slayer.playerColor.getGreen(), slayer.playerColor.getBlue());
                }
            }
            // Voidgloom ESP
            if (inEnd) {
                if (slayer.voidgloomMinis) {
                    if (entity.getName().includes(espNames[0]) || entity.getName().includes(espNames[1])) {
                        RenderLib.drawEspBox(entity.getX(), entity.getY() - 3, entity.getZ(), 1, 3, slayer.voidlingRadi.getRed(), slayer.voidlingRadi.getGreen(), slayer.voidlingRadi.getBlue(), slayer.voidlingRadi.getAlpha(), true);
                        drawName(entity, slayer.voidlingRadi.getRed(), slayer.voidlingRadi.getGreen(), slayer.voidlingRadi.getBlue());
                    }
                }
                if (entity.getName().includes(espNames[2])) {
                    RenderLib.drawEspBox(entity.getX(), entity.getY() - 3, entity.getZ(), 1, 3, slayer.voidcrazedManiac.getRed(), slayer.voidcrazedManiac.getGreen(), slayer.voidcrazedManiac.getBlue(), slayer.voidcrazedManiac.getAlpha(), true);
                    drawName(entity, slayer.voidcrazedManiac.getRed(), slayer.voidcrazedManiac.getGreen(), slayer.voidcrazedManiac.getBlue());
                }
            }
            // Tara ESP
            if (inSpidersDen) {
                if (slayer.taraMinis) {
                    if (entity.getName().includes(espNames[3]) || entity.getName().includes(espNames[4])) {
                        RenderLib.drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayer.taraBeast.getRed(), slayer.taraBeast.getGreen(), slayer.taraBeast.getBlue(), slayer.taraBeast.getAlpha(), true);
                        drawName(entity, slayer.taraBeast.getRed(), slayer.taraBeast.getGreen(), slayer.taraBeast.getBlue());
                    }
                }
                if (entity.getName().includes(espNames[5])) {
                    RenderLib.drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayer.mutantTara.getRed(), slayer.mutantTara.getGreen(), slayer.mutantTara.getBlue(), slayer.mutantTara.getAlpha(), true);
                    drawName(entity, slayer.mutantTara.getRed(), slayer.mutantTara.getGreen(), slayer.mutantTara.getBlue());
                }
                if (slayer.taraBoss) {
                    if (entity.getName().includes(espNames[6])) {
                        RenderLib.drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayer.taraBossColor.getRed(), slayer.taraBossColor.getGreen(), slayer.taraBossColor.getBlue(), slayer.taraBossColor.getAlpha(), true);
                        drawName(entity, slayer.taraBossColor.getRed(), slayer.taraBossColor.getGreen(), slayer.taraBossColor.getGreen());
                    }
                }
                if (esp.arachneKeeperESP) {
                    if (entity.getName().includes(espNames[19])) {
                        RenderLib.drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, esp.arachneKeeperESPColor.getRed(), esp.arachneKeeperESPColor.getGreen(), esp.arachneKeeperESPColor.getBlue(), 1, true);
                        drawName(entity, esp.arachneKeeperESPColor.getRed(), esp.arachneKeeperESPColor.getGreen(), esp.arachneKeeperESPColor.getBlue());
                    }
                }
            }
            // Sven ESP
            if (inHowl) {
                if (slayer.svenMinis) {
                    if (entity.getName().includes(espNames[7]) || entity.getName().includes(espNames[8])) {
                        RenderLib.drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayer.svenFollower.getRed(), slayer.svenFollower.getGreen(), slayer.svenFollower.getBlue(), 1, true);
                        drawName(entity, slayer.svenFollower.getRed(), slayer.svenFollower.getGreen(), slayer.svenFollower.getBlue());
                    }
                }
                if (entity.getName().includes(espNames[9])) {
                    RenderLib.drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayer.svenAlpha.getRed(), slayer.svenAlpha.getGreen(), slayer.svenAlpha.getBlue(), 1, true);
                    drawName(entity, slayer.svenAlpha.getRed(), slayer.svenAlpha.getGreen(), slayer.svenAlpha.getBlue());
                    if (slayer.svenBoss) {
                        if (entity.getName().includes(espNames[10])) {
                            RenderLib.drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, slayer.svenBossColor.getRed(), slayer.svenBossColor.getGreen(), slayer.svenBossColor.getBlue(), 1, true);
                            drawName(entity, slayer.svenBossColor.getRed(), slayer.svenBossColor.getGreen(), slayer.svenBossColor.getBlue());
                        }
                    }
                }
            }
            // Rev Minis
            if (inCrypt) {
                if (slayer.revMinis) {
                    if (entity.getName().includes(espNames[11]) || entity.getName().includes(espNames[12]) || entity.getName().includes(espNames[13])) {
                        RenderLib.drawEspBox(entity.getX(), entity.getY() - 2, entity.getZ(), 1, 2, slayer.revMiniColor.getRed(), slayer.revMiniColor.getGreen(), slayer.revMiniColor.getBlue(), slayer.revMiniColor.getAlpha(), true);
                        drawName(entity, slayer.revMiniColor.getRed(), slayer.revMiniColor.getGreen(), slayer.revMiniColor.getBlue());
                    }
                }
                if (entity.getName().includes(espNames[14]) || entity.getName().includes(espNames[15])) {
                    RenderLib.drawEspBox(entity.getX(), entity.getY() - 2, entity.getZ(), 1, 2, slayer.atonedMini.getRed(), slayer.atonedMini.getGreen(), slayer.atonedMini.getBlue(), slayer.atonedMini.getAlpha(), true);
                    drawName(entity, slayer.atonedMini.getRed(), slayer.atonedMini.getRed(), slayer.atonedMini.getGreen(), slayer.atonedMini.getBlue());
                }
                if (slayer.revBoss) {
                    if (entity.getName().includes(espNames[16]) || entity.getName().includes(espNames[17])) {
                        RenderLib.drawEspBox(entity.getX(), entity.getY() - 2, entity.getZ(), 1, 2, slayer.revBossColor.getRed(), slayer.revBossColor.getGreen(), slayer.revBossColor.getBlue(), slayer.revBossColor.getAlpha(), true);
                        drawName(entity, slayer.revBossColor.getRed(), slayer.revBossColor.geGreen(), slayer.revBossColor.getBlue());
                    }
                }
            }
            // Key ESP
            if (inDungeon) {
                if (esp.witherKey) {
                    if (entity.getName().includes(espNames[26]) || entity.getName().includes(espNames[27])) {
                        RenderLib.drawEspBox(entity.getX(), entity.getY() + 1, entity.getZ(), 1, 1, esp.witherKeyColor.getRed(), esp.witherKeyColor.getGreen(), esp.witherKeyColor.getBlue(), esp.witherKeyColor.getAlpha(), true);
                        drawName(entity, esp.witherKeyColor.getRed(), esp.witherKeyColor.getGreen(), esp.witherKeyColor.getBlue());
                    }
                }
                if (entity.getName().includes(espNames[29]) || entity.getName().includes(espNames[30]) || entity.getName().includes(espNames[31]) || entity.getName().includes(espNames[32]) || entity.getName().includes(espNames[33]) || entity.getName().includes(espNames[34])) {
                    if (esp.showMiniHitboxes) {
                        drawBoxAtEntity(entity, esp.miniHitboxColor.red, esp.miniHitboxColor.green, esp.miniHitboxColor.blue, 2, true);
                    }
                    if (esp.showMiniNametags) {
                        drawName(entity, esp.miniHitboxColor.getRed(), esp.miniHitboxColor.getGreen(), esp.miniHitboxColor.getBlue());
                    }
                }
                if (entity.getName().includes(espNames[35])) {
                    if (esp.showStarHitboxes) {
                        drawBoxAtEntity(entity, esp.starHitboxColor.red, esp.starHitboxColor.green, esp.starHitboxColor.blue, 2, true);
                    }
                    if (esp.showStarNametags) {
                        drawName(entity, esp.starHitboxColor.getRed(), esp.starHitboxColor.getGreen(), esp.starHitboxColor.getBlue());
                    }
                }
                if (esp.showBatHitboxes) {
                    bats.forEach((bat) => {
                        drawBoxAtEntity(bat, esp.batHitboxColor.red, esp.batHitboxColor.green, esp.batHitboxColor.blue, 2, true)
                    })
                }
            }
            // Creeper ESP
            if (inGunpowderMines) {
                if (entity.getName().includes(espNames[25])) {
                    // RenderLib.drawEspBox(entity.getRenderX(), entity.getRenderY(), entity.getRenderZ(), entity.getWidth(), entity.getHeight(), esp.creeperESPColor.getRed(), esp.creeperESPColor.getGreen(), esp.creeperESPColor.getBlue(), .30, true);
                    drawName(entity, esp.creeperESPColor.getRed(), esp.creeperESPColor.getGreen(), esp.creeperESPColor.getBlue());
                    // entity.getEntity().func_82142_c(false)
                }
                entities.forEach(entity => {
                    RenderLib.drawEspBox(entity.getRenderX(), entity.getRenderY(), entity.getRenderZ(), entity.getWidth(), entity.getHeight(), esp.creeperESPColor.getRed(), esp.creeperESPColor.getGreen(), esp.creeperESPColor.getBlue(), 1, true);
                    entity.getEntity().func_82142_c(false)
                    //drawName(entity)
                });
            }
            // Pelt ESP
            if (esp.peltESP) {
                if (entity.getName().includes(espNames[20]) || entity.getName().includes(espNames[21]) || entity.getName().includes(espNames[22]) || entity.getName().includes(espNames[23]) || entity.getName().includes(espNames[24])) {
                    RenderLib.drawEspBox(entity.getX(), entity.getY() - 1, entity.getZ(), 1, 1, esp.peltESPColor.getRed(), esp.peltESPColor.getGreen(), esp.peltESPColor.getBlue(), esp.peltESPColor.getAlpha(), true);
                    drawName(entity, esp.peltESPColor.getRed(), esp.peltESPColor.getGreen(), esp.peltESPColor.getBlue());
                }
            }
        })
    }
}


export { getEntities, drawBoxOnEntity };