import {
    mc,
    PREFIX,
    MISC_PREFIX,
    CHAT_PREFIX,
    GUI_PREFIX,
    ITEM_PREFIX,
    ADVANCE_PREFIX,
    BP,
    C08PacketPlayerBlockPlacement,
    C09PacketHeldItemChange,
    C0APacketAnimation,
    playerESP,
    DiscordRPC,
    DiscordRichPresence,
    DiscordEventHandlers,
    ghostBlockExclude,
    blockCoords
} from "./utils/Constants";

let inHowl = false;
let inSpidersDen = false;
let inEnd = false;
let inCrypt = false;
let inGunpowderMines = false;
let inIsland = false;
let inDungeon = false;
let inMist = false;
let inF7 = false;

import { RenderLib, config, macros, dungeons, esp, slayer, request } from "./index";
import { revealHiddenMobs } from "./features/misc/RevealHiddenMobs";
import { coordGhostBlocks } from "./features/ghostblocks/CoordinateGhostBlocks";
import { ghostBlocks } from "./features/ghostblocks/GhostBlocks";
import { stonkGhostBlockPlayerInteract, stonkGhostBlocksTick } from "./features/ghostblocks/StonkGhostBlocks";
import { boneMacros } from "./features/macros/BoneMacro";
import { dungeonSellerGUI, dungeonSellerTick } from "./features/guimacros/DungeonSeller";
import { potionSeller } from "./features/guimacros/PotionSeller";
import { inCombatWardrobeGUI, InCombatWardrobeTick } from "./features/guimacros/InCombatWardrobe";
import { inCombatTradeGUI, inCombatTradeTick } from "./features/guimacros/InCombatTrade";
import { autoCombine } from "./features/guimacros/AutoCombine";
import { autoMort } from "./features/guimacros/AutoMort";
import { autoSalvage } from "./features/guimacros/AutoSalvage";
import { ClickMacro } from "./utils/ClickMacro";
import { termSwapper } from "./features/macros/TermSwap";
import { endStoneSwordtoKatana } from "./features/macros/EndstoneSwordKatanaMacro";
import { rogueSwordMacro } from "./features/macros/RogueSwordMacro";
import { autoWardrobeGUI, autoWardrobeTick } from "./features/guimacros/WardrobeSwap";
import { enderChestGUI, enderChestTick } from "./features/guimacros/EnderChest";
import { autoStorageGUI, autoStorageTick, openStorageGUI, openStorageTick } from "./features/guimacros/Storage";
import { autoSimonSays, clickSimonSays } from "./features/macros/AutoSimonSays";
import { blockGS, blockGyro, blockSbMenu } from "./features/misc/BlockClicks";
import { grindGhosts } from "./features/macros/SoulWhipSwap";
import { leftClickSoulWhip } from "./features/macros/LeftClickWhip";
import { aotsSwap } from "./features/macros/AxeSwap";
import { autoRogueSword } from "./features/macros/AutoRogueSword";
import { termAC } from "./features/macros/TerminatorAutoClicker";
import { playerGhostArm } from "./features/misc/PlayerGhostArm";
import { zombieGhostArm } from "./features/misc/SummonsGhostArm";
import { witherCloakGhostArm } from "./features/misc/CreeperGhostArm";

const ghostBlockBind = new KeyBind("Ghost Blocks", Keyboard.KEY_NONE, ADVANCE_PREFIX);
const tradeMacro = new KeyBind("Trade Menu", Keyboard.KEY_NONE, CHAT_PREFIX);
const wardrobeMacro = new KeyBind("Wardrobe Macro", Keyboard.KEY_NONE, CHAT_PREFIX);
const sellPots = new KeyBind("Sell Speed 6 Pots", Keyboard.KEY_NONE, GUI_PREFIX)
const sellDungeonBS = new KeyBind("Sell Dungeons Garbage", Keyboard.KEY_NONE, GUI_PREFIX);
const storageSlot1 = new KeyBind("Storage Macro 1", Keyboard.KEY_NONE, GUI_PREFIX);
const storageSlot2 = new KeyBind("Storage Macro 2", Keyboard.KEY_NONE, GUI_PREFIX);
const storageSlot3 = new KeyBind("Storage Macro 3", Keyboard.KEY_NONE, GUI_PREFIX);
const storageSlot4 = new KeyBind("Storage Macro 4", Keyboard.KEY_NONE, GUI_PREFIX);
const storageMacro = new KeyBind("Storage Macro", Keyboard.KEY_NONE, CHAT_PREFIX);
const echestMacro = new KeyBind("Ender Chest Macro", Keyboard.KEY_NONE, GUI_PREFIX);
let firstSlot = new KeyBind("Wardrobe Slot 1", Keyboard.KEY_NONE, GUI_PREFIX);
let secondSlot = new KeyBind("Wardrobe Slot 2", Keyboard.KEY_NONE, GUI_PREFIX);
let thirdSlot = new KeyBind("Wardrobe Slot 3", Keyboard.KEY_NONE, GUI_PREFIX);
let fourthSlot = new KeyBind("Wardrobe Slot 4", Keyboard.KEY_NONE, GUI_PREFIX);
let fifthSlot = new KeyBind("Wardrobe Slot 5", Keyboard.KEY_NONE, GUI_PREFIX);
let sixthSlot = new KeyBind("Wardrobe Slot 6", Keyboard.KEY_NONE, GUI_PREFIX);
let seventhSlot = new KeyBind("Wardrobe Slot 7", Keyboard.KEY_NONE, GUI_PREFIX);
let eighthSlot = new KeyBind("Wardrobe Slot 8", Keyboard.KEY_NONE, GUI_PREFIX);
let ninethSlot = new KeyBind("Wardrobe Slot 9", Keyboard.KEY_NONE, GUI_PREFIX);

