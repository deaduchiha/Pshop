import { ModalBody, Stack } from "@chakra-ui/react";
import React from "react";
import LoginInput from "./loginFormParts/LoginInput";
import { useState } from "react";
import phoneSchema from "@/utils/loginControl/PhoneSchema";
import SendOtpAPI from "@/api/credentils/SendOtpAPI";
import MyModalFooter from "./loginFormParts/MyModalFooter";
import LogInFormTitle from "./loginFormParts/LogInFormTitle";
import CheckOtpApi from "@/api/credentils/CheckOtpApi";
export default function LoginModalForm() {
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState([]);
  const [secondPage, setSecondPage] = useState(false);
  const [myCode, setMyCode] = useState("");
  const reform = () => {
    setNumber("");
    setErrors([]);
    setSecondPage(false);
  };
  const handleCodeSubmit = () => {
    console.log("mycode : ", myCode);
    const res = CheckOtpApi(number, myCode).then((data) => console.log(data));
  };
  const handlePhoneSubmit = () => {
    try {
      phoneSchema.parse(number);
      setErrors([]);
      SendOtpAPI(number).then((res) => {
        if (res.status == 200) {
          setErrors([]);
          setNumber(res.phone);
          setSecondPage(!secondPage);
        }
        if (res.status !== 200) {
          setErrors(res.message);
        }
      });
    } catch (error) {
      setErrors(error.errors.map((err) => err.message));
    }
  };
  return (
    <>
      <Stack padding={"20px 40px"} gap={"20px"}>
        <LogInFormTitle secondPage={secondPage} phone={number} />
        <LoginInput
          secondPage={secondPage}
          reform={reform}
          phone={number}
          code={myCode}
          codeHandler={setMyCode}
          errors={errors}
          PhoneHandler={setNumber}
        />
      </Stack>

      <ModalBody></ModalBody>
      <MyModalFooter
        handlePhoneSubmit={handlePhoneSubmit}
        handleCodeSubmit={handleCodeSubmit}
        secondPage={secondPage}
      />
    </>
  );
}
