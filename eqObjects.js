
// input the actual, and expected is what i expect the answer to be
const assertEqual  = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:, ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed:, ${actual} !== ${expected}`);
  }
};

// compare arrays
const eqArrays = function (arr1, arr2) {
  for(let i  = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}


const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);// puts the keys into an array
  let key2 = Object.keys(object2);
  if(key1.length !== key2.length) { //compares the length of the arrays. When something doenst equal, return false
    return false;
  } 
  for(const key of key1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])){

      return eqArrays(object1[key], object2[key])
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc),true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false