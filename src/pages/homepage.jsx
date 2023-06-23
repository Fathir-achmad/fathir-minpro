import {
  Box,
  Center,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Carousel } from "../components/carousel";
import Axios from "axios";
import { useEffect, useState } from "react";
import { FavPop } from "../components/favPop";

export const HomePage = () => {
  const [blog, setBlog] = useState([]);
  const [fav, setFav] = useState([]);
  const getMost = async () => {
    try {
      const response = await Axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav"
      );
      setFav(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const getBlog = async () => {
    try {
      const response = await Axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/"
      );
      setBlog(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMost();
    getBlog();
  }, []);
  return (
    <Box p={"20px"}>
      <Box>
        <Flex gap={"5%"} justifyContent={"center"}>
          <Box
            h={"70vh"}
            w={"80vw"}
            border={"2px"}
            maxWidth="500px"
            borderWidth={"10px"}
            borderRadius="md"
            boxShadow="lg"
          >
            <Carousel />
          </Box>
          <Box>
            <FavPop />
          </Box>
        </Flex>
      </Box>
      <Box>
        <Center>
          <Box h={"100%"} w={"75%"}>
            <Flex gap={"10px"} m={"10px"}>
              <Box border={"1px"} solid w={"60vw"} h={"70vh"} gap={"2px"}></Box>
              <Box border={"1px"} solid w={"40vw"}></Box>
            </Flex>
            <Flex gap={"10px"} m={"10px"}>
              <Box border={"1px"} solid h={"25vh"} w={"25%"}>
                1{" "}
              </Box>
              <Box border={"1px"} solid h={"25vh"} w={"25%"}>
                2{" "}
              </Box>
              <Box border={"1px"} solid h={"25vh"} w={"25%"}>
                3{" "}
              </Box>
              <Box border={"1px"} solid h={"25vh"} w={"25%"}>
                4{" "}
              </Box>
            </Flex>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};
