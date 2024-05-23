import React from "react";
import { Divider, Flex, Skeleton } from "@chakra-ui/react";
import AllCatsBtn from "./CatsBtn/AllCatsBtn";
import CatBtn from "./CatsBtn/CatBtn";
import colors from "@/theme/colors";
import SelectedContent from "./SelectedContent";
import useParentCatStore from "@/store/catStores/getParentsCat";

export default function CategoryMenu() {
  const { cats, isLoading, error } = useParentCatStore((state) => ({
    cats: state.categories,
    isLoading: state.isLoading,
    error: state.error,
  }));

  return (
    <Flex
      p={"40px 30px"}
      width={"auto"}
      minH={"500px"}
      justifyContent={"space-between"}
      dir="rtl"
    >
      <Flex wrap={"nowrap"} flexDir={"column"}>
        <AllCatsBtn />
        {isLoading ? (
          // Display loading indicator while data is being fetched
          <Skeleton width={"fit-content"} />
        ) : cats.length > 0 ? (
          cats.map((cat) => (
            <Skeleton key={cat.slug} width={"fit-content"} isLoaded={true}>
              <CatBtn
                key={cat.slug}
                icon={cat.icon}
                slug={cat.slug}
                name={cat.name}
                image={cat.Image}
              />
            </Skeleton>
          ))
        ) : (
          // Display empty state message if no categories found
          <p>No categories found.</p>
        )}
      </Flex>
      <Divider
        orientation="vertical"
        w={"1px"}
        mx={"5px"}
        height={"auto"}
        backgroundColor={colors.secondary[900]}
      />
      <SelectedContent cats={cats} />
    </Flex>
  );
}
