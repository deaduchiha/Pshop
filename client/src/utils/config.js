import { getAccessToken } from "@/cookies/getCookie";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000/" });

api.interceptors.request.use(async (config) => {
  //   const accessToken = await getAccessToken();

  //   if (accessToken) {
  //     config.headers["Authorization"] = accessToken;
  //   }
  return config;
});

api.interceptors.response.use((response) => response.data);

export default api;
