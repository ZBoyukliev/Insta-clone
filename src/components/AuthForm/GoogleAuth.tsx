import { Flex, Image, Text } from "@chakra-ui/react";

interface GoogleAuthProps {
  prefix: string;
}

const GoogleAuth = ({ prefix }: GoogleAuthProps) => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
      <Image src="/google.png" h={5} alt="Google logo" />
      <Text mx={2} color={"blue.400"}>
        {prefix} with Google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
