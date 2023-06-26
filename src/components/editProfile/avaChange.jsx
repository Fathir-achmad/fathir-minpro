import React from "react";
import { Avatar, Box, Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

export const ChangeAva = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.value);
  const token = localStorage.getItem("token");

  const handleSubmit = async (values) => {
    try {
      const { file } = values;
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  const ChangeAvaSchema = Yup.object().shape({
    file: Yup.mixed().required("File is required"),
  });

  return (
    <Formik
      initialValues={{
        file: null,
      }}
      validationSchema={ChangeAvaSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, dirty }) => (
        <Form>
          <Box>
            <Flex justifyContent="center" mb="5%">
              <Avatar
                size="2xl"
                src={`https://minpro-blog.purwadhikabootcamp.com/${data?.imgProfile}`}
                alt={data.username}
              />
            </Flex>

            <Box mb="9%">
              <FormLabel textAlign="center">Change avatar</FormLabel>
              <Input
                variant="flushed"
                type="file"
                name="file"
                onChange={(e) => setFieldValue("file", e.target.files[0])}
              />
              <Flex justifyContent="center" mt="5%">
                <Button
                  isDisabled={!dirty}
                  colorScheme="blue"
                  size="xs"
                  width="30%"
                  type="submit"
                >
                  Change it!
                </Button>
              </Flex>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
