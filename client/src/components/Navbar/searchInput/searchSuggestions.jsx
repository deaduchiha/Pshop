import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import Link from "next/link";
export default function SearchSuggestions({ city }) {
  const suggestedSearchs = [
    {
      name: "خودرو سواری",
      url: `/${city}/car`,
    },
    {
      name: "فروش آپارتمان",
      url: `/${city}/apartments`,
    },
    {
      name: "موبایل",
      url: `/${city}/phones`,
    },
    {
      name: "صندلی و نیمکت",
      url: `/${city}/chairs`,
    },
    {
      name: "حیوانات",
      url: `/${city}/pets`,
    },
    {
      name: "وسایل شخصی",
      url: `/${city}/personal-goods`,
    },
    {
      name: "خدمات",
      url: `/${city}/services`,
    },
  ];

  return (
    <Box dir="rtl" padding={"15px 15px"}>
      <Heading
        as={"h6"}
        color={"rgb(100,100,100)"}
        size={"xs"}
        fontFamily={"iransans"}
        mr={"8px"}
      >
        جست و جو های پیشنهادی
      </Heading>
      <Flex wrap={"wrap"} mt={"10px"}>
        {suggestedSearchs.map((item) => {
          return (
            <Link key={item.name} href={item.url}>
              <Text
                border={"1px solid rgb(140,140,140)"}
                fontSize={"11px"}
                borderRadius={"50px"}
                color={"rgb(130,130,130)"}
                transition={".5s"}
                _hover={{
                  backgroundColor: "rgb(240,240,240)",
                  transition: ".3s",
                  color: "rgb(110,110,110)",
                  borderColor: "rgb(110,110,110)",
                }}
                padding={"8px 14px"}
                margin={"5px 5px"}
              >
                {item.name}
              </Text>
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
}
