# ctrl-c [![Support this project][donate-now]][paypal-donations]

Ignore or not the CTRL + C keypress in a NodeJS process.

## Installation

```sh
$ npm i ctrl-c
```

## Example

```js
// Dependencies
var CtrlC = require("ctrl-c");

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
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`share-term`](https://github.com/Share-Term/share-term#readme)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md