import { dungeons } from "../../index";
const EnumFacing = Java.type("net.minecraft.util.EnumFacing");
const BlockPoss = Java.type("net.minecraft.util.BlockPos");
const BlockChest = Java.type("net.minecraft.block.BlockChest");
const BlockLever = Java.type("net.minecraft.block.BlockLever");
const TileEntitySkull = Java.type("net.minecraft.tileentity.TileEntitySkull")
const Vec3 = Java.type("net.minecraft.util.Vec3");
const ArrayLists = Java.type("java.util.ArrayList");

let alreadyClicked = new ArrayLists;
let timeSinceLastEssenceCheck = new Date().getTime();

function setAuraItem() {
    Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
        if (item !== null && item.getName().includes(dungeons.auraHeldItem)) {
            Player.setHeldItemIndex(index);
        }
    })
}

let inDungeon = false;
let inBoss;
let p3Started;

register("chat", () => {
    inBoss = true;
}).setChatCriteria("&r&4[BOSS] Necron&r&c: &r&cFinally, I heard so much about you. The Eye likes you very much.&r");

register("chat", () => {
    p3Started = true;
    // ChatLib.chat(p3Started);
}).setChatCriteria("[BOSS] Necron: I'VE HAD ENOUGH! YOU HUMANS ARE FIGHTING WITHOUT HONOR!").setContains();

register("step", function () {
    Scoreboard.getLines().forEach((x) => {
        let unformatted = ChatLib.removeFormatting(x);
        if (/ ⏣ The Catac.+ombs \(.+\)/.test(unformatted)) {
            inDungeon = true;
        }
    })
}).setFps(2); 

register("worldLoad", function () {
    inDungeon = false;
    inBoss = false;
    p3Started = false;
})




const sercretAura = () => {
    if (inDungeon) {
        if (Client.currentGui.get() !== null) return;
        for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) {
            for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) {
                for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) {
                    let position = new BlockPoss(x, y, z);
                    let block = Client.getMinecraft().field_71441_e.func_180495_p(position).func_177230_c();
                    if (!alreadyClicked.contains(position) && Client.getMinecraft().field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - Client.getMinecraft().field_71439_g.func_70047_e(), position.func_177952_p()) < dungeons.auraReach) {
                        if (block instanceof BlockChest) {
                            for (let i = 0; i < 9; i++) {
                                if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes(String(dungeons.auraHeldItem))) {
                                    let holding = Player.getHeldItemIndex();
                                    setAuraItem();
                                    Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
                                    Player.setHeldItemIndex(holding);
                                    alreadyClicked.add(position);
                                    //return;
                                }
                            }
                        } else if (block instanceof BlockLever) {
                            for (let i = 0; i < 9; i++) {
                                if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes(String(dungeons.auraHeldItem))) {
                                    let holding = Player.getHeldItemIndex();
                                    setAuraItem();
                                    if (inBoss && p3Started) {
                                        Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
                                    } else {
                                        Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
                                        Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
                                    }
                                    Player.setHeldItemIndex(holding);
                                    alreadyClicked.add(position);
                                    //return;
                                }
                            }
                        }
                    }
                }
            }
        }
        World.getWorld().field_147482_g.forEach((entity) => {
            if (entity instanceof TileEntitySkull) {
                let position = new BlockPoss(entity.func_174877_v().func_177958_n(), entity.func_174877_v().func_177956_o(), entity.func_174877_v().func_177952_p());
                if (!alreadyClicked.contains(position) && Client.getMinecraft().field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - Client.getMinecraft().field_71439_g.func_70047_e(), position.func_177952_p()) < dungeons.auraReach) {
                    let property = entity?.func_152108_a()?.getProperties()?.get("textures");
                    if (property && property[0] && property[0].value === "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzRkYjRhZGZhOWJmNDhmZjVkNDE3MDdhZTM0ZWE3OGJkMjM3MTY1OWZjZDhjZDg5MzQ3NDlhZjRjY2U5YiJ9fX0=") {
                        for (let i = 0; i < 9; i++) {
                            if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes(String(dungeons.auraHeldItem))) {
                                let holding = Player.getHeldItemIndex();
                                setAuraItem();
                                Client.getMinecraft().field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), Client.getMinecraft().field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
                                Player.setHeldItemIndex(holding);
                                alreadyClicked.add(position);
                                //return;
                            }
                        }
                    }
                }
            }
        })
    }
}

export { sercretAura };