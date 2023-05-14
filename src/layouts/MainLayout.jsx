import { Flex, Box, Heading, Spacer, IconButton, useDisclosure, ChakraProvider } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import theme from "../theme/theme";
import { useState } from "react";


function MainLayout({ children,activeLink,user }) {
  const [isSideOpen, setisSideOpen] = useState(true);


  return (
    <ChakraProvider theme={theme}>
      <ThemeEditorProvider>
        <Flex flexDirection="column" h="100vh" bg="gray.200" overflowY='hidden'>
          {/* Navbar */}
          <Navbar user={user} toggleMenu={() => setisSideOpen(!isSideOpen)} />
          <Flex  h="90vh" w="100%" >
            {/* Sidebar */}
            {
              isSideOpen && <Sidebar activeLink={activeLink} />
            }


            {/* Contenu de la page */}
            <Box position="relative" w="100%"  px="4" py="2"  overflowY='auto'>
              {children}
            </Box>
           
          </Flex>

        </Flex>

      </ThemeEditorProvider >
    </ChakraProvider >
  );
}

export default MainLayout;
