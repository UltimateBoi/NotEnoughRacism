import { slayer } from "../..";

const zombieClass = Java.type("net.minecraft.entity.monster.EntityZombie")


function getDistanceFromPlayerEfficent(posX, posY, posZ) {
    let deltaX = posX - Player.getX();
    let deltaY = posY - Player.getY();
    let deltaZ = posZ - Player.getZ();

    return (deltaX * deltaX) + (deltaY * deltaY) + (deltaZ * deltaZ)
}

function FullLeather(entity) {
    for (let i = 1; i < 5; i++) {
        if (entity.getEntity().func_71124_b(i) === null) return false
        if (!entity.getEntity().func_71124_b(i).func_77977_a().toLowerCase().includes("cloth")) return false
    }
    return true
}


const zombieGhostArm = () => {
    let scoreboardLines = Scoreboard.getLines().map(line => line.getName().removeFormatting().toLowerCase());
    let inEnd = false;
    scoreboardLines.forEach(line => {
        if (line.includes("the end") || line.includes("dragon's") || line.includes("void"))
            inEnd = true;
    });
    if (!inEnd) return;
    World.getAllEntitiesOfType(zombieClass).forEach(entity => {
        if (FullLeather(entity)) {
            if (getDistanceFromPlayerEfficent(entity.getX(), entity.getY(), entity.getZ()) < 20 * 20) {
                entity.getEntity().func_70106_y()
            }
        }
    })
}

export { zombieGhostArm }; 