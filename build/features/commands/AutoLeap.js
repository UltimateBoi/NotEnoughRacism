import { dungeons } from "../../index"; 
import { PREFIX } from "../../utils/Constants"; 

register("command", playerIGN => {
    dungeons.spiritNAME = playerIGN.toLowerCase();
    ChatLib.chat(PREFIX + "Set Auto Spirit IGN to " + playerIGN);
}).setName("leapign");

register("command", playerIGN => {
    dungeons.s1LeapName = playerIGN.toLowerCase();
    ChatLib.chat(PREFIX + "Set S1 Auto Leap IGN to " + playerIGN);
}).setName("s1ign");

register("command", playerIGN => {
    dungeons.buggedChunkName = playerIGN.toLowerCase();
    ChatLib.chat(PREFIX + "Set Bugged Chunk Auto Leap IGN to " + playerIGN);
}).setName("bhign");