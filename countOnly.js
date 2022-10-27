const assertEqual  = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:, ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed:, ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {} 
  
  for (const item of allItems) {
    console.log(item)
    if (itemsToCount[item]) { 

      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }

    }
  }
  return results

}

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