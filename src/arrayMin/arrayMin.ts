export function arrayMin<T>(
  arr: T[],
  compareFunction?: (current: T, currentMin: T) => number
): T | undefined {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

  let min: T = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (compareFunction ? compareFunction(arr[i], min) < 0 : arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

arrayMin([2, 3, 5]);
arrayMin(["dog", "horse", "ponny"]);
arrayMin([]);

// condition ? expression_if_true : expression_if_false;
// compareFunction = (a, b) => a - b

// let numbers = [2, 3, 5];
// let min = numbers.slice().sort((a, b) => a - b)[0];
