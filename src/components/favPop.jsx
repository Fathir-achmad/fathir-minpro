import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FavPop = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState([]);
  const [fav, setFav] = useState([]);

  const getMost = async (data) => {
    try {
      const response = await Axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav",
        data
      );
      setFav(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const getBlog = async (data) => {
    try {
      const response = await Axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/",
        data
      );
      setBlog(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = (id) => {
    navigate(`/detailPage/${id}`);
  };
  useEffect(() => {
    getMost();
    getBlog();
  }, []);
  return (
    <Box
      border={"2px"}
      w={"25vw"}
      maxWidth="500px"
      borderWidth={"5px"}
      borderRadius="md"
      boxShadow="lg"
    >
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>
              {blog?.map((v, i) => {
                return (
                  <Box key={i} onClick={() => handleClick(v.id)}>
                    <Text>{v.content}</Text>
                  </Box>
                );
              })}
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>
              {fav?.map((v, i) => {
                return (
                  <Box key={i} onClick={() => handleClick(v.id)}>
                    <Text>{v.title}</Text>
                  </Box>
                );
              })}
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
