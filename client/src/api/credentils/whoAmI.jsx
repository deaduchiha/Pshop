import api from "@/utils/config";
import { getAccessToken } from "@/cookies/getCookie";

const whoAmI = async () => {
  const accessToken = await getAccessToken();

  try {
    console.log("a");
    const res = await api.get("user/whoami", {
      headers: {
        Authorization: accessToken,
      },
    });
    console.log("b");
    return console.log(res);
  } catch (err) {
    return console.log(err);
  }
};
export default whoAmI;
