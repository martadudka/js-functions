import { test, expect } from "vitest";
import { every } from "./every";

test("returns true when each of the elements meet the conditions", () => {
  const arr: number[] = [100, 30, 17, 12];
  const isGreaterThan10 = (number: number): boolean => number > 10;
  expect(every(arr, isGreaterThan10)).toEqual(true);
});

test("returns false when any of the elements doesn't meet the conditions", () => {
  const arr: number[] = [1, 30, 17, 12];
  const isGreaterThan10 = (number: number): boolean => number > 10;
  expect(every(arr, isGreaterThan10)).toEqual(false);
});

test("returns true when the array is empty", () => {
  const arr: number[] = [];
  const isGreaterThan10 = (number: number): boolean => number > 10;
  expect(every(arr, isGreaterThan10)).toEqual(true);
});
