import config from "../settings/config"; 

const backgroundColor = Renderer.color(40, 40, 40, 255);
const squareColor = Renderer.color(0, 0, 0, 255);
const nerImg = new Image("NER", "https://cdn.discordapp.com/icons/904778713361698816/9990f7855310d3c6f887023176875a87.png?size=4096");


function isMouseOver(x, y, width, height) {
    // let mx = Client.getMouseX();
    // let my = Client.getMouseY();
    // if (mx >= x && mx <= x + width && my >= y && my <= y + height) {
    //     return true;
    // }
}

const spotifyGuiScroll = (direction) => {
    // if (config.moveSongGui.isOpen()) {
    //     if (direction === 1) {
    //         config.spotifyWidth += (25/100 * config.spotifyWidth)
    //         config.spotifyHeight += (25/100) * config.spotifyHeight
    //     } else if (direction === -1) {
    //         config.spotifyWidth -= (25/100 * config.spotifyWidth)
    //         config.spotifyHeight -= (25/100) * config.spotifyHeight
    //     }
    // }
}



const spotifyRenderOverlay = (toggle) => {
    // if (toggle) {
    //     Renderer.drawRect(backgroundColor, config.spotifyX, config.spotifyY, config.spotifyWidth, config.spotifyHeight);
    //  //   Renderer.drawRect(squareColor, config.spotifyX, config.spotifyY, config.spotifyHeight, config.spotifyHeight)
    //  //   Renderer.drawImage(nerImg, config.spotifyX, config.spotifyY, config.spotifyHeight, config.spotifyHeight)
    //  //   Renderer.drawString("Not Enough Racism", config.spotifyX, config.spotifyY + config.spotifyY / 2)
    // }
}

export {
    spotifyRenderOverlay,
    spotifyGuiScroll,
    isMouseOver
}