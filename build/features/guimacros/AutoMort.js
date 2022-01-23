
const autoMort = (ticks) => {
    if (ticks % 5 === 0) {
        if (Player.getOpenedInventory().getName() === "Start Dungeon?") {
            Player.getOpenedInventory().click(13, false, "MIDDLE");
        } else if (Player.getOpenedInventory().getName().startsWith("Catacombs - ")) {
            for (let i = 2; i < 7; i++) {
                if (Player.getOpenedInventory().getStackInSlot(i) !== null && Player.getOpenedInventory().getStackInSlot(i).getName().removeFormatting().includes(Player.getName())) {
                    if (Player.getOpenedInventory().getStackInSlot(i + 9) !== null && Player.getOpenedInventory().getStackInSlot(i + 9).getMetadata() === 14) {
                        Player.getOpenedInventory().click(i, false, "MIDDLE");
                        break;
                    }
                }
            }
        }
    }
}

export { autoMort };