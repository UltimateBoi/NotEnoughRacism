const drawName = (entity, red, green, blue) => {
    GL11.glBlendFunc(770, 771);
    GL11.glEnable(GL11.GL_BLEND);
    GL11.glDisable(GL11.GL_TEXTURE_2D);
    GL11.glDisable(GL11.GL_DEPTH_TEST);
    GL11.glDepthMask(false);
    GlStateManager.func_179094_E();

    let counter = 0;

    Tessellator.drawString(entity.name,
        entity.getRenderX(),
        entity.getRenderY() + 0.5,
        entity.getRenderZ(),
        Renderer.color(red, green, blue),
        true,
        0.0267,
        false
    );


    GlStateManager.func_179121_F();
    GL11.glEnable(GL11.GL_TEXTURE_2D);
    GL11.glEnable(GL11.GL_DEPTH_TEST);
    GL11.glDepthMask(true);
    GL11.glDisable(GL11.GL_BLEND);
};

const drawEspBox = (x, y, z, w, h, red, green, blue, alpha, phase) => {
    Tessellator.pushMatrix();
    GL11.glLineWidth(2.0);
    GlStateManager.func_179129_p(); // disableCullFace
    GlStateManager.func_179147_l(); // enableBlend
    GlStateManager.func_179112_b(770, 771); // blendFunc
    GlStateManager.func_179132_a(false); // depthMask
    GlStateManager.func_179090_x(); // disableTexture2D

    if (phase) {
        GlStateManager.func_179097_i() // disableDepth
    }

    const locations = [
        //    x, y, z    x, y, z
        [
            [0, 0, 0],
            [w, 0, 0],
        ],
        [
            [0, 0, 0],
            [0, 0, w],
        ],
        [
            [w, 0, w],
            [w, 0, 0],
        ],
        [
            [w, 0, w],
            [0, 0, w],
        ],

        [
            [0, h, 0],
            [w, h, 0],
        ],
        [
            [0, h, 0],
            [0, h, w],
        ],
        [
            [w, h, w],
            [w, h, 0],
        ],
        [
            [w, h, w],
            [0, h, w],
        ],

        [
            [0, 0, 0],
            [0, h, 0],
        ],
        [
            [w, 0, 0],
            [w, h, 0],
        ],
        [
            [0, 0, w],
            [0, h, w],
        ],
        [
            [w, 0, w],
            [w, h, w],
        ],
    ];

    locations.forEach((loc) => {
        Tessellator.begin(3).colorize(red, green, blue, alpha);

        Tessellator.pos(x + loc[0][0] - w / 2, y + loc[0][1], z + loc[0][2] - w / 2).tex(0, 0);

        Tessellator.pos(x + loc[1][0] - w / 2, y + loc[1][1], z + loc[1][2] - w / 2).tex(0, 0);

        Tessellator.draw();
    });

    GlStateManager.func_179089_o(); // enableCull
    GlStateManager.func_179084_k(); // disableBlend
    GlStateManager.func_179132_a(true); // depthMask
    GlStateManager.func_179098_w(); // enableTexture2D

    if (phase) {
        GlStateManager.func_179126_j(); // enableDepth
    }
    
    Tessellator.popMatrix();
};

const drawInnerEspBox = (x, y, z, w, h, red, green, blue, alpha, phase) => {
    Tessellator.pushMatrix();
    GL11.glLineWidth(2.0);
    GlStateManager.func_179129_p(); // disableCullFace
    GlStateManager.func_179147_l(); // enableBlend
    GlStateManager.func_179112_b(770, 771); // blendFunc
    GlStateManager.func_179132_a(false); // depthMask
    GlStateManager.func_179090_x(); // disableTexture2D

    if (phase) {
        GlStateManager.func_179097_i() // disableDepth
    }

    w /= 2;

    Tessellator.begin(GL11.GL_QUADS, false);
    Tessellator.colorize(red, green, blue, alpha);

    Tessellator.translate(x, y, z)
        .pos(w, 0, w)
        .pos(w, 0, -w)
        .pos(-w, 0, -w)
        .pos(-w, 0, w)

        .pos(w, h, w)
        .pos(w, h, -w)
        .pos(-w, h, -w)
        .pos(-w, h, w)

        .pos(-w, h, w)
        .pos(-w, h, -w)
        .pos(-w, 0, -w)
        .pos(-w, 0, w)

        .pos(w, h, w)
        .pos(w, h, -w)
        .pos(w, 0, -w)
        .pos(w, 0, w)

        .pos(w, h, -w)
        .pos(-w, h, -w)
        .pos(-w, 0, -w)
        .pos(w, 0, -w)

        .pos(-w, h, w)
        .pos(w, h, w)
        .pos(w, 0, w)
        .pos(-w, 0, w)
        .draw();

    GlStateManager.func_179089_o(); // enableCull
    GlStateManager.func_179084_k(); // disableBlend
    GlStateManager.func_179132_a(true); // depthMask
    GlStateManager.func_179098_w(); // enableTexture2D
    if (phase) {
        GlStateManager.func_179126_j(); // enableDepth
    }
            
    Tessellator.popMatrix();
};

