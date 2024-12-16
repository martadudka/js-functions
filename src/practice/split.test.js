import { test, expect } from "vitest";

function linesOf(str) {
  return str.split("\n");
}

test("splits a string by lines", () => {
  expect(linesOf("word")).toEqual(["word"]);
  expect(linesOf("first line\nsecond line")).toEqual([
    "first line",
    "second line",
  ]);
});

// console.log("'first line',\\n 'second line'") = new line
//   "ab-cd-ef".split()["ab-cd-ef"] >
//   "ab-cd-ef".split("-")[("ab", "cd", "ef")] >
//   "ab--cd--ef".split("-")[("ab", "", "cd", "", "ef")] >
//   "ab--cd--ef".split("")[("a", "b", "-", "-", "c", "d", "-", "-", "e", "f")];

// [] === []
// const a = []
// const b = []
// a.push(42)
