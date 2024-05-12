"use client";
import { Box, Flex, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useCategoriesStore from "@/store/catStores/getAllCatsStore";
import useSelectedCat from "@/store/catStores/SelectedCatStore";

// import { findNameInArrayOfObjects } from "@/libs/handyFuncs/arrayFunctions";
export default function SelectedContent() {
  const selectedCat = useSelectedCat((state) => state.cat);
  const { cats, isLoading, error } = useCategoriesStore((state) => ({
    cats: state.categories,
    isLoading: state.isLoading,
    error: state.error,
  }));
  const [pageData, setPageData] = useState([]);
  const [ImageLoaded, setImageisLoaded] = useState(false);

  useEffect(() => {
    const data = cats.filter((cat) => cat.name == selectedCat);
    if (data) {
      setPageData(data[0]);
    }
  }, [isLoading, cats]);

  return (
    <Flex>
      <Flex> s2 </Flex>
      {pageData ? (
        <Flex
          alignItems={"end"}
          justifyContent={"end"}
          minW={"300px"}
          flexDir={"column"}
        >
          <Skeleton isLoaded={ImageLoaded}>
            <Image
              src={pageData.Image ? pageData.Image : "/logo.png"}
              onLoad={() => setImageisLoaded(true)}
              width={300}
              height={200}
              style={{ objectFit: "fill" }}
              alt={`image for ${cats.name}`}
            />
          </Skeleton>
        </Flex>
      ) : null}
    </Flex>
  );
}
