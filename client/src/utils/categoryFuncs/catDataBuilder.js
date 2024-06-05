const initial = {
  selectedParent: { slug: "", image: "" },
  selectedChild: "",
  selectedLilChild: "",
};

const catDataBuilder = (initialD = initial) => {
  const changeParent = (slug, image = "") =>
    (initialD = {
      ...initialD,
      selectedParent: { slug: slug, image: image },
      selectedChild: "All",
    });
  const changeChild = (slug) =>
    (initialD = {
      ...initialD,
      selectedChild: slug,
      selectedLilChild: "All",
    });
  const changeLilChild = (slug) =>
    (initialD = {
      ...initialD,
      selectedLilChild: slug,
    });
  const createSelectedCat = (parent = "", child = "", lilchild = "") => {
    return {
      selectedParent: { slug: parent, image: "" },
      selectedChild: child,
      selectedLilChild: lilchild,
    };
  };

  return { changeParent, changeChild, changeLilChild, createSelectedCat };
};

export default catDataBuilder;
