const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);// puts the keys into an array
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) { //compares the length of the arrays. When something doenst equal, return false
    return false;
  }
  for (const key of key1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      return eqObjects(object1[key], object2[key]);

    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${(actual)} !== ${inspect(expected)}`);
  }
};








const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ca = { b: "2", a: "3" };

assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,ca);

