import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";

const ReactLayout = ({ children }) => {
    return (
        <ChakraProvider >
            
                {children}
            
        </ChakraProvider>
    );
}

export default ReactLayout;
