import {
    BP,
    C08PacketPlayerBlockPlacement, 
    C09PacketHeldItemChange,
    C0APacketAnimation
} from "../../utils/Constants";


const rogueSwordMacro = () => {
    new Thread(() => {
        let playerSpeed = Player.getPlayer().func_70689_ay();
        if (playerSpeed < 0.5) {
            for (let i = 0; i < 9; i++) {
                if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes("Rogue")) {
                    Client.sendPacket(new C09PacketHeldItemChange(i));
                    while (playerSpeed < 0.5) {
                        Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0, 0));
                        playerSpeed += 0.01;
                        Thread.sleep(10);
                        // ChatLib.chat("clicked")
                    }
                    Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
                    break;
                }
            }
        }
    }).start();
}

export { rogueSwordMacro };
