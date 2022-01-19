import { macros } from "../..";
import { BP } from "../../utils/Constants";


let lastSwap = new Date().getTime();

const aotsSwap = (useAxe, axeSwap) => {
    if (macros.axeSwap === 1) {
        if (useAxe.isKeyDown()) {
            if (new Date().getTime() - lastSwap > 250) {
                for (let i = 0; i < 9; i++) {
                    if (Player.getInventory().getStackInSlot(i).getName().removeFormatting().toLowerCase().includes("axe of the shredded")) {
                        Client.sendPacket(new C09PacketHeldItemChange(i));
                        Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0, 0));
                        Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
                        lastSwap = new Date().getTime();
                        break;
                    }
                }
            }
        }
    } else if (macros.axeSwap === 0) {
        if (axeSwap) {
            if (Client.currentGui.get() !== null) return;
            if (new Date().getTime() - lastSwap > 250) {
                for (let i = 0; i < 9; i++) {
                    if (Player.getInventory().getStackInSlot(i).getName().removeFormatting().toLowerCase().includes("axe of the shredded")) {
                        Client.sendPacket(new C09PacketHeldItemChange(i));
                        Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0, 0));
                        Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
                        lastSwap = new Date().getTime();
                        break;
                    }
                }
            }
        }
    }
}

export { aotsSwap }