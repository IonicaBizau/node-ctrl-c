// Dependencies
var Keypress = require("keypress");
Keypress(process.stdin);

var _ignoreCtrlC = false;
function CtrlC(ign) {
    _ignoreCtrlC = ign;
}

CtrlC.onPress = function () {
    process.exit(0);
};

process.stdin.on("keypress", function (ch, key) {
    if (_ignoreCtrlC) { return; }
    if (key && key.name === "c" && key.ctrl) {
        CtrlC.onPress();
    }
});

module.exports = CtrlC;
