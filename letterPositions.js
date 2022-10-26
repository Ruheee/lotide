/**Create a for loop that itterates through the string
 * 
 */


const letterPositions = function(sentence) {
  const results = {};
  
  // logic to update results here

  // for (const character of sentence) {
  //   // for( let i = 0; i < character.length; i++){
  //   //   if (results[character]) {
  //   //     results[character] += 1;
  //   //   } else if (character !== " ") {
  //   //     results[character] = 1;
  //   //   } else if (character === [i]){
  //   //     results[character] += [i]
  //   //   }
  //   // }
    
  
  // }
  const temp = sentence.split("")
  temp.forEach((char,idx) => {
    if (results[char]) { //results = {"c": [0, 5]}
      results[char].push(idx)
    } else if (char !== " ") {
      results[char] = [idx]
    }
    
  })
  return results;
}
  


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


assertArraysEqual(letterPositions("Coding is kicking my butt").i, [3, 7, 11, 14]);