import { RightClick } from "../../utils/Utils";
import { BP, C08PacketPlayerBlockPlacement, PREFIX } from "../../utils/Constants";

const termAC = (toggled) => {
    if (Player.getHeldItem() !== null) {
        if (Player.getHeldItem().getName().toLowerCase().includes("terminator")) {
            if (toggled) {
                if (Client.currentGui.get() === null) {
                    Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getHeldItem().getItemStack(), 0, 0, 0)) 
                }
            }
        }
    }
}

export { termAC };