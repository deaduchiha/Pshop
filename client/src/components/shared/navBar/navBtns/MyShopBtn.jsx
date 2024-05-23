import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function MyShopBtn() {
  return (
    <Box
      cursor={"pointer"}
      opacity={0.7}
      mx={4}
      transition={".5s"}
      borderRadius={"5px"}
      as={Link}
      href={"/myShop"}
      _hover={{
        opacity: "1",
        transition: ".5s",
        backgroundColor: "rgba(230,230,230,1)",
      }}
      p={"12px 25px"}
      alignItems={"center"}
      display="flex"
      width={"fit-content"}
    >
      <Text as={"p"}> فروشگاه من </Text>{" "}
      <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faUser} />
    </Box>
  );
}
