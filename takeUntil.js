const takeUntil = (array, callback) => {
  let outputArr = [];
  for (const item of array) {
    if (!callback(item)) {
      outputArr.push(item);
    } else {
      return  outputArr;
    } 
    
  }
  return outputArr;
};


module.exports = takeUntil; 