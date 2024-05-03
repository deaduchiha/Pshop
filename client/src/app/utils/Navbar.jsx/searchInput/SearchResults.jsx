import React from "react";
import { Box, Text, Heading, Divider, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const SearchResults = ({ value }) => {
  return (
    <Box dir="rtl" padding={"15px 15px"}>
      <Flex alignItems={"center"} m={2}>
        <SearchIcon />
        <Heading
          as={"h6"}
          color={"rgb(100,100,100)"}
          size={"xs"}
          fontFamily={"iransans"}
          mr={"8px"}
        >
          جست و جو برای "{value}"
        </Heading>
      </Flex>
      <Divider
        my={4}
        height={"1px"}
        color={"rgba(150,150,150,1)"}
        bgColor={"rgba(150,150,150,1)"}
      />
      {/* <Flex wrap={"wrap"} mt={"10px"}>
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
      </Flex> */}
    </Box>
  );
};
export default SearchResults;
