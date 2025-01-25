import { test, expect } from "vitest";
import { someMethod } from "./someMethod.js";

test("returns true when at least one of the elements in the array meets the condition", () => {
    const arr = [1, 3, 7, 12];
    const isGreaterThan10 = (number) => number > 10;
    expect(someMethod(arr, isGreaterThan10)).toEqual(true);
});

test("returns false when none of the elements in the array meets the condition", () => {
  const arr = [1, 3, 7, -1];
  const isGreaterThan10 = (number) => number > 10;
  expect(someMethod(arr, isGreaterThan10)).toEqual(false);
});