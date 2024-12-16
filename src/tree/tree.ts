export type NumberBinaryTree =
  | undefined
  | {
      label: number;
      left?: NumberBinaryTree;
      right?: NumberBinaryTree;
    };

export function sumTreeNodes(tree: NumberBinaryTree): number {
  if (tree === undefined) {
    return 0;
  }

  return tree.label + sumTreeNodes(tree.left) + sumTreeNodes(tree.right);
}

// sum of all the labels of the left tree
