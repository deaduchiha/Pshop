// store/categories.js
import { create } from "zustand";
const initialState = {
  categories: [],
  isLoading: true,
  error: null,
};

const useCategoriesStore = create((set) => ({
  ...initialState,
  setCategories: (newCats) =>
    set((state) => {
      if (newCats && newCats.length > 0) {
        return { categories: newCats, isLoading: false, error: null };
      } else {
        return {
          categories: [],
          isLoading: false,
          error: "No categories found",
        };
      }
    }),
}));

export default useCategoriesStore;
