import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

interface PageLayoutProps extends FlexProps {
    children: ReactNode;
}

const PageLayout = ({ children, ...rest }: PageLayoutProps) => {
    const { pathname } = useLocation();

    return (
        <Flex {...rest}>
            {/* Sidebar */}
            {pathname !== '/auth' ? (
                <Box w={{ base: "70px", md: "240px" }}>
                    <Sidebar />
                </Box>
            ) : null}

            {/* Content */}
            <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
                {children}
            </Box>
        </Flex>
    );
};

export default PageLayout;
