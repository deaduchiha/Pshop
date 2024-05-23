import { create } from "zustand";
const useNavBarSelectedCat = create((set) => ({
  cat: "املاک",
  slug: "real-state",
  image: "https://s100.divarcdn.com/statics/2024/05/real-estate.efdfc654.png",
  changeCat: (newcat) =>
    set((state) => {
      return { slug: newcat.slug, cat: newcat.name, image: newcat.image };
    }),
}));

export default useNavBarSelectedCat;
