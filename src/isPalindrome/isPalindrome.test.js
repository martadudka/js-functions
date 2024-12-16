import { describe, it, expect } from "vitest";

function isPalindrome(str) {
  if (str.length === 0) {
    return true;
  }

  for (let i = 0; i < str.length / 2; i++) {    
    if (str[i] !== str[str.length - 1 - i]) {                  
      return false;
    }
  }
  return true;
}

describe("isPalindrome", () => {
  it("returns true if the string is palindrome or false if it is not", () => {
    expect(isPalindrome("aba")).toBe(true);
  });

  it("returns true if the string is palindrome or false if it is not", () => {
    expect(isPalindrome("abc")).toBe(false);
  });

  it("returns true if the string is palindrome or false if it is not", () => {
    expect(isPalindrome("1221")).toBe(true);
  });

  it("returns true if the string is palindrome or false if it is not", () => {
    expect(isPalindrome("1223")).toBe(false);
  });

  it("returns true if the string is empty", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("returns true if the string is palindrome or false if it is not", () => {
    expect(isPalindrome("-121")).toBe(false);
  });
});
