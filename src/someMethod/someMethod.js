export function someMethod(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return true;
    }
  }
  return false;
}
