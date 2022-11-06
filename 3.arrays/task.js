function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  let comparisonArray = [];
  if(arr1.length === arr2.length) {
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] === arr2[i]){
        comparisonArray.push(true);
      } else {
        comparisonArray.push(false);
      }
    }
  } else {
    comparisonArray.push(false);
  }

  result = comparisonArray.every(element => element === true);
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter(number => number % 3 === 0 && number > 0).map(number => number * 10);

  return resultArr; // array
}
