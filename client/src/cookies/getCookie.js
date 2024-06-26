"use server";

import { cookies } from "next/headers";

export const getAccessToken = () => {
  return cookies().get("AccessToken")?.value;
};
