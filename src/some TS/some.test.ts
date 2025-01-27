import { test, expect } from "vitest";
import { some } from "./some";

test("returns true when at least one of the elements in the array meets the condition", () => {
  const arr: number[] = [1, 3, 7, 12];
  const isGreaterThan10 = (number: number): boolean => number > 10;
  expect(some(arr, isGreaterThan10)).toEqual(true);
});

test("returns false if none of the elements in the array meets the condition", () => {
  const arr: number[] = [1, 3, 7, -1];
  const isGreaterThan10 = (number: number): boolean => number > 10;
  expect(some(arr, isGreaterThan10)).toEqual(false);
});

test("returns false when the array is empty", () => {
  const arr: number[] = [];
  const isGreaterThan10 = (number: number): boolean => number > 10;
  expect(some(arr, isGreaterThan10)).toEqual(false);
});
