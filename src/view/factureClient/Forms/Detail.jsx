import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useState } from 'react';


const Detail = ({ formData, setFormData, page, setPage}) => {
    return (

        <Card w={{ base: "100%", md: "60%" }} align='center'>
            <CardHeader>
                <Heading size='md'>Détail de la facture</Heading>
            </CardHeader>
            <CardBody>
                <CKEditor
                
                 editor={ ClassicEditor }
                 data={formData.message}
                //  onChange={ ( event, editor ) => {
                //     const data = editor.getData();
                //     // setFormData({ ...formData, message: JSON.stringify(data)  })
                // } }
                onBlur={ ( event, editor ) => {
                    setFormData({ ...formData, message: editor.getData()})
                } }
                />
                
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
                    isDisabled={!Boolean(formData.message) }
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

export default Detail;
