import { Box, Flex, Tooltip, useColorMode } from "@chakra-ui/react";
import { NotificationsLogo } from "../../../assets/constants";
import { BiBell } from "react-icons/bi";
import useAuthStore from "../../../store/authStore";
const Notifications = () => {
	const { colorMode } = useColorMode();
	const authUser = useAuthStore((state: any) => state.user);
	console.log(authUser);

	return (
		<Tooltip
			hasArrow
			label={"Notifications"}
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
				{colorMode === "light" ? <BiBell size={20} /> : <NotificationsLogo />}
				<Box display={{ base: "none", md: "block" }}>Notifications</Box>
			</Flex>
		</Tooltip>
	);
};

export default Notifications;