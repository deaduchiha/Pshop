"use client";
import React, { useState, useEffect } from "react";
import { Stack, Text, useQuery } from "@chakra-ui/react";
import useSideBarSelectedCat from "@/store/catStores/SideSelectedCat";
import colors from "@/theme/colors";
import catDataBuilder from "@/utils/categoryFuncs/catDataBuilder";
import Link from "next/link";
export default function CatChildBtn({ data, parent }) {
  const { name, children, slug } = data;

  const [selected, setselected] = useState(false);

  const { dataa, selectedLilChild, selectedChild, changeCat } =
    useSideBarSelectedCat((state) => ({
      dataa: state.data,
      selectedChild: state.data.selectedChild,
      selectedLilChild: state.data.selectedLilChild,
      changeCat: state.changeCat,
    }));

  useEffect(() => {
    setselected(false);
    if (selectedChild == slug) {
      setselected(true);
    }
  }, [selectedChild, changeCat]);

  const handleClick = (act, child, lilchild = "") => {
    if (act == "child") {
      const builder = catDataBuilder();
      changeCat(builder.createSelectedCat(parent, child));
    }
    if (act == "lilchild") {
      const builder = catDataBuilder();

      changeCat(builder.createSelectedCat(parent, child, lilchild));
    }
  };
  return (
    <>
      {(selectedChild == "All" || selected) && (
        <Text
          cursor={"pointer"}
          color={colors.secondary[800]}
          transition={".5s"}
          _hover={{ color: "black", transition: ".5s" }}
          mr={"30px"}
          variant={"link"}
          onClick={() => handleClick("child", slug)}
          as={Link}
          fontWeight={selected && 600}
          href={`${slug}`}
          fontSize={"13px"}
        >
          {name}
        </Text>
      )}
      {selected && (
        <Stack gap={"0px"} mr={"50px"} justifyContent={"center"}>
          {children.map((child) => {
            return (
              <Text
                key={child.slug}
                _hover={{ transition: ".5s", color: "black" }}
                color={
                  selectedLilChild == child.slug
                    ? colors.blue[500]
                    : colors.secondary[700]
                }
                cursor={"pointer"}
                fontSize={"12px"}
                borderRight={
                  selectedLilChild == child.slug
                    ? "1.5px solid " + colors.blue[500]
                    : "1.5px solid " + colors.secondary[700]
                }
                padding={"10px"}
                variant={"link"}
                as={Link}
                href={`${child.slug}`}
                onClick={() => handleClick("lilchild", slug, child.slug)}
              >
                {child.name}
              </Text>
            );
          })}
        </Stack>
      )}
    </>
  );
}
