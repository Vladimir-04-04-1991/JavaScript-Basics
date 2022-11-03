// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = 0, avg = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    } else if(arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum +=arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for(let i = 0; i < arrOfArr.length; i++) {
    if(max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let difference;
  let max = 0; 
  let min = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  
  return Math.abs(max - min);
}
