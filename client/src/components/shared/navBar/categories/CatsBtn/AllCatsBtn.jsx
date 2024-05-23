import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import colors from "@/theme/colors";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import useSideBarSelectedCat from "@/store/catStores/SideSelectedCat";
import catDataBuilder from "@/utils/categoryFuncs/catDataBuilder";
export default function AllCatsBtn() {
  const [hoverd, setHoverd] = useState(false);
  const { changeCat } = useSideBarSelectedCat();
  const allDatas = catDataBuilder().changeParent("All");
  return (
    <Box
      as={Link}
      variant={"link"}
      border={`1px solid ${colors.secondary[700]}`}
      margin={"5px"}
      display={"flex"}
      onMouseOver={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
      onClick={() => changeCat(allDatas)}
      _hover={{
        textDecoration: "none",
        backgroundColor: "#f0f0f0",
        transition: ".5s",
        color: "rgb(50,50,50)",
      }}
      justifyContent={"space-between"}
      transition={".5s"}
      alignItems={"center"}
      dir="rtl"
      href={"/"}
      p={"7px 5px"}
      color={colors.secondary[700]}
      borderRadius={"5px"}
    >
      <Box
        display={"flex"}
        columnGap={"2px"}
        color={"inherit"}
        alignItems={"center"}
        width={"120px"}
        fontSize={"13px"}
      >
        <ArrowForwardIcon
          mr={"3px"}
          style={
            hoverd
              ? {
                  color: "rgb(50,50,50)",
                  transform: "translate(3px,0)",
                  transition: ".5s",
                }
              : { transform: "translate(0,0)", transition: ".5s" }
          }
          boxSize={4}
          color={colors.secondary[700]}
          transition={".5s"}
        />
        <Text> همه دسته ها </Text>{" "}
      </Box>
    </Box>
  );
}
