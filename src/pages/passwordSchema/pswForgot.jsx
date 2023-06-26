import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import  Axios  from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

export const ForgotPsw = () => {
  const navigate = useNavigate()
  const { token } = useParams()
  const toast = useToast()

  const ForgotSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const handleSubmit = async (data) => {
    try {
      data.FE_URL = window.location.origin
      const response = await Axios.put(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/forgotPass",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/login")
      console.log(response.data);
      toast({
        title: "Success",
        description: "Please check your email to verify.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Failed",
        description: "An error to verify your email.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={ForgotSchema}
      onSubmit={(value, action) => {
        console.log(value);
        handleSubmit(value);
      }}
    >
      {({ props }) => {
        return (
          <Box
            as={Form}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgColor={"black"}
          >
            <Box
              p={8}
              maxWidth="500px"
              borderWidth={"20px"}
              borderRadius="md"
              boxShadow="lg"
            >
              <Box>
                <Heading mb={6} textAlign="center" textColor={"white"}>
                  Forgot your password
                </Heading>
                <FormControl>
                  <FormLabel textColor={"white"}>Email Address</FormLabel>
                  <ErrorMessage
                    component="div"
                    name="email"
                    style={{ color: "red" }}
                  />
                  <Input
                    as={Field}
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    mb={4}
                    bgColor={"white"}
                  />
                </FormControl>
              </Box>
              <Button colorScheme="blue" size="lg" width="full" type="submit">
                Verify
              </Button>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};
