import { Flex, Skeleton, Image } from "@chakra-ui/react";
import React from "react";

export default function SelectedContent({ cats }) {
  return (
    <Flex>
      <Flex> s2 </Flex>
      <Flex
        alignItems={"end"}
        justifyContent={"end"}
        minW={"300px"}
        flexDir={"column"}
      >
        <Skeleton isLoaded={true}>
          <Image src={cats[0].Image} alt={`image for ${cats.name}`} />
        </Skeleton>
      </Flex>
    </Flex>
  );
}
