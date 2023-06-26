import {
  Box,
  Flex,
  Heading,
  Link,
  Icon,
  Input,
  Text,
  Textarea,
  Button,
  Center,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaCopyright,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <Box>
      <Flex className="main-content" h={"100%"} w={"100%"} bgColor={"black"}>
        <Box className="left box" w={"50%"} p={"10px"} color={"white"}>
          <Heading mb={"10px"}>About us</Heading>
          <Box className="content">
            <Text mb={"10%"}>
              Lorem Ipsum: dolor sit amet, consectetur adipisicing elit. Integer
              non magna vitae tellus.
            </Text>
            <Box className="social">
              <Center gap={"60px"}>
                <Link href="https://facebook.com">
                  <Icon as={FaFacebookF} />
                </Link>
                <Link href="https://twitter.com">
                  <Icon as={FaTwitter} />
                </Link>
                <Link href="https://instagram.com">
                  <Icon as={FaInstagram} />
                </Link>
              </Center>
            </Box>
          </Box>
        </Box>

        <Box className="center box" w={"25%"} p={"10px"} color={"white"}>
          <Heading mb={"10px"}>Address</Heading>
          <Box className="content">
            <Box className="place">
              <Icon as={FaHome} />
              <Text className="text">Jakarta, Indonesia</Text>
            </Box>
            <Box className="phone">
              <Icon as={FaPhone} />
              <Text className="text">+62 -765432100</Text>
            </Box>
            <Box className="email">
              <Icon as={FaEnvelope} />
              <Text className="text">Fathir17.fa@gmail.com</Text>
            </Box>
          </Box>
        </Box>

        <Box
          className="right box"
          w={"25%"}
          p={"10px"}
          mx={"auto"}
          color={"white"}
        >
          <Heading mb={"10px"}>Newslater</Heading>
          <Box className="content">
            <form action="#">
              <Box className="email">
                <Text className="text">Email *</Text>
                <Input type="email" required id="emailSubs" />
              </Box>
              <Box className="msg" mb={"10px"}>
                <Text className="text">Message *</Text>
                <Textarea rows="2" cols="25" required />
              </Box>
              <Box className="btn">
                <Button
                  onClick={() => {
                    window.open(
                      `mailto:${document.getElementById("emailSubs")}`
                    );
                  }}
                  colorScheme="blue"
                >
                  Send
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
      <Box className="bottom">
        <Center>
          <Text className="credit">
            Created By{" "}
            <Link href="https://github.com/Fathir-achmad">
              Fathir achmad sabiilah
            </Link>{" "}
            |
          </Text>
          <Icon as={FaCopyright} />
          <Text> 2023 All rights reserved.</Text>
        </Center>
      </Box>
    </Box>
  );
};
