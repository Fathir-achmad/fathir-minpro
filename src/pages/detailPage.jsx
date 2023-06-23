import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FavPop } from "../components/favPop";

export const DetailPage = () => {
  const [data, setData] = useState();
  const params = useParams();
  const getDetail = async (data) => {
    try {
      const response = await Axios.get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog/${params.id}`,
        data
      );
      setData(response.data[0]);

    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);
  useEffect(() => {
    getDetail();
  }, []);
  console.log(data);
  return (
    <Box p={"5%"}>
      <Flex justifyContent={"center"} gap={"5%"}>
        <Box>
          <Box
            border={"1px"}
            maxWidth="500px"
            borderWidth={"5px"}
            borderRadius="md"
            boxShadow="lg"
            mb={"2%"}
            textAlign={"center"}
          >
            <Heading>{data?.title}</Heading>
          </Box>
          <Box
            p={"2%"}
            border={"2px"}
            maxWidth="500px"
            borderWidth={"10px"}
            borderRadius="md"
            boxShadow="lg"
          >
            <Image
              src={`https://minpro-blog.purwadhikabootcamp.com/${data?.imageURL}`}
            />
          </Box>
        </Box>
        <Box>
            <FavPop/>
        </Box>
      </Flex>
    </Box>
  );
};
