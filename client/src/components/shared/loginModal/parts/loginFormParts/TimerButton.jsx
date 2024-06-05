import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import colors from "@/theme/colors";

export default function TimerButton({ secondPage, handlePhoneSubmit }) {
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    let intervalId;
    if (secondPage) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }
    if (!secondPage) {
      setSeconds(15);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [secondPage, seconds]);
  return (
    <Button
      onClick={() => {
        !(seconds > 0) && handlePhoneSubmit();
      }}
      w={"150px"}
      height={"50px"}
      color={colors.blue[500]}
      fontWeight={"500"}
      transition={"1s"}
      fontSize={"15px"}
      cursor={seconds > 0 ? "not-allowed" : "pointer"}
      bgColor={"white"}
      margin={"10px"}
      border={"1px solid " + colors.blue[500]}
      borderRadius={"3px"}
      _hover={{
        borderRadius: "27px",
        transition: ".7s",
      }}
    >
      {seconds > 0 ? "درخواست مجدد " + seconds : " درخواست کد"}
    </Button>
  );
}
