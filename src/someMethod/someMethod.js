export function someMethod(arr, fn) {
  for(const element of arr) {
    if (fn(element)) {
      return true;
    }
  }
  return false;
}
