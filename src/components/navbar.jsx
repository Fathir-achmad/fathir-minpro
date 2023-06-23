import React from "react";
import {
  Avatar,
  Flex,
  HStack,
  Text,
  Link,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const token = localStorage.getItem("token");
  const data = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <Box>
      <Flex
        as="nav"
        justify="space-between"
        alignItems={"center"}
        padding="1rem"
        bg="black"
        color="white"
        w={"100%"}
        zIndex={"200"}
      >
        <Flex alignItems="center">
          <Text fontSize="2xl" fontWeight="bold">
            <Link onClick={() => handleClick("/")}>Lo Blog!</Link>
          </Text>
        </Flex>
        <InputGroup size="md" h={"20%"} w={"40%"}>
          <Input pr="4.5rem" placeholder="Do i wanna know?" />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => handleClick("/searchResult")}
            >
              <Search2Icon />
            </Button>
          </InputRightElement>
        </InputGroup>
        {token ? (
          <Box>
            <Box>
              <Link
                onClick={() => handleClick("/profile")}
                mr={4}
                align={"center"}
              >
                <Avatar
                  name="Dan Abrahmov"
                  src={`https://minpro-blog.purwadhikabootcamp.com/${data?.imgProfile}`}
                />
              </Link>
            </Box>
            <Box>
              <Text fontWeight={"bold"}>{data.username}</Text>
            </Box>
          </Box>
        ) : (
          <>
            <HStack mr={4} verticalAlign={"center"}>
              <Link
                onClick={() => handleClick("/register")}
                mr={4}
                align={"center"}
              >
                Sign Up
              </Link>
              <Link
                onClick={() => handleClick("/login")}
                mr={4}
                align={"center"}
              >
                Login
              </Link>
            </HStack>
          </>
        )}
      </Flex>
    </Box>
  );
};
