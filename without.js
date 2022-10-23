const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Arrays are equal!")
  }else {
    console.log("Arrays are not equal!")
  }
}

const eqArrays = function (arr1, arr2) {
  for(let i  = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const without = function(arr1,arr2) {
  let outputArray = []
  for (let i = 0; i < arr1.length; i++) {
    if( !arr2.includes(arr1[i])) {
      outputArray.push(arr1[i])
    }
  }
  return outputArray
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]