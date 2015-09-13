const assert = require('assert');
const getPrototypesOf = require('./');

describe('Object#getPrototypesOf()', function () {

  it('should return an array when target is not an object', function() {
    assert.equal(Array.isArray(getPrototypesOf(null)), true);
    assert.equal(Array.isArray(getPrototypesOf(undefined)), true);
  });

  it('should return an empty array when target is not an object', function() {
    assert.equal(getPrototypesOf(null).length, 0);
    assert.equal(getPrototypesOf(undefined).length, 0);
  });

  it('should return an array when target is an object, from {}', function() {
    assert.equal(getPrototypesOf({}).length, 1);
  });

  it('should return an empty array when target is an object, Object.create(null)', function () {
    assert.equal(getPrototypesOf(Object.create(null)).length, 0);
  });

  it('should return an array and have 3 items when target is an object', function () {
    var a = {};
    var b = {};
    var c = {};
    b.__proto__ = a;
    //Object.setPrototypeOf(b, a);
    Object.setPrototypeOf(c, b);
    assert.equal(getPrototypesOf(c).length, 3);
  });

});
