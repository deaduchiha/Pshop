// store/categories.js
import { create } from "zustand";
const initialState = {
  categories: [],
  isLoading: true,
  error: null,
};
const onlyParents = (arr) => {
  const catsWithoutChild = arr.map((obj) => {
    // Destructuring to create a new object without the 'child' property
    const { children , _id , parents , ...rest } = obj;
    return rest;
  });
  return catsWithoutChild;
};

const useParentCatStore = create((set) => ({
  ...initialState,
  setCategories: (newCats) =>
    set((state) => {
      if (newCats && newCats.length > 0) {
        var parents = onlyParents(newCats);

        return { categories: parents, isLoading: false, error: null };
      } else {
        return {
          categories: [],
          isLoading: false,
          error: "No categories found",
        };
      }
    }),
}));

export default useParentCatStore;
