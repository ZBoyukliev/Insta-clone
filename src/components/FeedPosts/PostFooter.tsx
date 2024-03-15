import { Box, Button, Flex,Input,InputGroup,InputRightElement,Text } from "@chakra-ui/react";
import { CommentLogo, NotificationsLogo } from "../../assets/constants";


const PostFooter = () => {
	

	return (
		<Box mb={10} marginTop={"auto"}>
			<Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
				<Box cursor={"pointer"} fontSize={18}>
					 <NotificationsLogo /> 
            {/* <UnlikeLogo /> */}
				</Box>

				<Box cursor={"pointer"} fontSize={18} >
					<CommentLogo />
				</Box>
			</Flex>
			<Text fontWeight={600} fontSize={"sm"}>
			 likes
			</Text>

				<Text fontSize='12' color={"gray"}>
					Posted time ago
				</Text>

				<>
					<Text fontSize='sm' fontWeight={700}>
						poster{" "}
						<Text as='span' fontWeight={400}>
							feeling amazing
						</Text>
					</Text>
						<Text fontSize='sm' color={"gray"} cursor={"pointer"} >
							View all 56 comments
						</Text>
					{/* COMMENTS MODAL ONLY IN THE HOME PAGE */}
					
				</>
        <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
					<InputGroup>
						<Input
							variant={"flushed"}
							placeholder={"Add a comment..."}
							fontSize={14}
						/>
						<InputRightElement>
							<Button
								fontSize={14}
								color={"blue.500"}
								fontWeight={600}
								cursor={"pointer"}
								_hover={{ color: "white" }}
								bg={"transparent"}
							>
								Post
							</Button>
						</InputRightElement>
					</InputGroup>
				</Flex>
		</Box>
	);
};

export default PostFooter;