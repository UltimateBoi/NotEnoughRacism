import {
    config
} from "../../index"; 

function getDistanceFromPlayerEfficent(posX, posY, posZ) {
    let deltaX = posX - Player.getX();
    let deltaY = posY - Player.getY();
    let deltaZ = posZ - Player.getZ();

    return (deltaX * deltaX) + (deltaY * deltaY) + (deltaZ * deltaZ)
}

const playerGhostArm = (entity) => {
    if (entity.getClassName() === "EntityOtherPlayerMP") {
        if (getDistanceFromPlayerEfficent(entity.getX(), entity.getY(), entity.getZ()) < 20 * 20) {
            entity.getEntity().func_70106_y()
        }
    }
}

export {
    playerGhostArm
}; 