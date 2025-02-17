const arrayMin = (arr, compareFunction) => {
  if(!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (compareFunction ? compareFunction(arr[i], min) < 0 : arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

arrayMin([2, -3, 5]);
arrayMin(["dog", "horse", "pony"]);
arrayMin([]);

// function arrayMin(arr, compareFunction) {
//   if (!arr || arr.length === 0) {
//     return undefined;
//   }

//   let min = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     let a = compareFunction ? compareFunction(arr[i]) : arr[i];
//     let b = compareFunction ? compareFunction(min) : min;

//     if (a < b) {
//       min = arr[i];
//     }
//   }

//   return min;
// }

// arrayMin([2, 3, 5]);
// arrayMin(["dog", "horse", "ponny"]);