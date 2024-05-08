"use server";
const getAllCategories = async () => {
  const res = await fetch(`http://localhost:3000/category`,);
  const data = await res.json();
  return data;
};
export default getAllCategories;
