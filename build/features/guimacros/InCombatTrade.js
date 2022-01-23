let inPetsTrade = false;
let inSbMenuTrade = false;
let openTrade = false;

const inCombatTradeTick = () => {
    ChatLib.command("pets");
    inPetsTrade = true;
    openTrade = true;
}
const inCombatTradeGUI = () => {
    if (inPetsTrade && openTrade) {
        if (Player.getOpenedInventory().getName().includes("Pets")) {
            Player.getOpenedInventory().click(48, false, "MIDDLE") // Goes to SB Menu
            inSbMenuTrade = true;
            inPetsTrade = false;
        }
    } else if (inSbMenuTrade && openTrade) {
        if (Player.getOpenedInventory().getName().includes("SkyBlock Menu")) {
            Player.getOpenedInventory().click(22, false, "MIDDLE") // Enters Trade Menu
            inPetsTrade = false;
            inSbMenuTrade = false;
            openTrade = false;
        }
    }
}

export { inCombatTradeGUI, inCombatTradeTick }