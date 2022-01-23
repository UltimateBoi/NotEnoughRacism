import { dungeons, macros } from "../../index";
import { PREFIX } from "../../utils/Constants"; 

const potionSeller = () => {
    new Thread(() => {
        try {
        ChatLib.chat(PREFIX + "Opening Trade Menu");
        ChatLib.command("sbmenu");
        Thread.sleep(macros.wardrobeDelay)
        if (Player.getOpenedInventory().getName().includes("SkyBlock Menu")) {
            Player.getOpenedInventory().click(22, false, "MIDDLE");
        }
        Thread.sleep(500)
        if (Player.getOpenedInventory().getName() === "Trades") {
            for (let i = 53; i < 89; i++) {
                let item = Player.getOpenedInventory().getStackInSlot(i);
                if (item.getName().includes("Speed VI Potion") || item.getName().includes("Speed 6 Potion") || item.getName().includes("Water Bottle") || item.getName().includes("Speed V Potion") || item.getName().includes("Speed VII Potion")) {
                    Thread.sleep(dungeons.autoSell)
                    Player.getOpenedInventory().drop(i, false)
                }
            }
        }
        setTimeout(() => {
            Client.currentGui.close()
        }, 300)
    } catch (e) { }
    }).start()
}

export { potionSeller };  