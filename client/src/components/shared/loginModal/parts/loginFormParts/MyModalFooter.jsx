import { Button, ModalFooter } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import colors from "@/theme/colors";
import TimerButton from "./TimerButton";

export default function MyModalFooter({
  handlePhoneSubmit,
  secondPage,
  handleCodeSubmit,
}) {
  return (
    <ModalFooter mt={secondPage ? "30px" : "0px"} padding={"20px"}>
      {secondPage && (
        <TimerButton
          secondPage={secondPage}
          handleCodeSubmit={handleCodeSubmit}
          handlePhoneSubmit={handlePhoneSubmit}
        />
      )}

      <Button
        onClick={() => {
          secondPage ? handleCodeSubmit() : handlePhoneSubmit();
        }}
        padding={"25px 35px"}
        color={"white"}
        fontWeight={"500"}
        transition={"1s"}
        fontSize={"15px"}
        borderRadius={"3px"}
        bgColor={colors.blue[500]}
        margin={"10px"}
        _hover={{
          borderRadius: "27px",
          transition: ".7s",
          backgroundColor: colors.blue[500],
        }}
      >
        {secondPage ? "ورود" : "درخواست کد "}
      </Button>
    </ModalFooter>
  );
}
