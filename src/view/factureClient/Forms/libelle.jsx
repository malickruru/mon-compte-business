import { Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const Libelle = ({ formData, setFormData, page, setPage }) => {
    
    
    const handleNext = () => {
            setPage(page + 1);
    }

    return (
        <Card w={{ base: "100%", md: "60%" }} align='center'>
            <CardHeader>
                <Heading size='md'>Libellé de la facture</Heading>
            </CardHeader>
            <CardBody>
                <FormControl >
                    <FormLabel>Libellé de la facture</FormLabel>
                    <Input type='text' value={formData.compta_libelle}
                        onChange={(e) => setFormData({ ...formData, compta_libelle: e.target.value })}
                    />
                    
                </FormControl>
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
                    isDisabled={!Boolean(formData.compta_libelle) }
                    onClick={handleNext}
                >
                    Suivant
                </Button>
            </CardFooter>
        </Card>

    );
}

export default Libelle;
