import TreeNode from '@/models/TreeNode';

const visit = function(node: TreeNode, fn: Function) {
  if (fn) {
    fn(node);
  }

  if (node.children) {
    for (const child of node.children) {
      visit(child, fn);
    }
  }
};

const recurse = function(tree: TreeNode[], fn: Function) {
  for (const rootNode of tree) {
    visit(rootNode, fn);
  }
};

export { visit, recurse };
