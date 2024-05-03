"use client";

import {
  Flex,
  Box,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import SearchSuggestions from "./searchSuggestions";
import SearchResults from "./SearchResults";
const SearchBarr = ({ city }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHover, setIsHoverd] = useState(false);

  return (
    <InputGroup
      pos={"relative"}
      maxWidth={"500px"}
      dir={"rtl"}
      p={"4px"}
      borderRadius={"4px "}
      mx={"10px"}
      border={"0px solid black"}
      bgColor={isFocused ? "rgba(255,255,255,1)" : "rgba(240,240,240,1)"}
      boxShadow={isFocused ? "0 8px 16px -4px rgba(0, 0, 0, 0.1)" : "none"}
    >
      <InputRightElement
        mr={"10px"}
        color={"grey"}
        transition=".4s"
        position={"relative"}
        _groupHover={{ transition: ".4s", color: "black" }}
        pointerEvents="none"
      >
        <SearchIcon />
      </InputRightElement>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        fontSize={"15px"}
        border={"0px"}
        marginRight={"-20px"}
        _focus={{
          boxShadow: "none",
          border: "0px",
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        placeholder="جست و جو"
      />
      <Box
        style={
          isFocused
            ? { zIndex: "10", opacity: "1", transition: ".5s" }
            : {
                zIndex: "10",
                opacity: "0",
                transition: ".5s",
              }
        }
        pos={"absolute"}
        width={"100%"}
        right={0}
        top={"calc(100% - 3px) "}
        py={"3px"}
        bgColor={"inherit"}
        boxShadow={"inherit"}
      >
        <Divider
          height={"1px"}
          color={"rgba(150,150,150,1)"}
          bgColor={"rgba(150,150,150,1)"}
        />
        {value ? (
          <SearchResults value={value} />
        ) : (
          <SearchSuggestions city={city} />
        )}
      </Box>
    </InputGroup>
  );
};
export default SearchBarr;
