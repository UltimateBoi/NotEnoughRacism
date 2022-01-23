import { dungeons } from "../../index"; 

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


const autoSpirit = () => {
    if (dungeons.autospiritToggle && !bloodOpened && ChatLib.removeFormatting(Player.getOpenedInventory().getName()).includes("Spirit Leap")) {
        let inv = Player.getOpenedInventory();
        for (let i = 0; i < 45; i++) {
            let item = inv.getStackInSlot(i);
            if (item !== null && item.getName().toLowerCase().includes(String(dungeons.spiritNAME))) {
                let action = Action.of(inv, i, "CLICK");
                action.setClickString("MIDDLE");
                action.complete();
            }
        }
    }
}

export { autoSpirit }; 