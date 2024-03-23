import { Box, Flex, Tooltip, useColorMode } from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";

const ColorModeButton = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Tooltip
            hasArrow
            label={colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"}
            placement='right'
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
        >
            <Flex
                as="button"
                onClick={toggleColorMode}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
                // variant={"ghost"}
            >
                {colorMode === "light" ? <BiMoon size={25} /> : <BiSun size={25} />}
                <Box display={{ base: "none", md: "block" }}>Color mode</Box>
            </Flex>
        </Tooltip>
    );
};

export default ColorModeButton;
