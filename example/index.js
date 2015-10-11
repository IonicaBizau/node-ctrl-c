// Dependencies
var CtrlC = require("../lib");

// Output
console.log("CTRL + C is disabled");

// Set up the raw mode
process.stdin.setRawMode(true);
process.stdin.resume();

// Ignore CTRL + C
CtrlC(true);

// Dummy timer
var i = 0;
setInterval(function () {
    if (++i === 10) {
        console.log("Pressing CTRL + C will now close the process.");
        // Enable CTRL + C
        CtrlC(false);
    } else if (i < 10) {
        console.log(10 - i);
    }
}, 500);
