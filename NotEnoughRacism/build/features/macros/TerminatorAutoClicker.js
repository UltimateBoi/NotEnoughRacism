import { RightClick } from "../../utils/Utils";
import { PREFIX } from "../../utils/Constants";

const termAC = (toggled) => {
    if (Player.getHeldItem() !== null) {
        if (Player.getHeldItem().getName().toLowerCase().includes("terminator")) {
            if (toggled) {
                if (Client.currentGui.get() === null) {
                    RightClick.invoke(Client.getMinecraft()); 
                }
            }
        }
    }
}

export { termAC };