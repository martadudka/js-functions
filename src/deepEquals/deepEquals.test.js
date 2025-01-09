import { test, expect, describe } from "vitest";
import { deepEquals } from "./deepEquals";

describe("primitive values", () => {
  test("returns true when comparing two equal strings", () => {
    expect(deepEquals("abc", "abc")).toEqual(true);
  });

  test("returns false when comparing two different strings", () => {
    expect(deepEquals("abc", "THIS IS A DIFFERENT STRING")).toEqual(false);
  });

  test("returns true when comparing two equal numbers", () => {
    expect(deepEquals(1, 1)).toEqual(true);
  });

  test("returns false when comparing two different numbers", () => {
    expect(deepEquals(1, 2)).toEqual(false);
  });

  test("returns false when comparing values of different types", () => {
    expect(deepEquals("1", 2)).toEqual(false);
  });
});

describe("comparing arrays", () => {
  test("returns true when comparing two equal arrays", () => {
    expect(deepEquals([1, 2, 3], [1, 2, 3])).toEqual(true);
    expect(deepEquals([], [])).toEqual(true);
  });

  test("returns false when comparing two arrays with different values", () => {
    expect(deepEquals([1, 2, 3], [1, 4, 5])).toEqual(false);
  });

  test("returns false when comparing two arrays with different length", () => {
    expect(deepEquals([1, 2, 3], [1, 2])).toEqual(false);
  });

  test("returns true when comparing two equal arrays", () => {
    expect(deepEquals([1, 2, 3], [1, 2, 3])).toEqual(true);
  });
});
