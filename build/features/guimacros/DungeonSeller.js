import { PREFIX } from "../../utils/Constants"
import { dungeons } from "../../index";

let dungItems = [];

let inPets = false;
let inSbMenu = false;
let inTrade = false;
let triedToSell = false;

function dungsell() {
    dungItems = dungeons.dungSellList.split(", ")
    new Thread(() => {
        try {
            if (Client.currentGui.get() === null) return; 
            for (let i = 53; i < 81; i++) {
                let item = Player.getOpenedInventory().getStackInSlot(i)
                dungItems.forEach((thing) => {
                    if (item.getName().toLowerCase().includes(String(thing).toLowerCase())) {
                        Thread.sleep(dungeons.autoSell)
                        Player.getOpenedInventory().drop(i, true)
                    }
                })
            }
        } catch (e) {  }
    }).start()
}

const dungeonSellerTick = () => {
    ChatLib.chat(PREFIX + "Selling Items");
    ChatLib.command("pets");
    inPets = true;
    triedToSell = true;
    dungItems = dungeons.dungSellList.split(", ")
}

const dungeonSellerGUI = () => {
    try {
        let inv = Player.getOpenedInventory()
        if (inPets && triedToSell) {
            if (inv.getName().includes("Pets")) {
                inv.click(48, false, "MIDDLE")
                inSbMenu = true;
                inPets = false
            }
        } else if (inSbMenu && triedToSell) {
            if (inv.getName().includes("SkyBlock Menu")) {
                inv.click(22, false, "MIDDLE")
                inSbMenu = false;
                inTrade = true;
            }
        } else if (inTrade && triedToSell) {
            if (inv.getName().includes("Trades")) {
                dungsell()
                // booksell()
                inTrade = false;
                triedToSell = false;
            }
        }
    } catch (e) {
       
    }
}

export { dungeonSellerTick, dungeonSellerGUI }; 