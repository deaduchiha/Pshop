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
    });
  const changeChild = (slug) =>
    (initialD = {
      ...initialD,
      selectedChild: slug,
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
