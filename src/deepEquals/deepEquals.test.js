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

  test("returns true when comparing two nested arrays", () => {
    expect(
      deepEquals(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [1, 2],
          [3, 4],
        ]
      )
    ).toEqual(true);
  })

});

describe("comparing objects", () => {
  test("returns true when comparing two equal objects", () => {
    expect(
      deepEquals(
        { drink: "coke", meal: "hamburger" },
        { drink: "coke", meal: "hamburger" }
      )
    ).toEqual(true);
  });

  test("returns false when comparing different objects", () => {
    expect(
      deepEquals(
        { drink: "coffee", meal: "cheesecake" },
        { drink: "coffee", dessert: "cheesecake" }
      )
    ).toEqual(false);
  });

  test("returns false when comparing objects with different keys", () => {
    expect(
      deepEquals(
        { drink: "coke", meal: "hamburger" },
        { drink: "coffee", meal: "cheesecake" }
      )
    ).toEqual(false);
  });

  test("returns true when comparing equal nested objects", () => {
    expect(
      deepEquals(
        {
          drink: "coke",
          meal: { mainCourse: "hamburger", dessert: "cheesecake" },
        },
        {
          drink: "coke",
          meal: { mainCourse: "hamburger", dessert: "cheesecake" },
        }
      )
    ).toEqual(true);
  });

  test("returns false when comparing different nested objects", () => {
    expect(
      deepEquals(
        {
          drink: "coke",
          meal: { mainCourse: "hamburger", dessert: "cheesecake" },
        },
        {
          drink: "coffee",
          meal: { mainCourse: "omelette", dessert: "cheesecake" },
        }
      )
    ).toEqual(false);
  });

});