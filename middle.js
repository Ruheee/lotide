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

const middle = function (array) {
  if (!array.length)
    return;

  const mid = array.length / 2;
  if (array.length % 2 === 1) {
    return array[Math.floor(mid)];
  } else {
    return [
      array[mid - 1],
      array[mid],
    ];
  }
}

assertArraysEqual(middle([1, 2, 3, 4]), [1, 2, 3, 4,]) // => [2, 3]
console.log(eqArrays(middle([1, 2]), [1, 2]))
console.log("---------------------------------------")
console.log(middle([1]))
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6]))