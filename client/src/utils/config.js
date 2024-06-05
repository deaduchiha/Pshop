import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000/" });

// const getCookie = document.cookie;

// console.log(getCookie);

// api.interceptors.request.use(async (config) => {
//   //   config.headers.Authorization = value;
//   return config;
// });

api.interceptors.response.use((response) => response.data);

export default api;
