function interpreter(code) {
    let done = false;
    let currentPosition = 0;
    let parsedCode = code.replace(/\s/g, "");
    parsedCode = parsedCode.split(",").map((x) => parseInt(x));
    while (!done) {
        let op = parsedCode[currentPosition];

        if (op === 0) {
            done = true;
        } else if (op === 1) {
            currentPosition++;
        } else if (op === 101) {
            parsedCode[parsedCode[currentPosition+3]] = parsedCode[parsedCode[currentPosition+1]] + parsedCode[parsedCode[currentPosition+2]];
            currentPosition += 4;
        } else if (op === 102) {
            parsedCode[parsedCode[currentPosition+3]] = parsedCode[parsedCode[currentPosition+1]] * parsedCode[parsedCode[currentPosition+2]];
            currentPosition += 4;
        } else if (op === 105) {
            parsedCode[parsedCode[currentPosition+1]] = parsedCode[parsedCode[currentPosition+1]]+1;
            currentPosition += 2;
        } else if (op === 103) {
            parsedCode[parsedCode[currentPosition+3]] = parsedCode[parsedCode[currentPosition+1]] - parsedCode[parsedCode[currentPosition+2]];
            currentPosition += 4;
        } else if (op === 104) {
            parsedCode[parsedCode[currentPosition+3]] = parsedCode[parsedCode[currentPosition+1]] / parsedCode[parsedCode[currentPosition+2]];
            currentPosition += 4;
        } else if (op === 106) {
            parsedCode[parsedCode[currentPosition+1]] = parsedCode[parsedCode[currentPosition+1]]-1;
            currentPosition += 2;
        } else if (op === 201) {
            currentPosition = parsedCode[currentPosition+1];
        } else if (op === 202) {
            if (parsedCode[parsedCode[currentPosition+1]] === 0) {
                currentPosition = parsedCode[currentPosition+3];
            } else if (parsedCode[parsedCode[currentPosition + 1]] === 1) {
                currentPosition = parsedCode[currentPosition + 2];
            }
        } else if (op === 301) {
            if (parsedCode[parsedCode[currentPosition+1]] === parsedCode[parsedCode[currentPosition+2]]) {
                parsedCode[parsedCode[currentPosition+3]] = 1;
            } else {
                parsedCode[parsedCode[currentPosition+3]] = 0;
            }

            currentPosition += 4;
        } else if (op === 302) {
            if (parsedCode[parsedCode[currentPosition+1]] > parsedCode[parsedCode[currentPosition+2]]) {
                parsedCode[parsedCode[currentPosition+3]] = 1;
            } else {
                parsedCode[parsedCode[currentPosition+3]] = 0;
            }

            currentPosition += 4;
        } else if (op === 303) {
            if (parsedCode[parsedCode[currentPosition+1]] >= parsedCode[parsedCode[currentPosition+2]]) {
                parsedCode[parsedCode[currentPosition+3]] = 1;
            } else {
                parsedCode[parsedCode[currentPosition+3]] = 0;
            }

            currentPosition += 4;
        } else if (op === 304) {
            if (parsedCode[parsedCode[currentPosition+1]] < parsedCode[parsedCode[currentPosition+2]]) {
                parsedCode[parsedCode[currentPosition+3]] = 1;
            } else {
                parsedCode[parsedCode[currentPosition+3]] = 0;
            }

            currentPosition += 4;
        } else if (op === 305) {
            if (parsedCode[parsedCode[currentPosition+1]] <= parsedCode[parsedCode[currentPosition+2]]) {
                parsedCode[parsedCode[currentPosition+3]] = 1;
            } else {
                parsedCode[parsedCode[currentPosition+3]] = 0;
            }

            currentPosition += 4;
        } else if (op === 306) {
            if (parsedCode[parsedCode[currentPosition+1]] && parsedCode[parsedCode[currentPosition+2]]) {
                parsedCode[parsedCode[currentPosition+3]] = 1;
            } else {
                parsedCode[parsedCode[currentPosition+3]] = 0;
            }

            currentPosition += 4;
        } else if (op === 307) {
            if (parsedCode[parsedCode[currentPosition+1]] && parsedCode[parsedCode[currentPosition+2]]) {
                parsedCode[parsedCode[currentPosition+3]] = 1;
            } else {
                parsedCode[parsedCode[currentPosition+3]] = 0;
            }

            currentPosition += 4;
        } else if (op === 308) {
            if (parsedCode[parsedCode[currentPosition+1]] || parsedCode[parsedCode[currentPosition+2]]) {
                parsedCode[parsedCode[currentPosition+3]] = 1;
            } else {
                parsedCode[parsedCode[currentPosition+3]] = 0;
            }

            currentPosition += 4;
        } else if (op === 308) {
            if (parsedCode[parsedCode[currentPosition+1]] !== parsedCode[parsedCode[currentPosition+2]]) {
                parsedCode[parsedCode[currentPosition+3]] = 1;
            } else {
                parsedCode[parsedCode[currentPosition+3]] = 0;
            }

            currentPosition += 4;
        } else {
            console.log(`ERROR: Instruction at -> ${currentPosition}`);
            return;
        }
    }

    return parsedCode;
}
// start at page 48
console.log(interpreter("308, 5, 6, 7, 0, 1, 0, 0"));