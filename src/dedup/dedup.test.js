import { describe, it, expect } from "vitest";
import { dedup } from "./dedup";

describe("dedup function", () => {
  it("removes duplicates from an array", () => {
    expect(dedup([1, 2, 2, 3, 4, 3, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns the same array if there are no duplicates", () => {
    expect(dedup([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns an empty array when input is empty", () => {
    expect(dedup([])).toEqual([]);
  });

  it("handles an array with all duplicates", () => {
    expect(dedup([2, 2])).toEqual([2]);
  });
});
