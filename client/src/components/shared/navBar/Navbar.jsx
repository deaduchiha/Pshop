"use client";
import { Flex, Box, Divider, Text, Image } from "@chakra-ui/react";
import SearchBar from "@/components/shared/navBar/searchInput/SearchBar";
import Categories from "@/components/shared/navBar/categories/Categories";
import colors from "@/theme/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CreatePostBtn from "./navBtns/CreatePostBtn";
import MyShopBtn from "./navBtns/myShopBtn";

export default function Navbar({ catData }) {
  const city = "تهران";
  const pathname = usePathname();
  return (
    <Flex
      alignItems={"center"}
      backgroundColor={colors.primary[50]}
      justifyContent={"space-between"}
      position={"sticky"}
      fontSize={"15px"}
      boxShadow={"0px 2px 10px 0px rgba(0,0,0,.05)"}
    >
      <Flex alignItems={"center"} mx={"20px"}>
        {!pathname.startsWith("/createPost") && <CreatePostBtn />}
        <MyShopBtn />
      </Flex>
      <Flex
        _groupHover={{ backgroundColor: "red" }}
        pr={2}
        flexBasis={"60%"}
        justifyContent={"end"}
        alignItems={"center"}
        mx={"20px"}
      >
        {!pathname.startsWith("/createPost") &&
          !pathname.startsWith("/myShop") && (
            <>
              <SearchBar city={city} />
              <Categories catData={catData} />
            </>
          )}

        {/* <Box> {city} </Box> */}

        <Divider
          height={"50px"}
          backgroundColor={"black"}
          width={".5px"}
          orientation="vertical"
          my={2.5}
        />
        <Box as={Link} href={"./"}>
          <Image
            borderRadius="0"
            boxSize="60px"
            src={"/logo.png"}
            alt="Dan Abramov"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
