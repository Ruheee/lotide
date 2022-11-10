// const eqArrays = function(arr1, arr2) {
//   for (let i  = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     } else {
//       for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }
// };

const eqArrays = require('../lotide/eqArrays')

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] is equal to [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] is different than [${arr2}]`);
  }
};

module.exports = assertArraysEqual;


