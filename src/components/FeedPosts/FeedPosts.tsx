import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useEffect, useState } from "react"

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  },[])
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
				[0, 1, 2].map((_, idx) => (
					<VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
						<Flex gap='2'>
							<SkeletonCircle size='10' />
							<VStack gap={2} alignItems={"flex-start"}>
								<Skeleton height='10px' w={"200px"} />
								<Skeleton height='10px' w={"200px"} />
							</VStack>
						</Flex>
						<Skeleton w={"full"}>
							<Box h={"400px"}>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))}
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
    </Container>
  )
}

export default FeedPosts