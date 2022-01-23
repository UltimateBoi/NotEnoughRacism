import { dungeons, config } from "../../index";

const blockSbMenu = (action, events) => {
    if (Player.getHeldItem() === null) return;
    if (Player.getHeldItem().getName().toLowerCase().includes("skyblock menu") || Player.getHeldItem().getName().toLowerCase().includes("magical map")) {
        if (action.toString() === "RIGHT_CLICK_BLOCK" || action.toString() === "RIGHT_CLICK_EMPTY") {
            cancel(events)
        }
    }
}

const blockGS = (action, events) => {
    if (Player.getHeldItem() === null) return;
    if (Player.getHeldItem().getName().toLowerCase().includes("gyro")) {
        if (action.toString() === "RIGHT_CLICK_BLOCK" || action.toString() === "RIGHT_CLICK_EMPTY") {
            cancel(events)
        }
    }
}

const blockGyro = (action, events) => {
    if (Player.getHeldItem() === null) return;
    if (Player.getHeldItem().getName().toLowerCase().includes("gyro")) {
        if (action.toString() === "RIGHT_CLICK_BLOCK" || action.toString() === "RIGHT_CLICK_EMPTY") {
            cancel(events)
        }
    }
}

export { blockGS, blockGyro, blockSbMenu }; 