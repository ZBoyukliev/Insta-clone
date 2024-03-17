import { Avatar, Flex, Link, Text } from "@chakra-ui/react"
import { Link as RoterLink } from "react-router-dom"

const SuggestedHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar name="as Zack" size={"lg"} src={"profilepic.png"} />
                <Text fontSize={12} fontWeight={"bold"}>
                    as_programer
                </Text>
            </Flex>
            <Link
                as={RoterLink}
                to={"/auth"}
                size={"xs"}
                background={"transparent"}
                _hover={{ background: "transparent" }}
                fontSize={14}
                fontWeight={"medium"}
                color={"blue.400"}
                cursor={"pointer"}
            >
                Log out
            </Link>
        </Flex>
    )
}

export default SuggestedHeader