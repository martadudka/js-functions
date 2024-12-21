export function reverseMutateArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // for (let left = 0, right = arr.length - 1; left < right; left++, right--)
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

}

export function reverse(arr) {
  let reversedArray = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  
  return reversedArray;
}


// function reverse(arr) {
//   return [...arr].reverse();
// }

// function reverse(arr) {
//   return arr.reverse();
// }

// reverse([2, 1, 7])
