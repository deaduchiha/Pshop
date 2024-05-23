import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import Categories from "./categories/Categories";
import Options from "./options/Options";

export default async function Sidebar() {

  return (
    <Stack
      p={"30px 10px"}
      pos={"fixed"}
      right={0}
      zIndex={"-1"}
      w={"270px"}
      scrollBehavior={"inside"}
      bg={"white"}
      borderLeft={"1px solid black"}
      height={"100vh"}
    >
      <Categories />
      <Options />
    </Stack>
  );
}
