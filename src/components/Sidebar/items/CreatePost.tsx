import { Box, Flex, Tooltip, useColorMode } from "@chakra-ui/react"
import { CreatePostLogo } from "../../../assets/constants"
import { CgAddR } from "react-icons/cg";


const CreatePost = () => {
	
  const { colorMode } = useColorMode();

  return (
    <Tooltip
				hasArrow
				label={"Create"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: colorMode === "light" ? "blackAlpha.400" : "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					bg={colorMode === "light" ? "white" : "black"}
				>
					{colorMode === "light" ? <CgAddR size={26}/> : <CreatePostLogo />}
					<Box display={{ base: "none", md: "block" }}>Create</Box>
				</Flex>
			</Tooltip>
  )
}

export default CreatePost