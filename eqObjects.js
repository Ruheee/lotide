const eqObjects = (object1, object2) => {
  let key1 = Object.keys(object1);// puts the keys into an array
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) { //compares the length of the arrays. When something doenst equal, return false
    return false;
  } 
  for(const key of key1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if(object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

