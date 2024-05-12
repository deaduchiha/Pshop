"use client";
import React from "react";
import { Divider, Flex, Skeleton } from "@chakra-ui/react";
import AllCatsBtn from "./CatsBtn/AllCatsBtn";
import CatBtn from "./CatsBtn/catBtn";
import colors from "../../../constants/colors";
import SelectedContent from "./SelectedContent";
import useCategoriesStore from "@/store/catStores/getAllCatsStore";

export default function CategoryInsideBox() {
  const { cats, isLoading, error } = useCategoriesStore((state) => ({
    cats: state.categories,
    isLoading: state.isLoading,
    error: state.error,
  }));
  console.log("ehooo : ", isLoading, cats);

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
        {cats.slug
          ? cats.map((cat) => {
              return (
                <Skeleton width={"fit-content"} isLoaded={!isLoading}>
                  <CatBtn
                    key={cat.slug}
                    icon={cat.icon}
                    slug={cat.slug}
                    name={cat.name}
                  />
                </Skeleton>
              );
            })
          : null}{" "}
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
