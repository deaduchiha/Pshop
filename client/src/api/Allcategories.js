import api from "@/utils/config";

const getAllCategories = async () => {
  const data = await api.get(`/category`);
  return data;
};
export default getAllCategories;


