export function reverse(arr) {
  let reversedArray = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[arr.length - 1 - i]; 
  }
  return reversedArray;
}

// function reverse(arr) {
//   return arr.reverse();
// }