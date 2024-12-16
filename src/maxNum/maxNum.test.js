// Write a function that takes an array of numbers and returns the largest number.
import { describe, it, expect } from "vitest";
import { maxNum } from "./maxNum";

describe("maxNum", () => {
  it("returns the largest number of an array of numbers", () => {
    expect(maxNum([3, 7, -1, 10])).toBe(10);
  });
});
