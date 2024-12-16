export function sumFirstNums(n) {
  if (n < 0) {
    return "It's negative";
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
