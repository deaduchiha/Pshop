const findOptionSlug = (parent, child, lilchild) => {
  if (lilchild !== "All" && lilchild) {
    return lilchild;
  }
  if (child !== "All" && child) {
    return child;
  }
  if (parent !== "All" && parent) {
    return parent;
  } else {
    return "All";
  }
};
export default findOptionSlug;
