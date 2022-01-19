import { dungeons, config } from "../../index";

const blockSbMenu = (events) => {
    if (Player.getHeldItem().getName().toLowerCase().includes("skyblock menu") || Player.getHeldItem().getName().toLowerCase().includes("magical map")) {
        if (action.toString() === "RIGHT_CLICK_BLOCK" || action.toString() === "RIGHT_CLICK_EMPTY") {
            cancel(events)
        }
    }
}

const blockGS = (events) => {
    if (Player.getHeldItem().getName().toLowerCase().includes("gyro")) {
        if (action.toString() === "RIGHT_CLICK_BLOCK" || action.toString() === "RIGHT_CLICK_EMPTY") {
            cancel(events)
        }
    }
}

const blockGyro = (events) => {
    if (Player.getHeldItem().getName().toLowerCase().includes("gyro")) {
        if (action.toString() === "RIGHT_CLICK_BLOCK" || action.toString() === "RIGHT_CLICK_EMPTY") {
            cancel(events)
        }
    }
}

export { blockGS, blockGyro, blockSbMenu }; 