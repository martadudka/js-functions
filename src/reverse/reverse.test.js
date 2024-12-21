import { test, expect, describe } from "vitest";
import { reverse, reverseMutateArray } from "./reverse";

describe("reverseMutateArray", () => {
  test("should reverse the original array", () => {
    const originalArr = [1, 2, 3, 4, 5];
    reverseMutateArray(originalArr);
    expect(originalArr).toEqual([5, 4, 3, 2, 1]);
  });

  test("should reverse the original array", () => {
    const originalArr = [1, 2, 3, 4];
    reverseMutateArray(originalArr);
    expect(originalArr).toEqual([4, 3, 2, 1]);
  });

  // test("should return an empty array when input is empty", () => {
  //   expect(reverseMutateArray([])).toEqual([]);
  // });

  // test("should return the same array if it has only one element", () => {
  //   expect(reverseMutateArray([42])).toEqual([42]);
  // });

  // test("should handle an array with negative numbers", () => {
  //   expect(reverseMutateArray([-1, -2, -3, -4, -5])).toEqual([-5, -4, -3, -2, -1]);
  // });
});

describe("reverse", () => {
  test("should return an array with reversed order", () => {
    expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  test("should return an empty array when input is empty", () => {
    expect(reverse([])).toEqual([]);
  });

  test("should return the same array if it has only one element", () => {
    expect(reverse([42])).toEqual([42]);
  });

  test("should handle an array with negative numbers", () => {
    expect(reverse([-1, -2, -3, -4, -5])).toEqual([-5, -4, -3, -2, -1]);
  });
});
