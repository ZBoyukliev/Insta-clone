import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";

type SuggestedUserProps = {
  followers: number;
  name: string;
  avatar: string;
};

const SuggestedUser = ({ followers, name, avatar }: SuggestedUserProps) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowing = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Flex>
        <Avatar src={avatar} name={name} size={"md"} mr={2} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button onClick={handleFollowing} fontSize={13}
					bg={"transparent"}
					p={0}
					h={"max-content"}
					fontWeight={"medium"}
					color={"blue.400"}
					cursor={"pointer"}
					_hover={{ color: "white" }}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
