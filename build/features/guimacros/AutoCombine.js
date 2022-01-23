import { macros } from "../../index";

const autoCombine = () => {
    try {
        if (Player.getOpenedInventory() === null)
            return;
        if (Player.getOpenedInventory().getName().includes("Anvil")) {
            if (Player.getOpenedInventory().getStackInSlot(29) === null && Player.getOpenedInventory().getStackInSlot(33) === null) {
                let bookArr = [];
                for (let i = Player.getOpenedInventory().getItems().length - 1; i > Player.getOpenedInventory().getItems().length - Player.getInventory().getItems().length; i--) {
                    let item = Player.getOpenedInventory().getStackInSlot(i);
                    if (item !== null && item.getUnlocalizedName() === "item.enchantedBook") {
                        bookArr.push(i);
                    }
                }
                OuterLoop: for (let i = 0; i < bookArr.length; i++) {
                    for (let j = 0; j < bookArr.length; j++) {
                        if (i === j)
                            continue;
                        if (Player.getOpenedInventory().getStackInSlot(bookArr[i]) === null)
                            continue OuterLoop;
                        if (Player.getOpenedInventory().getStackInSlot(bookArr[j]) === null)
                            continue;
                        if (Player.getOpenedInventory().getStackInSlot(bookArr[i]).getLore()[1] === Player.getOpenedInventory().getStackInSlot(bookArr[j]).getLore()[1] && !Player.getOpenedInventory().getStackInSlot(bookArr[i]).getLore()[1].includes(" V")) {
                            Player.getOpenedInventory().click(bookArr[i], true);
                            Player.getOpenedInventory().click(bookArr[j], true);
                            let k = 0;
                            if (Player.getOpenedInventory().getStackInSlot(22) === null)
                                return;
                            new Thread(() => {
                                while (Player.getOpenedInventory().getStackInSlot(22) !== null && Player.getOpenedInventory().getStackInSlot(22).getLore()[5] !== "§5§o§30 Exp Levels") {
                                    Thread.sleep(50);
                                    k++;
                                    if (k > 100) {
                                        return;
                                    }
                                }
                                Player.getOpenedInventory().click(22);
                                Thread.sleep(300);
                                Player.getOpenedInventory().click(22);
                            }).start();
                        }
                    }
                }
            }
        }
    } catch (e) {  }
}

export { autoCombine };