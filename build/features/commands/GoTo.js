import { PREFIX } from "../../utils/Constants"; 
const warps = [
    { name: "The Hub", aliases: ["hub", "village"] },
    { name: "Your Island", aliases: ["island", "home"] },
    { name: "The End", aliases: ["end"] },
    { name: "The End - Dragon's Nest", aliases: ["drag"] },
    { name: "The End - Void Sepulture", aliases: ["void"] },
    { name: "The Spider's Den", aliases: ["spider", "spiders"] },
    { name: "The Blazing Fortress", aliases: ["nether", "fortress"] },
    { name: "The Park", aliases: ["park"] },
    { name: "The Gold Mine", aliases: ["gold"] },
    { name: "The Deep Cavern", aliases: ["deep"] },
    { name: "The Dwarven Mines", aliases: ["mines"] },
    { name: "The Dwarven Mines - Forge", aliases: ["forge"] },
    { name: "The Crystal Hollows", aliases: ["ch", "crystals", "hollows"] },
    { name: "The Barn", aliases: ["barn"] },
    { name: "The Mushroom Desert", aliases: ["desert"] },
    { name: "The Hub - Castle", aliases: ["castle"] },
    { name: "The Hub - Museum", aliases: ["museum"] },
    { name: "The Dark Auction", aliases: ["da"] },
    { name: "The Hub - Crypts", aliases: ["crypt", "crypts"] },
    { name: "The Spider's Den - Nest", aliases: ["nest"] },
    { name: "The Blazing Fortress - Magma Cube Boss", aliases: ["magma"] },
    { name: "The Park - Jungle Island", aliases: ["jungle"] },
    { name: "The Park - Howling Cave", aliases: ["howl"] },
    { name: "The Dungeon Hub", aliases: ["dungeon_hub", "dhub", "dungeons"] }
]
register("command", (island) => {
    island = island.toLowerCase()
    const found = warps.find(warp => warp.aliases.includes(island))?.name
    if (!found) {
        ChatLib.chat(`${PREFIX}\"${island}\" is an Invalid Warp`);
    } else {
        ChatLib.chat(`${PREFIX}Warping to ${found}`)
        new Thread(() => {
            ChatLib.command("l");
            Thread.sleep(1000);
            ChatLib.command("play sb");
            Thread.sleep(1000);
            ChatLib.command(`warp ${island}`)
            error = false;
        }).start()
    }
}).setTabCompletions("hub", "village", "island", "home", "end", "drag", "void", "spider", "spiders", "nether", "fortress", "park", "gold", "deep", "mines", "ch", "crysals", "hollows", "barn", "desert", "castle", "museum", "da", "crypt", "crypts", "nest", "magma", "jungle", "howl", "dhub", "dungeons", "dungeons_hub").setName("goto")