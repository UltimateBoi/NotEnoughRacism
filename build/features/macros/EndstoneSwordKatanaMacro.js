import { BP } from "../../utils/Constants";
import {
    C08PacketPlayerBlockPlacement, 
    C09PacketHeldItemChange,
    C0APacketAnimation
} from "../../utils/Constants";

// let rogueSlot;
// let otherSlot = Player.getInventory().getInventory().field_70461_c

// const checkHotbarSlots = (itemName) => {
//     Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
//         if (item.getName().includes(itemName)) {
//             rogueSlot = index;
//         }
//     });
// }

const endStoneSwordtoKatana = () => {
    for (let i = 0; i < 9; i++) {
        if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().removeFormatting().toLowerCase().includes("end stone")) {
            Client.sendPacket(new C09PacketHeldItemChange(i));
            Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0, 0));
            break;
        }
    }
    for (let i = 0; i < 9; i++) {
        if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().removeFormatting().toLowerCase().includes("katana")) {
            Client.sendPacket(new C09PacketHeldItemChange(i));
            Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0, 0)); 
            break;
        }
    }
    Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
}

export { endStoneSwordtoKatana };