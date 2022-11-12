const findKey = require('../findKey');
const assertEqual = require('../assertEqual')


// TEST ONE
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { moonName: 'Victorio' },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.moonName === 'Victorio');

assertEqual(result1, 'noma');