const boneMacro = new KeyBind("Bonemerang Macro", Keyboard.KEY_NONE, ADVANCE_PREFIX);
const termToggle = new KeyBind("Terminator Swap", Keyboard.KEY_NONE, ADVANCE_PREFIX)
const useEndStone = new KeyBind("Use End Stone Sword and Katana", Keyboard.KEY_NONE, ITEM_PREFIX)
const RogueMacro = new KeyBind("Rogue Sword Macro", Keyboard.KEY_NONE, ITEM_PREFIX);
const soulWhipSwap = new KeyBind("Soul Whip Swap (Toggle)", Keyboard.KEY_NONE, ADVANCE_PREFIX);
const leftClickWhip = new KeyBind("Left Click Soulwhip", Keyboard.KEY_NONE, ADVANCE_PREFIX);
const useAxe = new KeyBind("Axe Swap", Keyboard.KEY_NONE, ADVANCE_PREFIX);
const autoRogue = new KeyBind("Auto Rogue Sword", Keyboard.KEY_NONE, ADVANCE_PREFIX);
const autoClicker = new KeyBind("Terminator AC", Keyboard.KEY_NONE, ADVANCE_PREFIX)

let termSwap = false;
let isGrindingGhosts = false;
let lcWhipToggle = false;
let axeSwap = false;
let autoSpeed = false;
let toggled = false

new ClickMacro("packet", "right", new KeyBind("Teleport Macro", Keyboard.KEY_NONE, ITEM_PREFIX), 25, "isKeyDown", "Aspect of the End", "Aspect of the Void");
new ClickMacro("packet", "right", new KeyBind("Use Wither Cloak", Keyboard.KEY_NONE, ITEM_PREFIX), 25, "isPressed", "Wither Cloak Sword");
new ClickMacro("packet", "right", new KeyBind("Use Ice Spray", Keyboard.KEY_NONE, ITEM_PREFIX), 25, "isPressed", "Ice Spray Wand");
new ClickMacro("packet", "right", new KeyBind("Use Wither Sword", Keyboard.KEY_NONE, ITEM_PREFIX), 25, "isPressed", "Hyperion", "Valkyrie", "Scylla", "Astraea");
new ClickMacro("packet", "right", new KeyBind("Use Fishing Rod", Keyboard.KEY_NONE, ITEM_PREFIX), 25, "isPressed", "rod of the sea", "auger rod");
new ClickMacro("packet", "left", new KeyBind("Use Gyro Wand", Keyboard.KEY_NONE, ITEM_PREFIX), 25, "isPressed", "gyrokinetic wand");
new ClickMacro("packet", "left", new KeyBind("Use Gloomlock Grimoire", Keyboard.KEY_NONE, ITEM_PREFIX), 25, "isPressed", "gloomlock grimoire");