const drawBoxAtBlock = (x, y, z, colorR, colorG, colorB) => {

    GL11.glBlendFunc(770, 771);
    GL11.glEnable(GL11.GL_BLEND);
    GL11.glLineWidth(3);
    GL11.glDisable(GL11.GL_TEXTURE_2D);
    GL11.glDisable(GL11.GL_DEPTH_TEST);
    GL11.glDepthMask(false);
    GlStateManager.func_179094_E();


    Tessellator.begin(3).colorize(colorR, colorG, colorB);

    Tessellator.pos(x + 1, y + 1, z + 1).tex(0, 0);
    Tessellator.pos(x + 1, y + 1, z).tex(0, 0);
    Tessellator.pos(x, y + 1, z).tex(0, 0);
    Tessellator.pos(x, y + 1, z + 1).tex(0, 0);
    Tessellator.pos(x + 1, y + 1, z + 1).tex(0, 0);
    Tessellator.pos(x + 1, y, z + 1).tex(0, 0);
    Tessellator.pos(x + 1, y, z).tex(0, 0);
    Tessellator.pos(x, y, z).tex(0, 0);
    Tessellator.pos(x, y, z + 1).tex(0, 0);
    Tessellator.pos(x, y, z).tex(0, 0);
    Tessellator.pos(x, y + 1, z).tex(0, 0);
    Tessellator.pos(x, y, z).tex(0, 0);
    Tessellator.pos(x + 1, y, z).tex(0, 0);
    Tessellator.pos(x + 1, y + 1, z).tex(0, 0);
    Tessellator.pos(x + 1, y, z).tex(0, 0);
    Tessellator.pos(x + 1, y, z + 1).tex(0, 0);
    Tessellator.pos(x, y, z + 1).tex(0, 0);
    Tessellator.pos(x, y + 1, z + 1).tex(0, 0);
    Tessellator.pos(x + 1, y + 1, z + 1).tex(0, 0);

    Tessellator.draw();

    GlStateManager.func_179121_F();
    GL11.glEnable(GL11.GL_TEXTURE_2D);
    GL11.glEnable(GL11.GL_DEPTH_TEST);
    GL11.glDepthMask(true);
    GL11.glDisable(GL11.GL_BLEND);
}

