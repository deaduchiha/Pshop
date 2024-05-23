"use client";
import { Box, Flex, Skeleton, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useChildCatStore from "@/store/catStores/getChildCat";
import useNavBarSelectedCat from "@/store/catStores/NavSelectedCat";
import colors from "@/theme/colors";
import catDataBuilder from "@/utils/categoryFuncs/catDataBuilder";
import Link from "next/link";
import useSideBarSelectedCat from "@/store/catStores/SideSelectedCat";
export default function SelectedContent() {
  const { selectedSlug, selectedCat, selectedImage } = useNavBarSelectedCat((state) => ({
    selectedCat: state.cat,
    selectedSlug: state.slug,
    selectedImage: state.image,
  }));
  const { cats, isLoading, error } = useChildCatStore((state) => ({
    cats: state.categories,
    isLoading: state.isLoading,
    error: state.error,
  }));
  const { createSelectedCat } = catDataBuilder();
  const { changeCat } = useSideBarSelectedCat();
  const handleClick = (child, lilchild) => {
    const data = createSelectedCat(selectedSlug, child, lilchild);
    changeCat(data);
  };

  const [pageData, setPageData] = useState([]);
  const [ImageLoaded, setImageisLoaded] = useState(false);

  useEffect(() => {
    const data = cats.filter((cat) => cat.name == selectedCat);
    if (data && data.length > 0) {
      setPageData(data[0].children);
    }
  }, [isLoading, cats, selectedCat]);

  return (
    <Flex>
      {pageData && (
        <Stack
          width={"fit-content"}
          pos={"relative"}
          w={"500px"}
          flexWrap={"wrap"}
          maxHeight={"400px"}
          m={5}
        >
          {pageData.map((child) => {
            return (
              <Stack key={child.slug} margin={"10px"}>
                <Text
                  variant={"link"}
                  as={Link}
                  href={child.slug}
                  onClick={() => handleClick(child.slug, "")}
                  key={child.slug}
                  _hover={{ color: "black", cursor: "pointer" }}
                  fontWeight={400}
                  fontSize={"13px"}
                >
                  {child.name}
                </Text>
                {child.children.map((lilChild) => {
                  return (
                    <Text
                      variant={"link"}
                      as={Link}
                      href={lilChild.slug}
                      key={lilChild.slug}
                      onClick={() => handleClick(child.slug, lilChild.slug)}
                      _hover={{
                        color: "black",
                        transition: ".2s",
                        cursor: "pointer",
                      }}
                      color={colors.secondary[700]}
                      fontSize={"12px"}
                      transition={".3s"}
                    >
                      {" "}
                      {lilChild.name}{" "}
                    </Text>
                  );
                })}
              </Stack>
            );
          })}
        </Stack>
      )}

      {pageData ? (
        <Flex
          alignItems={"end"}
          justifyContent={"end"}
          minW={"300px"}
          flexDir={"column"}
        >
          <Skeleton isLoaded={ImageLoaded}>
            <Box pos={"relative"} w={300} h={200}>
              <Image
                src={selectedImage}
                onLoad={() => setImageisLoaded(true)}
                fill
                alt={`image for ${cats.name}`}
                priority
              />
            </Box>
          </Skeleton>
        </Flex>
      ) : null}
    </Flex>
  );
}
