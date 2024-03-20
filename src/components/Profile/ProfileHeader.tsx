import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const ProfileHeader = () => {

  const [ isFollowing, setIsFollowing ] = useState(false);

  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
      <AvatarGroup size={{ base: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
        <Avatar src={'/profilepic.png'} />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
					<Text fontSize={{ base: "sm", md: "lg" }}>as_programer</Text>
          {/* <Flex gap={4} alignItems={"center"} justifyContent={"center"}> */}
							<Button
								bg={"white"}
								color={"black"}
								_hover={{ bg: "whiteAlpha.800" }}
								size={{ base: "xs", md: "sm" }}
							>
								Edit Profile
							</Button>
						{/* </Flex> */}
            <Button
								bg={"blue.500"}
								color={"white"}
								_hover={{ bg: "blue.600" }}
								size={{ base: "xs", md: "sm" }}
                onClick={() => setIsFollowing(!isFollowing)}
							>
								{isFollowing ? "Unfollow" : "Follow"}
							</Button>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader;