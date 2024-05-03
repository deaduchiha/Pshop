import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Flex, Box, Divider, Text, Image } from "@chakra-ui/react";
// import Image from "next/image";
import myimage from "../../../../public/logo.png";
import SearchBarr from "./searchInput/SearchBar";
import Categories from "./categories/Categories";
import colors from "../../../../constants/colors";

export default function Navbar() {
  const city = "تهران";

  return (
    <Flex
      alignItems={"center"}
      backgroundColor={colors.primary}
      justifyContent={"space-between"}
      position={"sticky"}
      fontSize={"15px"}
    >
      <Flex alignItems={"center"} mx={"20px"}>
        <Box
          cursor={"pointer"}
          transition={".5s"}
          borderRadius={"5px"}
          _hover={{
            opacity: ".7",
            transition: ".5s",
          }}
          backgroundColor={colors.blue}
          p={"12px 25px"}
          fontFamily={"iransans"}
          color={colors.primary}
          mx={4}
        >
          {" "}
          ثبت اگهی{" "}
        </Box>

        <Box
          cursor={"pointer"}
          opacity={0.7}
          mx={4}
          transition={".5s"}
          borderRadius={"5px"}
          _hover={{
            opacity: "1",
            transition: ".5s",
            backgroundColor: "rgba(230,230,230,1)",
          }}
          p={"12px 25px"}
          alignItems={"center"}
          display="flex"
          width={"fit-content"}
        >
          <Text as={"p"}> دیوار من </Text>{" "}
          <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faUser} />
        </Box>
      </Flex>
      <Flex
        _groupHover={{ backgroundColor: "red" }}
        pr={2}
        flexBasis={"60%"}
        justifyContent={"end"}
        alignItems={"center"}
        mx={"20px"}
      >
        <SearchBarr city={city} />
        <Categories />

        {/* <Box> {city} </Box> */}

        <Divider
          height={"60px"}
          backgroundColor={"black"}
          width={".5px"}
          orientation="vertical"
          m={1}
        />
        <Image
          borderRadius="0"
          boxSize="60px"
          src={"/logo.png"}
          alt="Dan Abramov"
        />
      </Flex>
    </Flex>
  );
}
