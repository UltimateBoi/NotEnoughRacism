let witherCloak = false;
register("chat", () => {
    witherCloak = true;
}).setChatCriteria("&r&dCreeper Veil &r&aActivated!&r");

register("chat", () => {
    witherCloak = false;
}).setChatCriteria("&r&dCreeper Veil &r&cDe-activated!&r");


const witherCloakGhostArm = (entity) => {
    if (witherCloak) {
        if (entity.getClassName() === "EntityCreeper") {
            entity.getEntity().func_70106_y()
        }
    }
}

export {
    witherCloakGhostArm
};