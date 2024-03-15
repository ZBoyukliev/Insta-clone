import { Box, Flex,Text } from "@chakra-ui/react";
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
						creator profile username
						<Text as='span' fontWeight={400}>
							post.caption
						</Text>
					</Text>
						<Text fontSize='sm' color={"gray"} cursor={"pointer"} >
							View all  comments
						</Text>
					{/* COMMENTS MODAL ONLY IN THE HOME PAGE */}
					
				</>

		</Box>
	);
};

export default PostFooter;