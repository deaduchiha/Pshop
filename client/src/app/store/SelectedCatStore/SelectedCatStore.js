import { create } from "zustand";
const useSelectedCat = create((set) => ({
  cat: "",
  changeCat: (newcat) => set((state) => ({ cat: newcat })),
}));

export default useSelectedCat;
