import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';


const Files = ({ formData, setFormData, page, setPage,fichier,setFichier }) => {
    const handleChange = (file) => {
        setFichier(file)
    };
    return (

        <Card w={{ base: "100%", md: "60%" }} align='center'>
            <CardHeader>
                <Heading size='md'>Ajouter un fichier existant pour justifier la facture (optionnel)</Heading>
            </CardHeader>
            <CardBody>
                <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                // types={fileTypes}
                />
                <Box p={5}>
                    {fichier ? `Nom du fichier: ${fichier[0].name}` : "Aucun fichier téléversé"}
                </Box>

            </CardBody>
            <CardFooter>
                <Button
                    mt={4}
                    mr={2}
                    colorScheme='blue'
                    onClick={() => {
                        setPage(page - 1)
                    }}
                >
                    Précédent
                </Button>
                <Button
                    mt={4}
                    colorScheme='blue'
                    isDisabled={false}
                    onClick={() => {
                        setPage(page + 1)
                    }}
                >
                    Suivant
                </Button>
            </CardFooter>
        </Card>

    );
}

export default Files;
