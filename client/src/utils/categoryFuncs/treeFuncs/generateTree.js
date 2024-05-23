"use client";
const generateTree = (data) => {
  const tree = [];
  data.forEach((parent) => {
    const node = { slug: parent.slug };
    if (parent.children) {
      node.children = generateTree(parent.children); // Recursive call
    }
    tree.push(node);
  });
  return tree;
};

export default generateTree;
