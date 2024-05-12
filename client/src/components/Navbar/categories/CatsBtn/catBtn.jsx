import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import colors from "../../../../constants/colors";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSelectedCat from "@/store/catStores/SelectedCatStore";
export default function CatBtn({ icon, name, slug }) {
  const { Selectedcat, changeSelectedcat } = useSelectedCat((state) => ({
    Selectedcat: state.cat,
    changeSelectedcat: state.changeCat,
  }));

  const findIcon = (name) => {
    switch (name) {
      case "faHome":
        return faHome;

      default:
        return faHome;
    }
  };

  return (
    <Link
      margin={"5px"}
      display={"flex"}
      onMouseOver={() => changeSelectedcat(name)}
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
      href={`${slug}`}
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
        mr={"3px"}
        fontSize={"13px"}
      >
        <FontAwesomeIcon icon={findIcon(icon)} />
        <Text> {name} </Text>{" "}
      </Box>

      <ChevronLeftIcon boxSize={5} color={colors.darkenGrey} />
    </Link>
  );
}
