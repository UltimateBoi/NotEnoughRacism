import { macros } from "../../index";


const autoSalvage = () => {
    if (Player.getOpenedInventory() === null)
        return;
    if (Player.getOpenedInventory().getName().includes("Salvage Dungeon Item")) {
        let inv = Player.getOpenedInventory().getStackInSlot(22);
        if (inv !== null && inv.getID() === -1) {
            return;
        }
        if (Player.getOpenedInventory().getStackInSlot(13) !== null && Player.getOpenedInventory().getStackInSlot(13).getName().includes("✪"))
            return;
        if (inv !== null && inv.getLore()[9] === undefined)
            return;
        if (inv !== null && inv.getLore()[9].removeFormatting() === "Click to salvage!") {
            Player.getOpenedInventory().click(22);
        }
    }

}

export { autoSalvage }; 