register("tick", () => {
    if (macros.autoCombine) {
        autoCombine();
    }
    if (macros.autoMort) {
        autoMort();
    }
    if (macros.autoSalvage) {
        autoSalvage();
    }
    if (useEndStone.isPressed()) {
        endStoneSwordtoKatana();
    }
    if (RogueMacro.isPressed()) {
        rogueSwordMacro();
    }
    if (tradeMacro.isPressed()) {
        inCombatTradeTick();
    }
    if (wardrobeMacro.isPressed()) {
        InCombatWardrobeTick();
    }
    if (sellPots.isPressed()) {
        potionSeller();
    }
    if (sellDungeonBS.isPressed()) {
        dungeonSellerTick();
    }
    if (boneMacro.isKeyDown()) {
        boneMacros();
    }
    if (echestMacro.isPressed()) {
        enderChestTick();
    }
    if (storageMacro.isPressed()) {
        openStorageTick();
    }
    if (macros.termSwap === 0) {
        if (termToggle.isPressed()) {
            ChatLib.chat(`${(termSwap = !termSwap) ? PREFIX + '&rTerminator Swap &aEnabled' : PREFIX + '&rTerminator Swap &cDisabled'}`);
        }
    }
    if (soulWhipSwap.isPressed()) {
        ChatLib.chat(`${(isGrindingGhosts = !isGrindingGhosts) ? PREFIX + '&rGhost SwordSwap &aEnabled' : PREFIX + '&rGhost SwordSwap &cDisabled'}`);
    }
    if (leftClickWhip.isPressed()) {
        ChatLib.chat(`${(lcWhipToggle = !lcWhipToggle) ? PREFIX + '&rSoul Whip Swap &aEnabled' : PREFIX + '&rSoul Whip Swap &cDisabled'}`);
    }
    if (dungeons.autoSS && dungeons.autoSSType === 0) {
        autoSimonSays();
    }
    if (macros.axeSwap === 0) {
        if (useAxe.isPressed()) {
            lastSwap = new Date().getTime();
            ChatLib.chat(`${(axeSwap = !axeSwap) ? PREFIX + '&rAxe Swap &aEnabled' : PREFIX + '&rAxe Swap &cDisabled'}`);
        }
    }
    if (autoRogue.isPressed()) {
        ChatLib.chat(`${(autoSpeed = !autoSpeed) ? PREFIX + '&rAuto Rogue &aEnabled' : PREFIX + '&rAuto Rogue &cDisabled'}`);

        // To Trigger when Clicked instead of 30s After
        if (autoSpeed) {
            if (!inDungeon) return;
            for (let i = 0; i < 9; i++) {
                if (Player.getInventory().getStackInSlot(i).getName().removeFormatting().toLowerCase().includes("rogue")) {
                    Client.sendPacket(new C09PacketHeldItemChange(i));
                    for (let j = 0; j < dungeons.autoRogueClicks; j++) {
                        Client.sendPacket(new C08PacketPlayerBlockPlacement(new BlockPos(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0, 0));
                        // ChatLib.chat("Clicked Rogue Sword");
                    }
                    Client.sendPacket(new C09PacketHeldItemChange(Player.getInventory().getInventory().field_70461_c));
                    break;
                }
            }
        }
    }
    if (autoClicker.isPressed()) {
        ChatLib.chat(`${(toggled = !toggled) ? PREFIX + '&rTerminator AC &aEnabled' : PREFIX + '&rTerminator AC &cDisabled'}`);
    }
    autoRogueSword(autoSpeed);
    termSwapper(termSwap);
    autoWardrobeTick(firstSlot, secondSlot, thirdSlot, fourthSlot, fifthSlot, sixthSlot, seventhSlot, eighthSlot, ninethSlot);
    autoStorageTick(storageSlot1, storageSlot2, storageSlot3, storageSlot4);
    aotsSwap(useAxe, axeSwap);
    if (slayer.ghostArm) {
        zombieGhostArm(); 
    }
})

register("postGuiRender", () => {
    inCombatTradeGUI();
    inCombatWardrobeGUI();
    dungeonSellerGUI();
    autoWardrobeGUI();
    enderChestGUI();
    openStorageGUI();
    autoStorageGUI();
})
register("playerInteract", (action, pos, event) => {
    if (dungeons.stonkGB) {
        stonkGhostBlockPlayerInteract(action, pos, event);
    }
    if (dungeons.gsBlock) {
        blockGS(event);
    }
    if (dungeons.gyroBlock) {
        blockGyro(event);
    }
    if (config.blockSBMenu) {
        blockSbMenu(event);
    }
});

register("step", () => {
    if (ghostBlockBind.isKeyDown()) {
        ghostBlocks();
    }
    if (dungeons.stonkGB) {
        stonkGhostBlocksTick();
    }
    if (dungeons.coordGB) {
        coordGhostBlocks();
    }
    if (toggled) {
        termAC(toggled); 
    }
}).setFps(40);

register("step", () => {
    grindGhosts(soulWhipSwap);
    let scoreboardLines = Scoreboard.getLines().map(line => line.getName().removeFormatting().toLowerCase());
    scoreboardLines.forEach(line => {
        if (line.includes("howl") || line.includes("castle")) {
            inHowl = true;
        }
        if (line.includes("spider")) {
            inSpidersDen = true;
        }
        if (line.includes("coal") || line.includes("graveyard")) {
            inCrypt = true;
        }
        if (line.includes("end") || line.includes("drag") || line.includes("void")) {
            inEnd = true;
        }
        if (line.includes("gunpowder")) {
            inGunpowderMines = true;
        }
        if (line.includes("your")) {
            inIsland = true;
        }
        if (line.includes("cata")) {
            inDungeon = true;
        }
        if (line.includes("f7")) {
            inF7 = true;
        }
        if (line.includes("mist")) {
            inMist = true;
        }
    })
}).setFps(2);

register("postRenderEntity", (entity, pos, pticks, event) => {
    revealHiddenMobs(entity);
    if (config.playerGhostArm) {
        playerGhostArm(entity); 
    }
    if (dungeons.creeperGhostArm) {
        witherCloakGhostArm(entity); 
    }
});

register("clicked", (x, y, button, state) => {
    if (dungeons.autoSS && dungeons.autoSSType === 1) {
        clickSimonSays(button);
    }
    leftClickSoulWhip(button, leftClickWhip);
})