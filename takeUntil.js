const eqArrays = function (arr1, arr2) {
  for(let i  = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Arrays are equal!")
  }else {
    console.log("Arrays are not equal!")
  }
}

const takeUntil = function(array, callback) {
  // ..
  let truthyIndex;
  for (let i =0; i < array.length; i++) {
    if (array[i] === ",") {
      truthyIndex = i
    };
    if (array[i] < 0) {
      truthyIndex = i
    };
  }
  let results = array.slice(0, truthyIndex);
  return results;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])
console.log(results1);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(takeUntil(data2,x => x === ','), ["I've", "been", "to", "Hollywood"])
console.log(results2);