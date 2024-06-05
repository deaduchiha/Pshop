"use server";

import { cookies } from "next/headers";

const { default: api } = require("@/utils/config");

const CheckOtpApi = async (mobile, code) => {
  try {
    const res = await api.post(
      "/auth/check-otp",
      { mobile, code },
      { headers: "application/json" }
    );
    const cookieStore = cookies();
    cookieStore.set("access_token", res.token, {
      // httpOnly: true,
      // secure: "production",
    });
    return res;
  } catch (error) {
    console.log("error checking Otp : ", error);
  }
};

export default CheckOtpApi;
