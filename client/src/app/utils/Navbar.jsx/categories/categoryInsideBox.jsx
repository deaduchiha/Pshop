"use client";
import React from "react";
import { Divider, Flex } from "@chakra-ui/react";
import AllCatsBtn from "./CatsBtn/AllCatsBtn";
import CatBtn from "./CatsBtn/catBtn";
import colors from "../../../../../constants/colors";
import SelectedContent from "./SelectedContent";

export default function CategoryInsideBox({ cats }) {
  console.log("image is ", cats[0].Image);
  return (
    <Flex
      p={"40px 30px"}
      width={"auto"}
      minH={"500px"}
      justifyContent={"space-between"}
      dir="rtl"
    >
      <Flex wrap={"nowrap"} flexDir={"column"}>
        {" "}
        <AllCatsBtn />
        {cats.map((cat) => {
          return (
            <CatBtn
              key={cat.slug}
              icon={cat.icon}
              name={cat.name}
              slug={cat.slug}
            />
          );
        })}{" "}
      </Flex>
      <Divider
        orientation="vertical"
        w={"1px"}
        mx={"5px"}
        height={"auto"}
        backgroundColor={colors.secondary}
      />
      <SelectedContent cats={cats} />
    </Flex>
  );
}
