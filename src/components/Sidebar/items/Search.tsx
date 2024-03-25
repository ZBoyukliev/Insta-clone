import {
	Box,
	Flex,
	Tooltip,
	useColorMode,
} from "@chakra-ui/react";
import { SearchLogo } from "../../../assets/constants";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
	const { colorMode } = useColorMode();

	return (
		<>
			<Tooltip
				hasArrow
				label={"Search"}
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
					{colorMode === "light" ? <BiSearchAlt2 size={20} /> : <SearchLogo />}
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>
		</>
	);
};

export default Search;