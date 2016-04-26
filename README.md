
# ctrl-c [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/ctrl-c.svg)](https://www.npmjs.com/package/ctrl-c) [![Downloads](https://img.shields.io/npm/dt/ctrl-c.svg)](https://www.npmjs.com/package/ctrl-c) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Ignore or not the CTRL + C keypress in a NodeJS process.

## :cloud: Installation

```sh
$ npm i --save ctrl-c
```


## :clipboard: Example



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

## :memo: Documentation


### `CtrlC(ign)`
Ignores or not the CTRL + C keypress.

#### Params
- **Boolean** `ign`: A boolean flag representing if the CTRL + C press should be ignored or not.

### `onPress()`
A custom handler for CTRL + C press. The default handler
will close the process with zero exit code.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`share-term`](https://github.com/Share-Term/share-term#readme)—Share the terminal with your friends.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
