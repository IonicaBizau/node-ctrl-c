// Dependencies
var CtrlC = require("../lib");

// Output
console.log("CTRL + C is disabled");
process.stdin.setRawMode(true);
process.stdin.resume();
CtrlC(true);

var i = 0;
setInterval(function () {
    if (++i === 10) {
        console.log("Pressing CTRL + C will now close the process.");
        CtrlC(false);
    } else {
        console.log(10 - i);
    }
}, 500);
