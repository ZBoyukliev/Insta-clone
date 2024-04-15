import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";

const Comment = ({ comment }: any) => {
	const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);

	if (isLoading) return <CommentSkeleton />;
	return (
		<Flex gap={4}>
			{userProfile && ( 
				<Link to={`/${userProfile.username}`}>
					<Avatar src={userProfile.profilePicURL} size={"sm"} />
				</Link>
			)}
			<Flex direction={"column"}>
				<Flex gap={2} alignItems={"center"}>
					{userProfile && (
						<Link to={`/${userProfile.username}`}>
							<Text fontWeight={"bold"} fontSize={12}>
								{userProfile.username}
							</Text>
						</Link>
					)}
					<Text fontSize={14}>{comment.comment}</Text>
				</Flex>
				<Text fontSize={12} color={"gray"}>
					{timeAgo(comment.createdAt)}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Comment;

const CommentSkeleton = () => {
	return (
		<Flex gap={4} w={"full"} alignItems={"center"}>
			<SkeletonCircle h={10} w='10' />
			<Flex gap={1} flexDir={"column"}>
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={50} />
			</Flex>
		</Flex>
	);
};

// import { Avatar, Flex, Text } from "@chakra-ui/react";

// interface CommentProps {
//     createdAt: string;
//     username: string;
//     profilepic: string;
//     text: string;
//   }

// const Comment = ({ createdAt, username, profilepic, text }: CommentProps) => {
//   return (
//     <Flex gap={4}>
//         <Avatar src={profilepic} name={username} size={"sm"} />
//         <Flex direction={"column"}>
// 				<Flex gap={2} alignItems={"center"}>
// 						<Text fontWeight={"bold"} fontSize={12}>
// 							{username}
// 						</Text>
// 					<Text fontSize={14}>{text}</Text>
// 				</Flex>
// 				<Text fontSize={12} color={"gray"}>
// 					{createdAt}
// 				</Text>
// 			</Flex>
//     </Flex>
//   );
// };

// export default Comment;