/*!
 * object-getprototypesof
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

module.exports = getPrototypesOf;

function getPrototypesOf(obj) {
  var arr = [];
  while((obj !== null && obj !== void 0) && ((obj = Object.getPrototypeOf(obj)) !== null)) {
    arr.push(obj);
  }
  return arr;
}
