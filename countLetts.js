const countLetters = (string) => {
  const letters = {};
  for (const character of string) {
    if (letters[character]) {
      letters[character] += 1;
    } else if (character !== " ") {
      letters[character] = 1;
    }
  }

  return letters;
};

module.exports = countLetters;