const drawBoxAtBlockSmall = (x, y, z, colorR, colorG, colorB) => {

    GL11.glBlendFunc(770, 771);
    GL11.glEnable(GL11.GL_BLEND);
    GL11.glLineWidth(1.5);
    GL11.glDisable(GL11.GL_TEXTURE_2D);
    GL11.glDisable(GL11.GL_DEPTH_TEST); //comment this out for not esp
    GL11.glDepthMask(false); //false for esp / true for not esp
    GlStateManager.func_179094_E();

    y = y + 0.5;
    x = x + 0.5;
    z = z + 0.5;

    Tessellator.begin(3).colorize(colorR, colorG, colorB);

    Tessellator.pos(x + 0.1, y + 0.1, z + 0.1).tex(0, 0);
    Tessellator.pos(x + 0.1, y + 0.1, z).tex(0, 0);
    Tessellator.pos(x, y + 0.1, z).tex(0, 0);
    Tessellator.pos(x, y + 0.1, z + 0.1).tex(0, 0);
    Tessellator.pos(x + 0.1, y + 0.1, z + 0.1).tex(0, 0);
    Tessellator.pos(x + 0.1, y, z + 0.1).tex(0, 0);
    Tessellator.pos(x + 0.1, y, z).tex(0, 0);
    Tessellator.pos(x, y, z).tex(0, 0);
    Tessellator.pos(x, y, z + 0.1).tex(0, 0);
    Tessellator.pos(x, y, z).tex(0, 0);
    Tessellator.pos(x, y + 0.1, z).tex(0, 0);
    Tessellator.pos(x, y, z).tex(0, 0);
    Tessellator.pos(x + 0.1, y, z).tex(0, 0);
    Tessellator.pos(x + 0.1, y + 0.1, z).tex(0, 0);
    Tessellator.pos(x + 0.1, y, z).tex(0, 0);
    Tessellator.pos(x + 0.1, y, z + 0.1).tex(0, 0);
    Tessellator.pos(x, y, z + 0.1).tex(0, 0);
    Tessellator.pos(x, y + 0.1, z + 0.1).tex(0, 0);
    Tessellator.pos(x + 0.1, y + 0.1, z + 0.1).tex(0, 0);

    Tessellator.draw();

    GlStateManager.func_179121_F();
    GL11.glEnable(GL11.GL_TEXTURE_2D);
    GL11.glEnable(GL11.GL_DEPTH_TEST);
    GL11.glDepthMask(true);
    GL11.glDisable(GL11.GL_BLEND);
}

const drawBoxAtEntity = (entity, colorR, colorG, colorB, lineWidth, throughWalls) => {

    let height = entity.getHeight()
    let width = entity.getWidth() / 2

    let x = entity.getRenderX()
    let y = entity.getRenderY()
    let z = entity.getRenderZ()


    if (height == 0) {
        y = entity.getRenderY() - 2.125
        height = 1.975
    }
    if (width == 0) {
        width = 0.3
    }


    GL11.glBlendFunc(770, 771);
    GL11.glEnable(GL11.GL_BLEND);
    if (throughWalls) {
        GL11.glDisable(GL11.GL_DEPTH_TEST);
    }


    GL11.glLineWidth(lineWidth);
    GL11.glDisable(GL11.GL_TEXTURE_2D);
    GlStateManager.func_179094_E();


    Tessellator.begin(3).colorize(colorR, colorG, colorB);

    Tessellator.pos(x + width, y + height, z + width).tex(0, 0);
    Tessellator.pos(x + width, y + height, z - width).tex(0, 0);
    Tessellator.pos(x - width, y + height, z - width).tex(0, 0);
    Tessellator.pos(x - width, y + height, z + width).tex(0, 0);
    Tessellator.pos(x + width, y + height, z + width).tex(0, 0);
    Tessellator.pos(x + width, y, z + width).tex(0, 0);
    Tessellator.pos(x + width, y, z - width).tex(0, 0);
    Tessellator.pos(x - width, y, z - width).tex(0, 0);
    Tessellator.pos(x - width, y, z + width).tex(0, 0);
    Tessellator.pos(x - width, y, z - width).tex(0, 0);
    Tessellator.pos(x - width, y + height, z - width).tex(0, 0);
    Tessellator.pos(x - width, y, z - width).tex(0, 0);
    Tessellator.pos(x + width, y, z - width).tex(0, 0);
    Tessellator.pos(x + width, y + height, z - width).tex(0, 0);
    Tessellator.pos(x + width, y, z - width).tex(0, 0);
    Tessellator.pos(x + width, y, z + width).tex(0, 0);
    Tessellator.pos(x - width, y, z + width).tex(0, 0);
    Tessellator.pos(x - width, y + height, z + width).tex(0, 0);
    Tessellator.pos(x + width, y + height, z + width).tex(0, 0);

    Tessellator.draw();

    GlStateManager.func_179121_F();
    GL11.glEnable(GL11.GL_TEXTURE_2D);
    GL11.glDisable(GL11.GL_BLEND);
    GL11.glEnable(GL11.GL_DEPTH_TEST);
}

export {
    drawName, 
    drawEspBox,
    drawInnerEspBox,
    drawBoxAtBlock,
    drawBoxAtBlockSmall,
    drawBoxAtEntity
}