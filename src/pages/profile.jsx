import {
  Box,
  Flex,
  Badge,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProfileDetail } from "../components/editProfile/profileDetail";
import { AiFillMail, AiFillPhone, AiOutlineUser } from "react-icons/ai";
import { MdOutlineDriveFileRenameOutline, MdPassword } from "react-icons/md";
import { ChangePassword } from "../components/editProfile/passwordProfile";
import { ChangeUsername } from "../components/editProfile/usernameProfile";
import { ChangePhone } from "../components/editProfile/phoneProfile";
import { ChangeEmail } from "../components/editProfile/emailProfile";
import * as Yup from "yup";
import Axios from "axios";
import { Form, Formik } from "formik";
import { MyBlog } from "../components/myBlog";
import { ChangeAva } from "../components/editProfile/avaChange";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.user.value);
  console.log(data);
  const token = localStorage.getItem("token");

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Center>
      <Box p={8} rounded={"lg"} boxShadow={"lg"}>
        <Box>
          <Box textAlign={"center"} mb={"30px"} mt={"30px"}>
            <Heading
              textAlign={"center"}
              mb={5}
              borderRadius="full"
              as="h1"
              size="xl"
              color="white"
              bg="blue.700"
              fontWeight="bold"
            >
              My Profile
            </Heading>
            <Badge colorScheme="blue"></Badge>
            <ChangeAva/>
          </Box>
          <Flex>
            <Flex gap={"10px"} justifyContent={"center"}>
              <Box
                w={"100%"}
                h={"100%"}
                p={8}
                maxWidth="500px"
                borderWidth={"10px"}
                borderRadius="md"
                boxShadow={"0px 0px 10px gray"}
                borderColor={"black"}
              >
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
                        <ProfileDetail />
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
          </Flex>
        </Box>
      </Box>
    </Center>
  );
};
