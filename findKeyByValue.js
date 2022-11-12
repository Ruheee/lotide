const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = (obj, showName) => {
  let keys = Object.keys(bestTVShowsByGenre)
  for (const genre of keys) {
    if (obj[genre] === showName) {
      return genre
    }
  }
}

module.exports = findKeyByValue


