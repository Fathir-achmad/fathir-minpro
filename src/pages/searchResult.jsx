import { Box, Flex, Heading } from "@chakra-ui/react";

export const SearchResult = () => {
  return (
    <Box p={"20px"}>
        <Heading textAlign={"center"} pb={"5%"}> From your search : {}</Heading>
      <Box h={"100%"} ml={"15%"}>
        <Flex gap={"10px"} m={"10px"}>
            <Box>
                <Flex gap={"10px"} pb={"20px"}>
          <Box border={"1px"} solid w={"25vw"} h={"45vh"} gap={"2px"}></Box>
          <Box border={"1px"} solid w={"25vw"} h={"45vh"}></Box>
                </Flex>

                <Flex gap={"10px"} pb={"20px"}>
          <Box border={"1px"} solid w={"25vw"} h={"45vh"} gap={"2px"}></Box>
          <Box border={"1px"} solid w={"25vw"} h={"45vh"}></Box>
                </Flex>

                <Flex gap={"10px"} pb={"20px"}>
          <Box border={"1px"} solid w={"25vw"} h={"45vh"} gap={"2px"}></Box>
          <Box border={"1px"} solid w={"25vw"} h={"45vh"}></Box>
                </Flex>
            </Box>
          <Box border={"1px"} solid w={"15vw"} h={"60vh"}></Box>
        </Flex>
      </Box>
    </Box>
  );
};
