import { drawName } from "../../utils/RenderUtils";




let realLividColor;
let realLividName;
let realLivid;
let realLividBlock;
let inDungeons = false;
let inF5 = false;
let bossStarted = false;

register("step", () => {
    let scoreboardLines = Scoreboard.getLines().map(line => line.getName().removeFormatting().toLowerCase());
    scoreboardLines.forEach(line => {
        if (line.includes("cata")) {
            inDungeons = true;
        }
        if (line.includes("f5") || line.includes("m5")) {
            inF5 = true;
        }
    });
}).setFps(2);

register("chat", () => {
    bossStarted = true;
}).setChatCriteria("[BOSS] Livid: I respect you for making it to here, but I'll be your undoing").setContains();

register("worldLoad", () => {
    inDungeons = false;
    inF5 = false;
    bossStarted = false;
});

const getCorrectLivid = (entity) => {
    if (bossStarted) {
        realLividBlock = World.getBlockAt(205, 108, 242);
        if (realLividBlock.type.getRegistryName() === "minecraft:stained_glass") {
            switch (realLividBlock.getMetadata()) {
                case 0:
                    realLividColor = "§f";
                    realLividName = "Vendetta Livid"
                    break;
                case 5:
                    realLividColor = "§a";
                    realLividName = "Smile Livid"
                    break;
                case 13:
                    realLividColor = "§2";
                    realLividName = "Frog Livid"
                    break;
                case 14:
                    realLividColor = "§c";
                    realLividName = "Hockey Livid"
                    break;
                case 6:
                    realLividColor = "§d";
                    realLividName = "Crossed Livid"
                    break;
                case 10:
                    realLividColor = "§5";
                    realLividName = "Purple Livid"
                    break;
                case 7:
                    realLividColor = "§7";
                    realLividName = "Doctor Livid"
                    break;
                case 11:
                    realLividColor = "§9";
                    realLividName = "Scream Livid"
                    break;
                case 4:
                    realLividColor = "§e";
                    realLividName = "Arcade Livid"
                    break;
            }
            if (entity.getName().toLowerCase().includes("livid")) {
                if (entity.getName().includes("§")) {
                    if (entity.getName().includes(realLividColor)) {
                        realLivid = entity;
                        drawName(entity, 255, 0, 0);
                    }
                }
                if (!entity.getName().removeFormatting().includes(realLividName) && entity !== realLivid && entity.getClassName() === "EntityOtherPlayerMP") {
                    entity.getEntity().func_70106_y();
                }
            }
        }
    }
}



// register("renderEntity", (entity, pos, pticks, event) => {
//     if (bossStarted) {
//         getCorrectLivid(entity);
//     }
// })

export { getCorrectLivid };



