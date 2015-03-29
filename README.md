# ctrl-c
Ignore or not the CTRL + C keypress in a NodeJS process.

## Installation

```sh
$ npm install ctrl-c
```

## Example
```js
// Dependencies
var CtrlC = require("../lib");

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
```

## Documentation
### `CtrlC(ign)`
Ignores or not the CTRL + C keypress.

#### Params
- **Boolean** `ign`: A boolean flag representing if the CTRL + C press should be ignored or not.

### `onPress()`
A custom handler for CTRL + C press. The default handler
will close the process with zero exit code.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
