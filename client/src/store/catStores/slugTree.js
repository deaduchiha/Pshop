import searchInTree from "@/utils/categoryFuncs/treeFuncs/searchInTree";
import { create } from "zustand";
const initialState = {
  tree: [],
  foundedCat: {
    selectedParent: { name: "", image: "" },
    selectedChild: "",
    selectedLilChild: "",
  },
};
const useSlugtree = create((set) => ({
  ...initialState,
  setTree: (newTree) =>
    set((state) => {
      return { tree: newTree };
    }),
  searchTree: async (tree, slug) => {
    return searchInTree(tree, slug);
  },
}));

export default useSlugtree;
