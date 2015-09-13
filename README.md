# object-getprototypesof [![Build Status](https://travis-ci.org/fundon/object-getprototypesof.svg?branch=master)](https://travis-ci.org/fundon/object-getprototypesof)

> Recursive get prototype of object.
> The [Object.getPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)+.


## Install

```
$ npm install --save object-getprototypesof
```


## Usage

```js
const getPrototypesOf = require('object-getprototypesof');

const a = {};
const b = {};
const c = {};

b.__proto__ = a;
Object.setProtoypeOf(c, b);

var arr = getPrototypesOf(c);
// [{}, {}, {}];
```

## License

MIT
