var pelttimer = -1;
register("chat", () => {
    pelttimer = 60;
}).setChatCriteria("&e[NPC] Trevor The Trapper&f: &rYou can find your${*}");

register("chat", (e) => {
    let yesmsg = new Message(EventLib.getMessage(e));
    yesmsg.getMessageParts().forEach((part) => {
        if (ChatLib.removeFormatting(part.getText()) == "[YES]") {
            ChatLib.say(part.getClickValue());
        }
    });
}).setChatCriteria("\n&r&b&lAccept the trappers task to hunt the animal?&r\n&r&7Click an option: &r&a&l[YES]&r&7 - &r&c&l[NO]&r");

register("step", () => {
    if (pelttimer > 0) {
        pelttimer--;
    } else if (pelttimer == 0) {
        pelttimer = -1;
        //  ChatLib.chat("&a---------------------------------");
        ChatLib.chat(PREFIX + "Trapper is ready for a new quest!");
        //  ChatLib.chat("&a---------------------------------");
    }
}).setDelay(1);