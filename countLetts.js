const assertEqual  = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:, ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed:, ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  /**Create an empty object .
   * for...of loop that loops through the sentance
   * use .length to count the characters
   * an if statement that can count the letters within the sentance
   * add letter count into the object
   * then return my object
   */
  const letters = {};

  for (const character of string) {
    
    if (letters[character]) {
      letters[character] += 1;
    } else if (character !== " ") {
      letters[character] = 1;
    }
    // letters[character] = 1;
  }

  return letters;
};

console.log(countLetters("lighthouse in the house"));

