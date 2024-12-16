import { describe, test, expect } from "vitest";

const k = (x: any) => () => x;

const output = k(42);
console.log(output());

test('a function "k" which, given some value "x", returns a function which always returns "x"', () => {
  const output = k(42);
  expect(output()).toEqual(42);
});

// function k(x: any) {
//     return function () {
//         return x;
//     }
// }
