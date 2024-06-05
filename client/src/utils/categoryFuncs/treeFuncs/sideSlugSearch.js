const sideSlugSearch = (tree, slug) => {
  if (!Array.isArray(tree)) {
    throw new TypeError("Expected an array for 'tree', got " + typeof tree);
  }

  var result = null; // Use a variable to store the result

  tree.some((parent) => {
    // Use `some` to allow early exit
    let data = {
      selectedParent: { name: "", image: "" },
      selectedChild: "",
      selectedLilChild: "",
    };

    data.selectedParent.name = parent.slug; // Assuming you want to store the parent slug here
    if (parent.slug === slug) {
      result = data;

      return true;
    }
    if (parent.children) {
      // Assuming children are stored in an array `children`
      return parent.children.some((child) => {
        data.selectedChild = child.slug;
        if (child.slug === slug) {
          result = data;
          return true;
        }
        if (child.children) {
          // Assuming lilChildren are stored in an array `lilChildren`
          return child.children.some((lilchild) => {
            if (lilchild.slug === slug) {
              data.selectedLilChild = lilchild.slug;
              result = data;
              return true;
            }
            return false;
          });
        }
        return false;
      });
    }
    return false;
  });

  return result; // Return the result
};

export default sideSlugSearch;
