import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import colors from "@/theme/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import findIcon from "@/utils/categoryFuncs/findIcon";
import Link from "next/link";
import useNavBarSelectedCat from "@/store/catStores/NavSelectedCat";
import useSideBarSelectedCat from "@/store/catStores/SideSelectedCat";
import catDataBuilder from "@/utils/categoryFuncs/catDataBuilder";

export default function CatBtn({ icon, name, slug, image }) {
  const { changeSelectedcat } = useNavBarSelectedCat((state) => ({
    changeSelectedcat: state.changeCat,
  }));

  const { changeCat } = useSideBarSelectedCat((state) => ({
    changeCat: state.changeCat,
  }));
  const changeCatdata = catDataBuilder().changeParent(slug, image);

  return (
    <Box
      as={Link}
      varient={"link"}
      margin={"5px"}
      display={"flex"}
      onMouseOver={() => changeSelectedcat({ slug, name, image })}
      onClick={() => changeCat(changeCatdata)}
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
      color={colors.secondary[800]}
      borderRadius={"5px"}
    >
      <Box
        display={"flex"}
        columnGap={"2px"}
        alignItems={"center"}
        width={"120px"}
        mr={"3px"}
        fontSize={"12px"}
      >
        <FontAwesomeIcon icon={findIcon(icon)} />
        <Text> {name} </Text>
      </Box>

      <ChevronLeftIcon boxSize={5} color={colors.secondary[800]} />
    </Box>
  );
}
