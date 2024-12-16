import { describe, it, expect } from "vitest";
import { NumberBinaryTree, sumTreeNodes } from "./tree";

// (in our case we are only considering binary trees)
// an "empty tree" is a tree
// a "node" is a tree
// a node has:
// * a label
// * a left tree
// * a right tree

describe(sumTreeNodes.name, () => {
  it("returns '0' when applied to the empty tree", () => {
    expect(sumTreeNodes(undefined)).toEqual(0);
  });

  it("returns the sum of all the nodes", () => {
    const tree: NumberBinaryTree = {
      label: 42,
      left: {
        label: 100,
        left: {
          label: 37,
        },
      },
      right: {
        label: 20,
      },
    };

    const result = sumTreeNodes(tree);
    expect(result).toEqual(42 + 100 + 37 + 20);
  });
});
