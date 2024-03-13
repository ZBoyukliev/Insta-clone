import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PageLayoutProps extends FlexProps {
  children: ReactNode;
}

const PageLayout = ({ children, ...rest }: PageLayoutProps) => {
  return (
    <Flex {...rest}>
      {/* Sidebar */}
      <Box>
        
      </Box>
      {/* Content */}
      <Box>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
