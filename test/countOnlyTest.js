const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly')

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// result 1 value is the return value of countOnly which is currently an empty object

const result1 = countOnly(firstNames, { "Karl": true, "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//What is parameters vs Arguments? 
//Waht is a return value of a function?



assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined)