import api from "@/utils/config";

const getOptionBySlug = async (slug) => {
  try {
    const data = await api.get(`option/by-category-slug/${slug}`);
    return data;
  } catch (error) {
    return error;
  }
};
export default getOptionBySlug;
