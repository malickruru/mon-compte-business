import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';


const Montant = ({ formData, setFormData, page, setPage}) => {
    return (

        <Card w={{ base: "100%", md: "60%" }} align='center'>
            <CardHeader>
                <Heading size='md'>Montant de la facture</Heading>
            </CardHeader>
            <CardBody>
                <FormControl>
                    <FormLabel>Montant total de la facture en Fcfa</FormLabel>
                    <Input type='number' value={formData.pvgoto}
                        onChange={(e) => setFormData({ ...formData, pvgoto: e.target.value })}
                    />
                    <Box m={5}></Box>
                    <FormLabel>Montant  de la facture déjà réglé</FormLabel>
                    <Input type='number' value={formData.reglement}
                        onChange={(e) => setFormData({ ...formData, reglement: e.target.value })}
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
                    isDisabled={!Boolean(formData.pvgoto) }
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

export default Montant;
