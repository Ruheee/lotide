const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require ('./eqObjects');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const without = require('./without');
const assertObjectEqual = require ('./assertObjectEqual');
const countLetts = require('./countLetts');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertObjectEqual,
  assertEqual,
  countOnly,
  countLetts,
  eqArrays,
  eqObjects,
  takeUntil,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  without,
};

