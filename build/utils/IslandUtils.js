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

register("chat", () => {
    inBoss = true;
}).setChatCriteria("&r&4[BOSS] Necron&r&c: &r&cFinally, I heard so much about you. The Eye likes you very much.&r");

register("chat", () => {
    p3Started = true;
}).setChatCriteria("[BOSS] Necron: I'VE HAD ENOUGH! YOU HUMANS ARE FIGHTING WITHOUT HONOR!").setContains();

register("chat", function() {
    bloodOpened = false;
}).setChatCriteria("&e[NPC] &bMort&f: &rHere, I found this map when I first entered the dungeon.&r").setContains();

register("chat", function() {
    bloodOpened = true;
}).setChatCriteria("&r&cThe &r&c&lBLOOD DOOR&r&c has been opened!&r").setContains();



export {
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
}