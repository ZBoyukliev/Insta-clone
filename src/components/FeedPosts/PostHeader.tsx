import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="/img2.png" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap="2">
          asprogramer
          <Box color={"gray.500"}>• 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          size={"xs"}
          bg={"transparent"}
          fontSize={12}
          color={"blue.400"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
