import React, { useState } from "react";
import {
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Flex,
  Input,
  Select,
  InputGroup,
  Box,
  InputRightElement,
  Text,
  AccordionIcon,
} from "@chakra-ui/react";
import colors from "@/theme/colors";
export default function NumberOption({ data }) {
  const { title, guide, enumm } = data;
  const [optionData, setOptionData] = useState("");
  const [active, setActive] = useState(false);

  const [error, setError] = useState("");
  const chnageHandler = (e) => {
    if (!isNaN(e)) {
      setError("");
      setOptionData(e);
    } else {
      setError("ققط اعداد انگلیسی وارد کنید");
    }
  };

  return (
    <AccordionItem>
      <AccordionButton
        overflow={"hidden"}
        pos={"relative"}
        onClick={() => setActive(!active)}
        p={"18px 5px"}
      >
        <AccordionIcon />
        <Text fontSize={"15px"} as="span">
          {title}
        </Text>
        {optionData && (
          <>
            <Box
              w={"10px"}
              borderRadius={"100%"}
              height={"10px"}
              backgroundColor={"tomato"}
              position={"absolute"}
              transition={".2s"}
              left={"10px"}
              top={"50%"}
              transform={
                active
                  ? "translate(0,-50%) scale(0)"
                  : "translate(0,-50%) scale(1)"
              }
            />
            <Text
              color={"tomato"}
              position={"absolute"}
              fontSize={"11px"}
              transition={".2s"}
              onClick={() => {
                setOptionData("");
              }}
              p={"8px 8px "}
              style={
                active
                  ? { left: "0", transition: ".2s .2s" }
                  : { left: "-50px", transition: ".2s " }
              }
              top={"50%"}
              transform={"translate(0,-50%) "}
            >
              حذف
            </Text>
          </>
        )}
      </AccordionButton>
      <AccordionPanel pb={4}>
        <InputGroup alignItems={"center"}>
          <Flex width={"100%"} alignItems={"center"}>
            <Text as={"p"} fontSize={"12px"}>
              حداقل
            </Text>
            {enumm?.length == 0 && (
              <>
                <Input
                  mr={"8px"}
                  placeholder={guide ? guide : " مثلا ۱۰۰۰۰"}
                  borderRadius={"7px"}
                  size={"sm"}
                  border={
                    error
                      ? "1px solid tomato "
                      : "1px solid " + colors.secondary[600]
                  }
                  width={"100%"}
                  value={optionData}
                  onChange={(e) => chnageHandler(e.target.value)}
                  color={
                    optionData ? colors.secondary[800] : colors.secondary[600]
                  }
                />
                <InputRightElement
                  top={"50%"}
                  left={"10px"}
                  color={colors.secondary[600]}
                  transform={"translate(0,-50%)"}
                  fontSize="sm"
                >
                  تومان
                </InputRightElement>
              </>
            )}
            {enumm?.length > 0 && (
              <>
                <Select
                  mr={"8px"}
                  placeholder=" مثلا ۱۰۰۰۰"
                  borderRadius={"7px"}
                  size={"sm"}
                  width={"100%"}
                  color={
                    optionData ? colors.secondary[800] : colors.secondary[600]
                  }
                  onChange={(e) => setOptionData(e.target.value)}
                  icon={
                    <InputRightElement
                      top={"50%"}
                      left={"10px"}
                      transform={"translate(0,-50%)"}
                      fontSize="sm"
                    >
                      تومان
                    </InputRightElement>
                  }
                >
                  {enumm.map((num) => {
                    return (
                      <option key={num} value={num}>
                        {num}{" "}
                      </option>
                    );
                  })}
                </Select>
              </>
            )}
          </Flex>
        </InputGroup>
        <Text fontSize={"11px"} my={2} color={"tomato"}>
          {" "}
          {error}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
}
