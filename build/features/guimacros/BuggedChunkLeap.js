import { dungeons } from "../../index"; 
import { RightClick } from "../../utils/Utils"; 

let time;
let leap = false;
let inLeap = false;

register("chat", () => {
    time = new Date().getTime();
    leap = true;
}).setChatCriteria("The Core entrance is opening!").setContains();

let inBoss = false;
let p3Started = false;
let bloodOpened = false;

register("chat", () => {
    inBoss = true;
}).setChatCriteria("&r&4[BOSS] Necron&r&c: &r&cFinally, I heard so much about you. The Eye likes you very much.&r");

register("chat", () => {
    p3Started = true;
}).setChatCriteria("[BOSS] Necron: I'VE HAD ENOUGH! YOU HUMANS ARE FIGHTING WITHOUT HONOR!").setContains();

register("chat", function () {
    bloodOpened = false;
}).setChatCriteria("&e[NPC] &bMort&f: &rHere, I found this map when I first entered the dungeon.&r").setContains();

register("chat", function () {
    bloodOpened = true;
}).setChatCriteria("&r&cThe &r&c&lBLOOD DOOR&r&c has been opened!&r").setContains();

register("worldLoad", () => {
    inBoss = false;
    p3Started = false;
    bloodOpened = false;
})

const buggedChunkLeapTick = () => {
    if (leap) {
        if (new Date().getTime() - time > dungeons.buggedChunkLeapTime * 1000) {
            Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
                if (item !== null && item.getName().includes("Spirit Leap")) {
                    spiritSlot = index;
                }
            })
            Player.setHeldItemIndex(spiritSlot);
            RightClick.invoke(Client.getMinecraft());
            inLeap = true;
            leap = false;
        }
    }
}

const buggedChunkLeapGUI = () => {
    if (inLeap && ChatLib.removeFormatting(Player.getOpenedInventory().getName()).includes("Spirit Leap")) {
        let inv = Player.getOpenedInventory();
        for (let i = 0; i < 45; i++) {
            let item = inv.getStackInSlot(i);
            if (item !== null && item.getName().toLowerCase().includes(String(dungeons.buggedChunkName))) {
                let action = Action.of(inv, i, "CLICK");
                action.setClickString("MIDDLE");
                action.complete();
                inLeap = false;
                leap = false;
            }
        }
    }
}

export { buggedChunkLeapGUI, buggedChunkLeapTick };