import { test, expect } from "vitest";
import { containsDuplicate } from "./containsDuplicate";

test("should return true for an array with duplicates", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test("should return false for an array with no duplicates", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test("should return true for an array with multiple duplicates", () => {
  expect(containsDuplicate([1, 2, 3, 2, 4, 5, 1])).toBe(true);
});

test("should return false for an empty array", () => {
  expect(containsDuplicate([])).toBe(false);
});

test("should return false for an array with one element", () => {
  expect(containsDuplicate([42])).toBe(false);
});

test("should return true for an array where all elements are the same", () => {
  expect(containsDuplicate([42, 42, 42, 42])).toBe(true);
});
