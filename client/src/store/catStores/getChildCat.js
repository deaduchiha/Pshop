// store/categories.js
import { create } from "zustand";
const initialState = {
  categories: [],
  isLoading: true,
  error: null,
};
const onlyChildrens = (arr) => {
  const childs = [];
  arr.forEach((parent) => {
    const childsData = {
      name: parent.name,
      children: parent.children.map((child) => ({
        name: child.name,
        slug: child.slug,
        children: child.children.map((lilchild) => ({
          name: lilchild.name,
          slug: lilchild.slug,
        })),
      })),
    };
    childs.push(childsData);
  });

  return childs;
};

const useChildCatStore = create((set) => ({
  ...initialState,
  setCategories: (newCats) =>
    set((state) => {
      if (newCats && newCats.length > 0) {
        var childs = onlyChildrens(newCats);

        return { categories: childs, isLoading: false, error: null };
      } else {
        return {
          categories: [],
          isLoading: false,
          error: "No categories found",
        };
      }
    }),
}));

export default useChildCatStore;
