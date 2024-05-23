import React from "react";
import {  Box } from "@chakra-ui/react";
import Link from "next/link";
import colors from "@/theme/colors";
export default function CreatePostBtn() {
  return (
    <>
      <Box
        cursor={"pointer"}
        transition={".5s"}
        borderRadius={"5px"}
        _hover={{
          opacity: ".9",
          transition: ".5s",
        }}
        as={Link}
        href={"/createPost"}
        backgroundColor={colors.blue[500]}
        p={"12px 25px"}
        fontFamily={"iransans"}
        color={colors.primary[50]}
        mx={4}
      >
        {" "}
        ثبت اگهی{" "}
      </Box>
      
    </>
  );
}
