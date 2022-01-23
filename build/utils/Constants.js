const mc = Client.getMinecraft()

const PREFIX = "&7[&bNotEnoughRacism&7]&r ";
const BIND_PREFIX = "⭍NotEnoughRacism"
const MISC_PREFIX = "⭍NotEnoughRacism: Misc Macros";
const CHAT_PREFIX = "⭍NotEnoughRacism: Chat Macros";
const GUI_PREFIX = "⭍NotEnoughRacism: GUI Macros";
const ITEM_PREFIX = "⭍NotEnoughRacism: Item Macros";
const ADVANCE_PREFIX = "⭍NotEnoughRacism: Advance Macros";
const SPOTIFY_PREFIX = "⭍NotEnoughRacism: Spotify Controls";

const BP = Java.type("net.minecraft.util.BlockPos");

const C08PacketPlayerBlockPlacement = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
const C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");
const C0APacketAnimation = Java.type("net.minecraft.network.play.client.C0APacketAnimation");


const playerESP = Java.type("net.minecraft.entity.player.EntityPlayerMP");

const DiscordRPC = Java.type("net.arikia.dev.drpc.DiscordRPC");
const DiscordEventHandlers = Java.type("net.arikia.dev.drpc.DiscordEventHandlers");
const DiscordRichPresence = Java.type("net.arikia.dev.drpc.DiscordRichPresence");



const ghostBlockExclude = [
    "minecraft:lever",
    "minecraft:stone_button",
    "minecraft:chest",
    "minecraft:trapped_chest",
    "minecraft:skull",
    "minecraft:command_block"
];

const blockCoords = [
    [275, 220, 231],
    [275, 220, 232],
    [299, 168, 243],
    [299, 168, 244],
    [299, 168, 246],
    [299, 168, 247],
    [299, 168, 247],
    [300, 168, 247],
    [300, 168, 246],
    [300, 168, 244],
    [300, 168, 243],
    [298, 168, 247],
    [298, 168, 246],
    [298, 168, 244],
    [298, 168, 243],
    [287, 167, 240],
    [288, 167, 240],
    [289, 167, 240],
    [290, 167, 240],
    [291, 167, 240],
    [292, 167, 240],
    [293, 167, 240],
    [294, 167, 240],
    [295, 167, 240],
    [290, 167, 239],
    [291, 167, 239],
    [292, 167, 239],
    [293, 167, 239],
    [294, 167, 239],
    [295, 167, 239],
    [290, 166, 239],
    [291, 166, 239],
    [292, 166, 239],
    [293, 166, 239],
    [294, 166, 239],
    [295, 166, 239],
    [290, 166, 240],
    [291, 166, 240],
    [292, 166, 240],
    [293, 166, 240],
    [294, 166, 240],
    [295, 166, 240]
];

const bloodMobs = [
    "Revoker",
    "Psycho",
    "Reaper",
    "Cannibal",
    "Mute",
    "Ooze",
    "Putrid",
    "Freak",
    "Leech",
    "Tear",
    "Parasite",
    "Flamer",
    "Skull",
    "Mr. Dead",
    "Vader",
    "Frost",
    "Walker",
    "Wandering Soul",
    "Bonzo",
    "Scarf",
    "Livid"
];

export {
    mc,
    PREFIX,
    BIND_PREFIX,
    MISC_PREFIX,
    CHAT_PREFIX,
    GUI_PREFIX,
    ITEM_PREFIX,
    ADVANCE_PREFIX,
    SPOTIFY_PREFIX,
    BP,
    C08PacketPlayerBlockPlacement,
    C09PacketHeldItemChange,
    C0APacketAnimation,
    playerESP,
    DiscordRPC,
    DiscordRichPresence,
    DiscordEventHandlers,
    ghostBlockExclude,
    blockCoords,
    bloodMobs
}