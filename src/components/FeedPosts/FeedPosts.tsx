import { Container } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useEffect, useState } from "react"

const FeedPosts = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  },[])
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
    </Container>
  )
}

export default FeedPosts