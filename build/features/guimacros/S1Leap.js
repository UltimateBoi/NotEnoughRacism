import { dungeons } from "../..";
import { RightClick } from "../../utils/Utils"; 
let s1Done = false;
let inLeapMenu = false;
let leapPossible = true;


let inBoss = false;
let p3Started = false;



register("chat", () => {
    inBoss = true;
}).setChatCriteria("&r&4[BOSS] Necron&r&c: &r&cFinally, I heard so much about you. The Eye likes you very much.&r").setContains();

register("chat", () => {
    p3Started = true;
}).setChatCriteria("[BOSS] Necron: I'VE HAD ENOUGH! YOU HUMANS ARE FIGHTING WITHOUT HONOR!").setContains();

let bloodOpened = false;
register("chat", function () {
    bloodOpened = false;
}).setChatCriteria("&e[NPC] &bMort&f: &rHere, I found this map when I first entered the dungeon.&r").setContains();

register("chat", function () {
    bloodOpened = true;
}).setChatCriteria("&r&cThe &r&c&lBLOOD DOOR&r&c has been opened!&r").setContains();

register("tick", () => {
    if (dungeons.autoS1Leap) {
        let s1Wall = World.getBlockAt(299, 116, 322)
        if (s1Wall.type.getRegistryName() !== "minecraft:cobblestone_wall") {
            s1Done = true;
        } else {
            s1Done = false;
        }
    }
})
const s1LeapTick = () => {
    if (Client.currentGui.get() === null) {
        if (s1Done && leapPossible && inBoss && p3Started) {
            Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
                if (item !== null && item.getName().includes("Spirit Leap")) {
                    spiritSlot = index;
                }
            })
            Player.setHeldItemIndex(spiritSlot);
            RightClick.invoke(Client.getMinecraft());
            inLeapMenu = true;
        }
    }
}

const s1LeapGUI = () => {
    if (dungeons.autoS1Leap) {
        if (inLeapMenu && s1Done && leapPossible && ChatLib.removeFormatting(Player.getOpenedInventory().getName()).includes("Spirit Leap")) {
            let inv = Player.getOpenedInventory();
            for (let i = 0; i < 45; i++) {
                let item = inv.getStackInSlot(i);
                if (item !== null && item.getName().toLowerCase().includes(String(dungeons.s1LeapName))) {
                    let action = Action.of(inv, i, "CLICK");
                    action.setClickString("MIDDLE");
                    action.complete();
                    leapPossible = false;
                    s1Done = false;
                    inLeapMenu = false;
                }
            }
        }
    }
}

register("worldLoad", () => {
    leapPossible = true;
    s1Done = false;
    inLeapMenu = false;
    inLeap = false;
    leap = false;
    inBoss = false;
    p3Started = false;
    bloodOpened = false;
})

export { s1LeapTick, s1LeapGUI }; 