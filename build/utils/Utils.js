const LeftClick = Client.getMinecraft().class.getDeclaredMethod("func_147116_af");
const RightClick = Client.getMinecraft().class.getDeclaredMethod("func_147121_ag");
LeftClick.setAccessible(true);
RightClick.setAccessible(true);
export { LeftClick, RightClick };

let invKeybind = new KeyBind(Client.settings.getSettings().field_151445_Q);
let KeyBinding = Java.type("net.minecraft.client.settings.KeyBinding");

export const containsItem = (slotNum, itemName) => { return Player.getInventory().getStackInSlot(slotNum).getName().removeFormatting().toLowerCase().includes(itemName.toLowerCase()); };
export const getCurrentSlot = () => { return Player.getInventory().getInventory().field_70461_c; };
export const setSlot = (slotNumber) => { return Player.getInventory().getInventory().field_70461_c = slotNumber; };
export const openInventory = () => {
    Client.currentGui.close();
    KeyBinding.func_74507_a(invKeybind.getKeyCode());
};
export const pressed = (key) => {
    if (Keyboard.isKeyDown(key.getKeyCode()) && (Client.currentGui.getClassName().toLowerCase().includes("chest"))) {
        return true;
    }
    return key.isKeyDown();
};

export const stripRank = (rankedPlayer) => {
    return rankedPlayer.replace(/\[[\w+\+-]+] /, "")
}

export const checkHotbarSlots = (itemName, itemVar) => {
    Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
        if (item.getName().includes(itemName)) {
            itemVar = index;
        }
    });
}