import api from "@/utils/config";

const whoAmI = async () => {
  const res = await api.get("/user/whoami", {});

  return res;
};
export default whoAmI;
