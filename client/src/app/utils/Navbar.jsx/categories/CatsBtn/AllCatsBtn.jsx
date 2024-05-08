import React, { useState } from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import colors from "../../../../../../constants/colors";
import useSelectedCat from "@/app/store/SelectedCatStore/SelectedCatStore";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function AllCatsBtn() {
  const { cat, changeCat } = useSelectedCat((state) => ({
    cat: state.cat,
    changeCat: state.changeCat,
  }));
  const [hoverd, setHoverd] = useState(false);
  const handlehover = () => {
    changeCat("All");
    setHoverd(true);
  };
  return (
    <Link
      border={`1px solid ${colors.secondary}`}
      margin={"5px"}
      display={"flex"}
      onMouseOver={() => handlehover()}
      onMouseLeave={() => setHoverd(false)}
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
      color={colors.darkenGrey}
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
          color={colors.darkenGrey}
          transition={".5s"}
        />
        <Text> همه دسته ها </Text>{" "}
      </Box>
    </Link>
  );
}
