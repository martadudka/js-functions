// //Write a function "k" which, given some value "x", returns a function which always returns "x"
import { describe, test, expect } from "vitest";

// function k (x) {
//     return function () {
//         return x;
//     }
// }

const k = (x) => () => x;

test('a function "k" which, given some value "x", returns a function which always returns "x"', () => {
  const output = k(42);
  expect(output()).toEqual(42);
});
