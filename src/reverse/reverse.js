function reverseMutateArray(arr) {
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

  return arr;
}

console.log(reverseMutateArray([-1, 3, 2, 9]));

export function reverse(arr) {
  let reversedArray = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[arr.length - 1 - i];
    // 1st iteration: reversedArray[0] = arr[3 - 1 - 0];
    // 2nd iteration: reversedArray[1] = arr[3 - 1 - 1];
    // 3rd iteration: reversedArray[2] = arr[3 - 1 - 2];
  }
  return reversedArray;
}

console.log(reverse([3, 2, 9]));

// function reverse(arr) {
//   return [...arr].reverse();
// }

// function reverse(arr) {
//   return arr.reverse();
// }

// console.log(reverse([2, 1, 7]))
