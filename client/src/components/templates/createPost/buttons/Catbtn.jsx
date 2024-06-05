import React from "react";
import { Flex, Text, Icon, Box } from "@chakra-ui/react";
import findIcon from "@/utils/categoryFuncs/findIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "@/theme/colors";
import Link from "next/link";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export default function Catbtn({ name, slug, icon = false, leaf }) {
  const myicon = icon && findIcon(icon);
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
      justifyContent={"space-between"}
      as={Link}
      variant={"link"}
      href={!leaf ? `?slug=${slug}` : `createPost/createForm?slug=${slug}`}
      alignItems={"center"}
    >
      <Box>
        {myicon && <FontAwesomeIcon icon={myicon} />}
        <Text display={"inline"} mr={"5px"}>
          {name}
        </Text>
      </Box>
      <ChevronLeftIcon boxSize={"23px"} />
    </Flex>
  );
}
