import { describe, it, expect } from "vitest";
import { sumFirstNums } from "./sumFirstNums";


describe("sumFirstNums", () => {
  it("when given a number n returns the sum of the first n numbers", () => {
    expect(sumFirstNums(4)).toBe(10);
  });

  it("returns 1 when given number 1", () => {
    expect(sumFirstNums(1)).toBe(1);
  });

  it("returns 0 when given number 0", () => {
    expect(sumFirstNums(0)).toBe(0);
  });

  it("returns 5050 when given 100", () => {
    expect(sumFirstNums(100)).toBe(5050);
  });

  it("returns a string when n is a negative number", () => {
    expect(sumFirstNums(-1)).toBe("It's negative");
  });
});
