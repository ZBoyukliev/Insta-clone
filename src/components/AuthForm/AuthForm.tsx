import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
// import { useNavigate } from "react-router-dom";

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    // const navigate = useNavigate();

    return (
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack>
                    <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram logo"/>
                    <Input placeholder='Email' fontSize={14} type="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                    <Input placeholder='Password' fontSize={14} type="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}/>
                    {!isLogin && <Input placeholder='Confirm password' fontSize={14} type="password" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}/>}
                    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={16}>
                        {isLogin ? "Login" : "Sign up"}
                    </Button>
                    <Flex alignItems={"center"} justifyContent={"center"} my={4} w={"full"}>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                        <Text mx={2} color={"white"}>OR</Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                    </Flex>
                    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                        <Image src="/google.png" h={5} alt="Google logo" />
                        <Text mx={2} color={"blue.400"}>Login with Google</Text>
                    </Flex>
                </VStack>
            </Box>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={"blue.400"} cursor={"pointer"}>
                        {isLogin ? "Sign up" : "Log in"}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm