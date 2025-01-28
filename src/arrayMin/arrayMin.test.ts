import { describe, it, expect } from "vitest";
import { arrayMin } from "./arrayMin";

describe ("arrayMin", () => {
it("returns the lowest element of an array of numbers", () => {
    expect(arrayMin([2, 5, 8])).toBe(2);
});

it("returns the lowest element of an array of numbers", () => {
  expect(arrayMin([-2, 5, 0])).toBe(-2);
});

it("returns undefined if the array is empty", () => {
  expect(arrayMin([])).toBe(undefined);
});

it("returns the minimum string by length", () => {
  expect(arrayMin(["dog", "horse", "pony"])).toBe("dog");
})
});