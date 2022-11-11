const assertObjectsEqual = require('../assertObjectEqual')

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ca = { b: "2", a: "3" };

assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,ca);