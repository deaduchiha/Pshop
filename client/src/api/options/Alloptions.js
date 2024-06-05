import api from "@/utils/config";

const getAlloptions = async () => {
  const data = await api.get(`/option`);
  return data;
};
export default getAlloptions;
