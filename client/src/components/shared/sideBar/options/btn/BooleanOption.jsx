"use client";
import React, { useState } from "react";
import { Flex, Text, Switch } from "@chakra-ui/react";
export default function BooleanOption({ data }) {
  const { title, guide } = data;
  const [optionData, setOptionData] = useState(false);
  return (
    <Flex
      borderTop={"1px solid #e2e8f0"}
      p={"18px 5px"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Text fontSize={"15px"} as="span">
        {" "}
        {title}{" "}
      </Text>
      <Switch onChange={() => setOptionData(!optionData)} />
    </Flex>
  );
}
