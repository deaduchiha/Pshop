"use client";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import SearchSuggestions from "./searchSuggestions";
import SearchResults from "./SearchResults";
const SearchBar = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <InputGroup
        pos={"relative"}
        maxWidth={"500px"}
        p={"4px"}
        borderRadius={"4px "}
        display={"flex"}
        mx={"10px"}
        border={"0px solid black"}
        bgColor={isFocused ? "rgba(255,255,255,1)" : "rgba(240,240,240,1)"}
        boxShadow={isFocused ? "0 8px 16px -4px rgba(0, 0, 0, 0.1)" : "none"}
      >
        <InputLeftElement
          color={"grey"}
          transition=".4s"
          position={"relative"}
          justifySelf={"center"}
          _groupHover={{ transition: ".4s", color: "black" }}
          pointerEvents="none"
        >
          <SearchIcon />
        </InputLeftElement>
        <Input
          dir="rtl"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          fontSize={"15px"}
          border={"0px"}
          flexBasis={"auto"}
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
              ? {
                  zIndex: "10",
                  opacity: "1",
                  transition: ".5s",
                  visibility: "visible",
                }
              : {
                  zIndex: "0",
                  visibility: "hidden",
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
            <SearchSuggestions />
          )}
        </Box>
      </InputGroup>
    </>
  );
};
export default SearchBar;
