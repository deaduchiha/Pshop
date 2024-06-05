import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import colors from "@/theme/colors";
import Link from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Backbtn({ name, slug }) {
  return (
    <Flex
      minW={"550px"}
      p={"10px 10px"}
      borderBottom={".5px solid " + colors.secondary[700]}
      color={colors.secondary[700]}
      transition={".5s"}
      _hover={{
        borderColor: colors.secondary[900],
        color: colors.secondary[900],
        transition: ".5s",
        paddingLeft: "2px",
      }}
      as={Link}
      variant={"link"}
      href={`?slug=${slug}`}
      alignItems={"center"}
    >
      <ChevronRightIcon boxSize={"23px"} />
      <Text display={"inline"} mr={"15px"}>
        {` بازگشت به  ${" " + name}`}
      </Text>
    </Flex>
  );
}
