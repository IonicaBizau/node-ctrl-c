// Dependencies
var Keypress = require("keypress");
Keypress(process.stdin);

/**
 * CtrlC
 * Ignores or not the CTRL + C keypress.
 *
 * @name CtrlC
 * @function
 * @param {Boolean} ign A boolean flag representing if the CTRL + C press should be ignored or not.
 * @return {undefined}
 */
var _ignoreCtrlC = false;
function CtrlC(ign) {
    _ignoreCtrlC = ign;
}

/**
 * onPress
 * A custom handler for CTRL + C press. The default handler
 * will close the process with zero exit code.
 *
 * @name onPress
 * @function
 * @return {undefined}
 */
CtrlC.onPress = function () {
    process.exit(0);
};

// Catch keypress
process.stdin.on("keypress", function (ch, key) {
    if (_ignoreCtrlC) { return; }
    if (key && key.name === "c" && key.ctrl) {
        CtrlC.onPress();
    }
});

module.exports = CtrlC;
