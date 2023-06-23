import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

export const CreateBlog = () => {
  const [category, setCategory] = useState();

  const token = localStorage.getItem("token");
  const CreateSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),

    content: Yup.string().required("Content is required"),

    country: Yup.string().required("Country is required"),

    CategoryId: Yup.string().required("Category is required"),

    url: Yup.string().required("Url is required"),

    keywords: Yup.string().required("Keywords is required"),

    file: Yup.string().required("File is required"),
  });
  const handleSubmit = async (data) => {
    try {
      const { title, content, keywords, CategoryId, file, country, url } = data;
      const formData = new FormData();
      formData.append(
        "data",
        JSON.stringify({ title, content, keywords, CategoryId, country, url })
      );
      formData.append("file", file);
      // console.log([...formData]);
      const response = await Axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          "Content-Type": "multipart/form-data", //buat pas upload bawa gambar
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategory = async (data) => {
    try {
      const response = await Axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory",
        data
      );
      setCategory(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Formik
      initialValues={{
        title: "",
        content: "",
        country: "",
        CategoryId: "",
        url: "",
        keywords: "",
        file: "",
      }}
      validationSchema={CreateSchema}
      onSubmit={(value, actions) => {
        console.log(value);
        handleSubmit(value);
      }}
    >
      {({ setFieldValue, dirty }) => {
        return (
          <Box as={Form}>
            <Box h={"100h"}>
              <Heading textAlign={"center"}>Create Blog</Heading>
              <Flex p={5} gap={"50px"} justifyContent={"center"}>
                <Box
                  w={"50vw"}
                  minH={"50vh"}
                  maxWidth="500px"
                  borderWidth={"10px"}
                  borderRadius="md"
                  boxShadow="lg"
                  borderColor={"blackAlpha.500"}
                  p={"20px"}
                >
                  <Stack spacing={"20px"}>
                    <FormControl>
                      <FormLabel textColor={"black"}>Title</FormLabel>
                      <ErrorMessage
                        component="div"
                        name="title"
                        style={{ color: "red" }}
                      />
                      <Input
                        as={Field}
                        variant="flushed"
                        type="text"
                        name="title"
                        placeholder="Enter your title"
                        mb={4}
                        bgColor={"white"}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel textColor={"black"}>Country</FormLabel>
                      <ErrorMessage
                        component="div"
                        name="country"
                        style={{ color: "red" }}
                      />
                      <Input
                        as={Field}
                        variant="flushed"
                        type="text"
                        name="country"
                        placeholder="Where you from"
                        mb={4}
                        bgColor={"white"}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel textColor={"black"}>CategoryId</FormLabel>
                      <Field
                        as={Select}
                        placeholder="Select Category"
                        name="CategoryId"
                      >
                        {category?.map((v, i) => {
                          return (
                            <option key={i} value={v.id}>
                              {v.name}
                            </option>
                          );
                        })}
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="CategoryId"
                        style={{ color: "red" }}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel textColor={"black"}>Insert url</FormLabel>
                      <ErrorMessage
                        component="div"
                        name="url"
                        style={{ color: "red" }}
                      />
                      <Input
                        as={Field}
                        variant="flushed"
                        type="text"
                        name="url"
                        placeholder="Enter your link/url"
                        mb={4}
                        bgColor={"white"}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel textColor={"black"}>Keywords</FormLabel>
                      <ErrorMessage
                        component="div"
                        name="keywords"
                        style={{ color: "red" }}
                      />
                      <Input
                        as={Field}
                        variant="flushed"
                        type="text"
                        name="keywords"
                        placeholder="Enter your keywords"
                        mb={4}
                        bgColor={"white"}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel textColor={"black"}>Image</FormLabel>
                      <ErrorMessage
                        component="div"
                        name="file"
                        style={{ color: "red" }}
                      />
                      <Input
                        onChange={(e) =>
                          setFieldValue("file", e.target.files[0])
                        }
                        variant="flushed"
                        type="file"
                        name="file"
                        placeholder="Choose file"
                        mb={4}
                        bgColor={"white"}
                      />
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      type="submit"
                      isDisabled={!dirty}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Box>
                <FormControl>
                  <Box
                    p={5}
                    w={"50vw"}
                    h={"50vh"}
                    maxWidth="500px"
                    borderWidth={"10px"}
                    borderRadius="md"
                    boxShadow="lg"
                    borderColor={"blackAlpha.500"}
                  >
                    <FormLabel textColor={"black"}>Text it!</FormLabel>
                    <ErrorMessage
                      component="div"
                      name="content"
                      style={{ color: "red" }}
                    />
                    <Field
                      as={Textarea}
                      name="content"
                      minH={"80%"}
                      mb={"20px"}
                      isInvalid
                      placeholder="Fill the blankspace"
                    />
                  </Box>
                </FormControl>
              </Flex>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};
