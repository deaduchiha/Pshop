import api from "@/utils/config";

const getOptionBySlug = async (slug) => {
  try {
    const data = await api.get(`option/by-category-slug/${slug}`);
    console.log("fetched data = " ,  data)
    return data;
  } catch (error) {

    console.log("error : " , error)
    return error
  }
 
};
export default getOptionBySlug;
