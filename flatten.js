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

const flatten = function (array){

  const output =[]
  for(let i = 0; i < array.length; i++) {
    const currentItem = array[i]
    if(!Array.isArray(currentItem)) {
      output.push(currentItem)
    } 
    
    if (Array.isArray(currentItem)) {
      
      for(let i = 0; i < currentItem.length; i++){
        const innerCurrentItem = currentItem[i]
        output.push(innerCurrentItem)
      }
    }
    return output
  }
}
    
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); 

 /** parameter is an array.
   * [3,4] & [6] array within an array
   * 1,2,5 singular item
   * Empty Array.
   * Loop through array.
   * If singular item not array push to empty array
   * If item is an array, loop through each item push to empty array
   * output = [1,2,3,4,5,6]
  */