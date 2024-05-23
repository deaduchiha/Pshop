"use client";
import React, { useState } from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Flex,
  AccordionPanel,
  Text,
  InputGroup,
  Select,
  InputRightElement,
  Divider,
  Box,
} from "@chakra-ui/react";
import colors from "@/theme/colors";

const Priceoption = React.memo(function Priceoption(props) {
  const [leastoptionData, setLeastOptionData] = useState();
  const [mostOptionData, setMostOptionData] = useState();
  const [active, setActive] = useState(false);
  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          overflow={"hidden"}
          onClick={() => setActive(!active)}
          pos={"relative"}
          p={"18px 5px"}
        >
          <AccordionIcon />
          <Text fontSize={"15px"} as="span" flex="1" textAlign={"right"}>
            قیمت
          </Text>
          {(leastoptionData || mostOptionData) && (
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
                  setMostOptionData("");
                  setLeastOptionData("");
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
      </h2>
      <AccordionPanel pb={4}>
        <InputGroup alignItems={"center"}>
          <Flex width={"100%"} alignItems={"center"}>
            <Text as={"p"} fontSize={"12px"}>
              حداقل
            </Text>

            <Select
              mr={"8px"}
              placeholder=" مثلا ۱۰۰۰۰"
              borderRadius={"7px"}
              size={"sm"}
              width={"100%"}
              color={
                leastoptionData ? colors.secondary[800] : colors.secondary[600]
              }
              onChange={(e) => setLeastOptionData(e.target.value)}
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
              <option value={100}>۱۰۰ </option>
              <option value={200}>۲۰۰</option>
              <option value={300}>۳۰۰</option>
              <option value={400}>۴۰۰</option>
              <option value={500}>۵۰۰</option>
            </Select>
          </Flex>
        </InputGroup>
        <Divider
          borderColor={colors.secondary[800]}
          height={"20px"}
          w={17}
          orientation="vertical"
        />
        <InputGroup alignItems={"center"}>
          <Flex width={"100%"} alignItems={"center"}>
            <Text as={"p"} fontSize={"12px"}>
              حداکثر
            </Text>
            <Select
              mr={"8px"}
              placeholder=" مثلا ۱۰۰۰۰"
              borderRadius={"7px"}
              size={"sm"}
              onChange={(e) => setMostOptionData(e.target.value)}
              width={"100%"}
              color={
                mostOptionData ? colors.secondary[800] : colors.secondary[600]
              }
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
              <option value="100">۱۰۰ </option>
              <option value="200">۲۰۰</option>
              <option value="300">۳۰۰</option>
              <option value="400">۴۰۰</option>
              <option value="500">۵۰۰</option>
            </Select>
          </Flex>
        </InputGroup>
      </AccordionPanel>
    </AccordionItem>
  );
});

export default Priceoption;
