import {
  Box,
  Flex,
  Avatar,
  Badge,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditProfile } from "../components/editProfile";
import { AiFillMail, AiFillPhone, AiOutlineUser } from "react-icons/ai";
import { MdOutlineDriveFileRenameOutline, MdPassword } from "react-icons/md";
import { ChangePassword } from "../components/passwordProfile";
import { ChangeUsername } from "../components/usernameProfile";
import { ChangePhone } from "../components/phoneProfile";
import { ChangeEmail } from "../components/emailProfile";
import * as Yup from "yup";
import Axios from "axios";
import { Form, Formik } from "formik";

const user = {
  name: "fateer",
  email: "Fateer@mail.com",
  phone: "082210119000",
  avatar: "https://bit.ly/dan-abramov",
};

export const ProfilePage = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.user.value);
  console.log(data);
  const token = localStorage.getItem("token");

  
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleSubmit = async (data) => {
    try {
      const { file } = data;
      const formData = new FormData(); // Dari class bawaan javaScript
      formData.append("file", file); // Menyesuaikan di API
      const response = await Axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
    } catch (error) {}
  };

  const ChangeAvaSchema = Yup.object().shape({
    file: Yup.string().required("File is required"),
  });

  return (
    <Formik
      initialValues={{
        file: "",
      }}
      validationSchema={ChangeAvaSchema}
      onSubmit={(value, action) => {
        console.log(value);
        handleSubmit(value);
      }}
    >
      {({ setFieldValue, dirty }) => {
        return (
          <Box p={8} as={Form} rounded={"lg"} boxShadow={"lg"}>
            <Box>
              <Box textAlign={"center"} mb={"30px"} mt={"30px"}>
                <Heading textAlign={"center"} mb={"20px"}>
                  My Profile
                </Heading>
                <Badge colorScheme="blue">{user.role}</Badge>
              </Box>

              <Flex gap={"10px"} justifyContent={"center"}>
                <Box
                  w={"50%"}
                  h={"50%"}
                  p={8}
                  maxWidth="500px"
                  borderWidth={"20px"}
                  borderRadius="md"
                  boxShadow="lg"
                >
                  <Box>
                    <Flex justifyContent={"center"} mb={"5%"}>
                      <Avatar
                        size="2xl"
                        src={`https://minpro-blog.purwadhikabootcamp.com/${data?.imgProfile}`}
                        alt={data.username}
                      />
                    </Flex>

                    <Box mb={"9%"}>
                      <FormLabel textAlign={"center"}>Change avatar</FormLabel>
                      <Input
                        variant="flushed"
                        type={"file"}
                        name="file"
                        onChange={(e) =>
                          setFieldValue("file", e.target.files[0])
                        } //buat ngambil datanya di input
                        //e nya adalah alias
                      />
                      <Flex justifyContent={"center"} mt={"5%"}>
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

                  <Box>
                    <Tabs align="start" variant="enclosed">
                      <TabList>
                        <Tab>
                          <AiOutlineUser />
                        </Tab>
                        <Tab>
                          <MdPassword />
                        </Tab>
                        <Tab>
                          <MdOutlineDriveFileRenameOutline />
                        </Tab>
                        <Tab>
                          <AiFillPhone />
                        </Tab>
                        <Tab>
                          <AiFillMail />
                        </Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <EditProfile />
                        </TabPanel>
                        <TabPanel>
                          <Box>
                            <ChangePassword />
                          </Box>
                        </TabPanel>

                        <TabPanel>
                          <Box>
                            <ChangeUsername />
                          </Box>
                        </TabPanel>

                        <TabPanel>
                          <Box>
                            <ChangePhone />
                          </Box>
                        </TabPanel>

                        <TabPanel>
                          <Box>
                            <ChangeEmail />
                          </Box>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Box>
                  <Button
                    colorScheme="red"
                    size="xs"
                    width="30%"
                    type="submit"
                    onClick={onLogout}
                    >
                    Log out
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};
