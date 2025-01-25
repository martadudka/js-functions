import { test, expect } from "vitest";
import { everyMethod } from "./everyMethod";

test("returns true when each of the elements meet the conditions", () => {
    const arr = [100, 30, 17, 12];
    const isGreaterThan10 = (number) => number > 10;
    expect(everyMethod(arr, isGreaterThan10)).toEqual(true);
})

test("returns false when any of the elements doesn't meet the conditions", () => {
  const arr = [1, 30, 17, 12];
  const isGreaterThan10 = (number) => number > 10;
  expect(everyMethod(arr, isGreaterThan10)).toEqual(false);
});

test("returns true when the array is empty", () => {
  const arr = [];
  const isGreaterThan10 = (number) => number > 10;
  expect(everyMethod(arr, isGreaterThan10)).toEqual(true);
});
