"use server";
import api from "@/utils/config";
import { cookies } from "next/headers";

const LogOutApi = async () => {
  try {
    const res = await api.get("/auth/logout", { headers: "application/json" });
    // const accesscookie = cookies().delete("access_token");
    // console.log("cookies : ", cookies().getAll());
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
export default LogOutApi;
