import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const ChangeUsername = () => {
  const data = useSelector((state) => state.user.value);
  const token = localStorage.getItem("token");
  console.log(data);

  const navigate = useNavigate();
  const onChangeIt = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleSubmit = async (data) => {
    try {
      data.FE_URL = "http://localhost:3000";
      const response = await Axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changeUsername",
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data);
      console.log(response);
    } catch (error) {}
  };

  const ChangeUserSchema = Yup.object().shape({
    currentUsername: Yup.string().required("Username is required"),

    newUsername: Yup.string().required("Username is required"),
  });
  return (
    <Formik
      initialValues={{
        currentUsername: "",
        newUsername: "",
      }}
      validationSchema={ChangeUserSchema}
      onSubmit={(value, action) => {
        console.log(value);
        handleSubmit(value);
      }}
    >
      {(props) => {
        return (
          <Box as={Form} rounded={"lg"} boxShadow={"lg"} p={8}>
            <Heading textAlign={"center"}>Username</Heading>

            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Current username</FormLabel>
                <ErrorMessage
                  component="div"
                  name="currentUsername"
                  style={{ color: "red" }}
                />
                <Input as={Field} name="currentUsername" />
              </FormControl>

              <FormControl>
                <FormLabel>New username</FormLabel>
                <ErrorMessage
                  component="div"
                  name="newUsername"
                  style={{ color: "red" }}
                />
                <Input as={Field} name="newUsername" />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={onChangeIt}
                  isDisabled={!props.dirty}
                  type={"submit"}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Change it!
                </Button>
              </Stack>
            </Stack>
          </Box>
        );
      }}
    </Formik>
  );
};
