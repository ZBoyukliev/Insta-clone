import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Tooltip,
	useColorMode,
	useDisclosure,
} from "@chakra-ui/react";
import { SearchLogo } from "../../../assets/constants";
import { BiSearchAlt2 } from "react-icons/bi";
import SuggestedUser from "../../SuggestedUsers/SuggestedUser";
import useSearchUser from "../../../hooks/useSearchUser";
import { useRef } from "react";
import { User } from "../../../store/authStore"; // Import User type

const Search = () => {

	const { colorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const searchRef = useRef<HTMLInputElement>(null);
	const { user, isLoading, getUserProfile, setUser } = useSearchUser();

	const handleSearchUser = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchRef.current) {
			getUserProfile(searchRef.current.value);
		}
	};

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
					onClick={onOpen}
				>
					{colorMode === "light" ? <BiSearchAlt2 size={20} /> : <SearchLogo />}
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>
					
			<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft' >
				<ModalOverlay />
				<ModalContent bg={colorMode === "light" ? "white" : "black"} border={"1px solid gray"} maxW={"400px"}>
					<ModalHeader>Search user</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<form onSubmit={handleSearchUser}>
							<FormControl>
								<FormLabel>Username</FormLabel>
								<Input placeholder='asaprogrammer' ref={searchRef} />
							</FormControl>

							<Flex w={"full"} justifyContent={"flex-end"}>
								<Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isLoading}>
									Search
								</Button>
							</Flex>
						</form>
						{user && <SuggestedUser user={user as User} setUser={setUser} />} {/* Cast user to User type */}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Search;