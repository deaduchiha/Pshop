"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Text, Input, InputGroup } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
export default function Categories() {
  const findIcon = (name) => {};

  const categories = [
    {
      name: "املاک",
      image:
        "https://s100.divarcdn.com/statics/2024/05/home-kitchen.db87dd2e.png",
      subCats: [
        {
          name: "فروش مسکونی",
          url: "buy",
          items: [
            { name: "اپارتمان", url: "apartment" },
            { name: "خانه", url: "home" },
            { name: "زمین", url: "field" },
          ],
        },
        {
          name: "اجاره مسکونی",
          url: "rent",
          items: [
            { name: "اپارتمان", url: "apartment" },
            { name: "خانه", url: "house" },
          ],
        },
        {
          name: "فروش اداری و  تجاری",
          url: "buy",
          items: [
            { name: "دفتر کار،اتاق اداری و مطب", url: "office" },
            { name: "مغازه و غرفه", url: "market" },
            { name: " صتعتی، کشاورزی و تجاری", url: "factory" },
          ],
        },
        {
          name: "اجاره اداری و  تجاری",
          url: "rent",
          items: [
            { name: "دفتر کار،اتاق اداری و مطب", url: "office" },
            { name: "مغازه و غرفه", url: "market" },
            { name: " صتعتی، کشاورزی و تجاری", url: "factory" },
          ],
        },
        {
          name: "اجاره کوتاه مدت",
          url: "book",
          items: [
            { name: "اپارتمان و سوئیت", url: "apartment" },
            { name: " ویلا و باغ", url: "house" },
            { name: " دفتر کاری و فضای اموزشی ", url: "office" },
          ],
        },
        {
          name: "پروزه های ساخت و سازی",
          url: "work-togheter",
          items: [
            { name: "مشارکت", url: "associate" },
            { name: "پیش فروش", url: "presell" },
          ],
        },
      ],
    },
  ];
  const [showCats, setShowcats] = useState(false);
  console.log(showCats);
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
        <ChevronDownIcon />
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
        width={"400px"}
        bgColor={"white"}
        height={"400px"}
      >
        <Flex>
          <Flex></Flex>
        </Flex>
      </Box>
    </InputGroup>
  );
}
