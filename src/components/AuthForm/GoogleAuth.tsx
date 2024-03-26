import { Flex, Image, Text } from "@chakra-ui/react";

const GoogleAuth = () => {
    return (
        <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" h={5} alt="Google logo" />
            <Text mx={2} color={"blue.400"}>
              Login with Google
            </Text>
          </Flex>
    );
};

export default GoogleAuth;