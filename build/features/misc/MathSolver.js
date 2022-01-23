function unscramble(word) {
    let i = 0;
    let possibleResults = possibleScrambles.filter((a) => { return a.length === word.length })
    while (i < word.length) {
        let letter = word.substr(i, 1);
        possibleResults = possibleResults.filter((a) => { return a.includes(letter) })
        i++
    }
    return possibleResults
};

const mathReg = /^[0-9()*^+-/]*$/
register("chat", (solve) => {
    solve = solve.replace(/x/gi, "*");
    if (mathReg.test(solve)) {
        ChatLib.say(eval(solve));
    }
}).setChatCriteria("&r&d&lQUICK MATHS! &r&7Solve: &r&e${solve}&r")

register("chat", (solve) => {
    let unscr = unscramble(solve);
    console.log(unscr[0]);
    ChatLib.say("/ac" + unscr[0]);
}).setChatCriteria("&r&d&lSCRAMBLED! &r&7Unscramble: &r&e${solve}&r")