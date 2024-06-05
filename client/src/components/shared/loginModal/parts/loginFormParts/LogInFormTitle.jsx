import colors from "@/theme/colors";
import { Text } from "@chakra-ui/react";
import React from "react";

export default function LogInFormTitle({ phone, secondPage }) {
  return (
    <>
      <Text fontWeight={"500"} as={"h2"}>
        {secondPage
          ? " کد تأیید را وارد کنید"
          : " شمارهٔ موبایل خود را وارد کنید "}
      </Text>
      <Text
        maxW={"70%"}
        color={colors.secondary[800]}
        fontWeight={"400"}
        as={"span"}
        fontSize={"14px"}
      >
        {secondPage
          ? `کد پیامک‌شده به شمارۀ «${phone}» را وارد کنید.`
          : `قبل از ثبت آگهی، لطفاً وارد حساب خود شوید. کد تأیید به این شماره پیامک
        می‌شود.`}
      </Text>
    </>
  );
}
