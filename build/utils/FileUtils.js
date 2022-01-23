import {
    PREFIX
} from "./Constants";

register("worldLoad", function() {
    if (String(FileLib.read("./config/ChatTriggers/modules/NotEnoughRacism/firstTime.txt")) === "true") {
        let File = Java.type("java.io.File");
        let dungeons = new File("./config/ChatTriggers/modules/NotEnoughRacismConfig", "Dungeons").mkdirs();
        let slayers = new File("./config/ChatTriggers/modules/NotEnoughRacismConfig", "Slayers").mkdirs();
        let general = new File("./config/ChatTriggers/modules/NotEnoughRacismConfig", "General").mkdirs();
        let esp = new File("./config/ChatTriggers/modules/NotEnoughRacismConfig", "ESP").mkdirs();
        let mapscanner = new File("./config/ChatTriggers/modules/NotEnoughRacismConfig", "MapScanner").mkdirs();
        let macros = new File("./config/ChatTriggers/modules/NotEnoughRacismConfig", "Macros").mkdirs();
        //AutoSpiritConfig.save()

        FileLib.write("./config/ChatTriggers/modules/NotEnoughRacism/firstTime.txt", "false");
    }
})

register("command", () => {
        if (String(FileLib.read("./config/ChatTriggers/modules/NotEnoughRacism/firstTime.txt")) === "false") {

            FileLib.write("./config/ChatTriggers/modules/NotEnoughRacism/firstTime.txt", "true");
            setTimeout(() => {
                if (String(FileLib.read("./config/ChatTriggers/modules/NotEnoughRacism/firstTime.txt")) === "true") {
                    ChatLib.chat(PREFIX + "First Time set to True")
                }
            }, 50);
        } else if (String(FileLib.read("./config/ChatTriggers/modules/NotEnoughRacism/firstTime.txt")) === "true") {
            ChatLib.chat(PREFIX + "First Time is already True")
        }
    }).setName("firstTimeTrue") //     "version": "2.2.2",

register("command", (version) => {
    if (String(FileLib.read("./config/ChatTriggers/modules/NotEnoughRacism/metadata.json")).includes('"version":')) {
        //  ChatLib.chat("true");
        FileLib.write("./config/ChatTriggers/modules/NotEnoughRacism/metadata.json", JSON.stringify({
            "$schema": "../CTAutocomplete/schema.json",
            "name": "Not Enough Racism ",
            "creator": "iTqxic, Paddy34a & eznick",
            "version": version,
            "entry": "init.js",
            "description": "Skyblock Racists QOL Mod",
            "requires": ["Vigilance", "RenderLib", "request", "Promise"]
        }, null, 4));
        if (String(FileLib.read("./config/ChatTriggers/modules/NotEnoughRacism/metadata.json")).includes(`"version": "` + version + '"')) {
            ChatLib.chat(PREFIX + "Set Version to: " + version);
        }
    }
}).setName("setVersion");

register("command", () => {
    let moduleVersion = JSON.parse(FileLib.read("./config/ChatTriggers/modules/NotEnoughRacism/metadata.json")).version
    ChatLib.chat(PREFIX + "Current Version: " + moduleVersion);
}).setName("getVersion");