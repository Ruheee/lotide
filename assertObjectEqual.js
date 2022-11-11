const eqObjects = require('./eqObjects')

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${(actual)} !== ${inspect(expected)}`);
  }
};


module.exports = assertObjectsEqual;


