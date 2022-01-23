import { config } from "../index"; 
import { PREFIX } from "./Constants"
let GuiButton = Java.type("net.minecraft.client.gui.GuiButton");

let nerImage = new Image("NER", "https://cdn.discordapp.com/attachments/909729021795897396/914209168569823263/ner_nobg_00000.png");
let backgroundColor = Renderer.color(0, 0, 0, 150);
let bigChromaStep = 0;
let bigChromaSpeed = 10;
let smallChromaStep = 0;
let smallChromaSpeed = 10;

register("step", function() {
    bigChromaSpeed = config.chromaSpeed;
    smallChromaSpeed = config.chromaSpeed;
}).setDelay(2);

let configGui = new Gui();
let dungeonsButton = new GuiButton(0, Renderer.screen.getWidth() / 2 - 220, Renderer.screen.getHeight() / 2 - 10, 200, 20, "Dungeons");
let generalButton = new GuiButton(0, Renderer.screen.getWidth() / 2 - 220, Renderer.screen.getHeight() / 2 + 20, 200, 20, "General");
let slayerButton = new GuiButton(0, Renderer.screen.getWidth() / 2 + 20, Renderer.screen.getHeight() / 2 - 10, 200, 20, "Slayers");
let espButton = new GuiButton(0, Renderer.screen.getWidth() / 2 + 20, Renderer.screen.getHeight() / 2 + 20, 200, 20, "ESP");
let dungeonScannerButton = new GuiButton(0, Renderer.screen.getWidth() / 2 - 220, Renderer.screen.getHeight() / 2 + 50, 200, 20, "Dungeon Scanner");
let macrosButton = new GuiButton(0, Renderer.screen.getWidth() / 2 + 20, Renderer.screen.getHeight() / 2 + 50, 200, 20, "Macros");

class PaddyButton {
    constructor(x, y, width, height, text) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
    }

    drawButton() {
        let buttontext = this.text;
        let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2);
        let buttony = this.y + (this.height / 2 - 4);
        let mx = Client.getMouseX();
        let my = Client.getMouseY();
        if (mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height) {
            Renderer.drawRect(Renderer.color(180, 180, 180, 120), this.x, this.y, this.width, this.height);
        } else {
            Renderer.drawRect(Renderer.color(0, 0, 0, 120), this.x, this.y, this.width, this.height);
        }
        Renderer.drawString(buttontext, buttonx, buttony);
    }

    drawChromaButton() {
        let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2);
        let buttony = this.y + (this.height / 2) - 4;
        let mx = Client.getMouseX();
        let my = Client.getMouseY();
        let buttontext = new Text(this.text, buttonx, buttony).setColor(Renderer.getRainbow(smallChromaStep, smallChromaSpeed)).draw();
        if (mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height) {
            Renderer.drawRect(Renderer.color(180, 180, 180, 120), this.x, this.y, this.width, this.height);
        } else {
            Renderer.drawRect(Renderer.color(0, 0, 0, 120), this.x, this.y, this.width, this.height);
        }
    }

    isMouseOver() {
        let mx = Client.getMouseX();
        let my = Client.getMouseY();
        if (mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height) {
            return true;
        }
    }
}

register("command", function() {
    configGui.open();
}).setName("ner");

register("renderCrosshair", (event) => {
    if (configGui.isOpen()) {
        cancel(event); 
    }
})

register("renderOverlay", function() {
    if (configGui.isOpen()) {
        let nerText = new Text("Not Enough Racism", Renderer.screen.getWidth() / 2 - 90 - Renderer.getStringWidth(nerText) * 4.25, Renderer.screen.getHeight() / 4).setColor(Renderer.getRainbow(bigChromaStep, bigChromaSpeed)).setScale(7).setShadow(true);
        nerText.draw();
        bigChromaStep++;
        smallChromaStep++;
    }
})

register("renderCrosshair", (event) => {
    if (configGui.isOpen()) {
        cancel(event); 
    }
})

register("renderOverlay", function() {
    if (configGui.isOpen()) {
        Renderer.drawRect(backgroundColor, 0, 0, Renderer.screen.getWidth(), Renderer.screen.getHeight());
        generalButton = new PaddyButton(Renderer.screen.getWidth() / 2 - 148, Renderer.screen.getHeight() / 2 - 10, 300, 30, "General QOL");
        dungeonsButton = new PaddyButton(Renderer.screen.getWidth() / 2 - 148, Renderer.screen.getHeight() / 2 + 30, 300, 30, "Dungeons");
        espButton = new PaddyButton(Renderer.screen.getWidth() / 2 - 148, Renderer.screen.getHeight() / 2 + 70, 300, 30, "ESP");
        macrosButton = new PaddyButton(Renderer.screen.getWidth() / 2 - 148 , Renderer.screen.getHeight() / 2 + 110, 300, 30, "Macros");
        if (config.guibuttonstyle === 0) {
            dungeonsButton.drawChromaButton();
            generalButton.drawChromaButton();
            espButton.drawChromaButton();
            macrosButton.drawChromaButton();
        } else if (config.guibuttonstyle === 1) {
            dungeonsButton.drawButton();
            generalButton.drawButton();
            espButton.drawButton();
            macrosButton.drawButton();
        }

        contributionsButton = new PaddyButton(5, Renderer.screen.getHeight() - 25, 100, 20, "Contributions");
        contributionsButton.drawButton();
    }
})
register("guiMouseClick", function(x, y, button, state) {
    if (button !== 0) return;
    if (configGui.isOpen()) {
        if (dungeonsButton.isMouseOver()) {
            ChatLib.command("nerdungeons", true)
        }
        if (generalButton.isMouseOver()) {
            ChatLib.command("nergeneral", true)
        }
        if (espButton.isMouseOver()) {
            ChatLib.command("neresp", true)
        }
        if (macrosButton.isMouseOver()) {
            ChatLib.command("nermacros", true)
        }
        if (contributionsButton.isMouseOver()) {
            ChatLib.chat("&b----------------------------------------------------")
            ChatLib.chat(PREFIX + "Developers: &biTqxic&r, &bPaddy34a&r, &beznick")
            ChatLib.chat("&b----------------------------------------------------")
            ChatLib.chat("")
            ChatLib.chat("&b----------------------------------------------------")
            ChatLib.chat(PREFIX + "&bDungeon Extras&r: Dungeons ESP")
            ChatLib.chat(PREFIX + "&bAlon&r: Auto Mort, Auto Salvage and Auto Combine")
          //  ChatLib.chat(PREFIX + "&bAnonymous&r: Dungeon Map Scanner")
            ChatLib.chat("&b----------------------------------------------------")
        }
    }
})

register("renderHotbar", function() {
    if (configGui.isOpen()) {
        if (contributionsButton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Learn about all of the contributions of NotEnoughRacism", Client.getMouseX(), Client.getMouseY());
        }
    }
})



//==============================================================================




let contributionsButton = new PaddyButton(5, Renderer.screen.getHeight() - 25, 100, 20, "Contributions"); //needed to move this down because else its breaking