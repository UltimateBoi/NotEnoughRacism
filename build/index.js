// Imports:

import config from "./settings/config";
import RenderLib from "../../RenderLib/index";
import dungeons from "./settings/dungeons";
import esp from "./settings/esp";
import macros from "./settings/macros";
import request from "../../request/index";
import slayer from "./settings/slayer";
import sleep from "../../sleep/index";

export { RenderLib, config, macros, dungeons, esp, slayer, request, sleep };

register("command", () => config.openGUI()).setName("nergeneral");
register("command", () => dungeons.openGUI()).setName("nerdungeons");
// register("command", () => dungeonsscanner.openGUI()).setName("nermapscanner");
register("command", () => slayer.openGUI()).setName("nerslayer");
register("command", () => esp.openGUI()).setName("neresp");
register("command", () => macros.openGUI()).setName("nermacros");

(function () {
    const File = Java.type("java.io.File");
    const commandFiles = new File("./config/ChatTriggers/modules/NotEnoughRacism/build/commands").listFiles().filter(file => file.isFile() && file.getName().endsWith(".js"));
    commandFiles.forEach(file => {
        var _a;
        try {
            const command = require("./commands/" + file.getName()).default;
            register("command", command.run).setName(command.name);
            (_a = command.aliases) === null || _a === void 0 ? void 0 : _a.forEach(alias => {
                register("command", command.run).setName(alias);
            });
        } catch (e) {
            print("Error while loading command: " + e.message);
        }
    });

    const commands = new File("./config/ChatTriggers/modules/NotEnoughRacism/build/features/commands").listFiles().filter(file => file.isFile() && file.getName().endsWith(".js"));
    commands.forEach(file => require("./features/commands/" + file.getName()));
    const esp = new File("./config/ChatTriggers/modules/NotEnoughRacism/build/features/esp").listFiles().filter(file => file.isFile() && file.getName().endsWith(".js"));
    esp.forEach(file => require("./features/esp/" + file.getName()));
    const gbs = new File("./config/ChatTriggers/modules/NotEnoughRacism/build/features/ghostblocks").listFiles().filter(file => file.isFile() && file.getName().endsWith(".js"));
    gbs.forEach(file => require("./features/ghostblocks/" + file.getName()));
    const guimacros = new File("./config/ChatTriggers/modules/NotEnoughRacism/build/features/guimacros").listFiles().filter(file => file.isFile() && file.getName().endsWith(".js"));
    guimacros.forEach(file => require("./features/guimacros/" + file.getName()));
    const macros = new File("./config/ChatTriggers/modules/NotEnoughRacism/build/features/macros").listFiles().filter(file => file.isFile() && file.getName().endsWith(".js"));
    macros.forEach(file => require("./features/macros/" + file.getName()));
    const misc = new File("./config/ChatTriggers/modules/NotEnoughRacism/build/features/misc").listFiles().filter(file => file.isFile() && file.getName().endsWith(".js"));
    misc.forEach(file => require("./features/misc/" + file.getName()));
    const utils = new File("./config/ChatTriggers/modules/NotEnoughRacism/build/utils").listFiles().filter(file => file.isFile() && file.getName().endsWith(".js"));
    utils.forEach(file => require("./utils/" + file.getName()));
  //  require("./Map/index")
})();

