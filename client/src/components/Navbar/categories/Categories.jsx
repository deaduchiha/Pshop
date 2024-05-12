"use client";
import React, { useState } from "react";
import { Box, Flex, Text, Input, InputGroup } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import useCategoriesStore from "@/store/catStores/getAllCatsStore";
import CategoryInsideBox from "./categoryInsideBox";

export default function Categories({ catData }) {
  const setcategories = useCategoriesStore((state) => state.setCategories);
  setcategories(catData);
  
  const [showCats, setShowcats] = useState(true);

  return (
    <InputGroup padding={0} width={"fit-content"} pos={"relative"} mr={5}>
      <Flex
        padding={"12px 20px"}
        borderRadius={"5px"}
        transition={".2s"}
        cursor={"pointer"}
        bgColor={showCats ? "rgb(240,240,240)" : "rgb(255,255,255)"}
        _hover={{ backgroundColor: "rgb(240,240,240)", transition: ".2s" }}
        alignItems={"center"}
        justifyContent={"center"}
        dir="rlt"
      >
        <ChevronDownIcon
          boxSize={5}
          style={
            showCats
              ? { transform: "rotate(180deg)", transition: ".5s" }
              : { transform: "rotate(0deg)", transition: ".5s" }
          }
          mr={"5px"}
        />
        <Text>دسته ها</Text>
        <Input
          pos={"absolute"}
          type="button"
          opacity={0}
          width={"100%"}
          height={"100%"}
          right={0}
          top={0}
          onClick={() => setShowcats(!showCats)}
          onBlur={() => setShowcats(false)}
        />
      </Flex>

      <Box
        opacity={showCats ? "1" : "0"}
        visibility={showCats ? "visible" : "hidden"}
        zIndex={showCats ? "1" : "-10"}
        transition={".5s"}
        pos={"absolute"}
        top={"100%"}
        right={"0px"}
        bgColor={"white"}
      >
        <CategoryInsideBox />
      </Box>
    </InputGroup>
  );
}
