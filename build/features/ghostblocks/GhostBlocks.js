import { BP, ADVANCE_PREFIX, ghostBlockExclude } from "../../utils/Constants"; 

const ghostBlocks = () => {
        let lookingAt = Player.lookingAt(); 
        if (lookingAt.getClass() === Block) {
                if (!ghostBlockExclude.includes(lookingAt.type.getRegistryName())) {
                    World.getWorld().func_175698_g(new BP(lookingAt.getX(), lookingAt.getY(), lookingAt.getZ()));
                }
        }
}

export { ghostBlocks };