import { create } from "zustand";
const initialState = {
  selectedParent: { slug: "All", image: "" },
  selectedChild: "",
  selectedLilChild: "",
};
const useSideBarSelectedCat = create((set) => ({
  data: { ...initialState },
  changeCat: (newData) =>
    set((state) => {

      return { ...state, data: newData };
    }),
}));

export default useSideBarSelectedCat;
