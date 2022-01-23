import { dungeons } from "../../index";
import { PREFIX } from "../../utils/Constants";

register("command", () => {
    dungeons.dungSellList = "Rotten, Skeleton Master, Skeleton Grunt, Skeleton Lord, Zombie Soldier, Skeleton Soldier, Zombie Knight, Zombie Commander, Zombie Lord, Skeletor, Super Heavy, Heavy, Sniper Helmet, Dreadlord, Earth Shard, Zombie Commander Whip, Machine Gun, Sniper Bow, Soulstealer Bow, Cutlass, Silent Death, Training Weight, Health Potion VIII, Health Potion 8, Beating Heart, Premium Flesh, Mimic Fragment, Enchanted Rotten Flesh, Enchanted Bone, Defuse Kit, Enchanted Ice, Optic Lens, Tripwire Hook, Button, Carpet, Lever, Sign, Diamond Atom, Snow Rune, Blood Rune, Zap Rune, Gem Rune, Lava Rune, Hot Rune, White Spiral Rune, Hearts Rune, Ice Rune, Redstone Rune, Sparkling Rune, Clouds Rune, Golden Rune"
    ChatLib.chat(PREFIX + "Imported Default Items")
    ChatLib.command("ner", true)
}).setName("dungitems");