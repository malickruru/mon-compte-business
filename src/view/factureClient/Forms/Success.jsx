import { Text, Flex, Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { HSeparator } from '../../../components/separator/Separator';
import loader from '../../../components/lottie/success.json'
import { useLottie } from 'lottie-react';

const Lottie = () => {
    const style = {
        height: 300,
    };

    const options = {
        animationData: loader,
        loop: false,
        autoplay: true,
        background: "transparent"
    };

    const { View } = useLottie(options, style);

    return View;
};




const Success = ({ formData, setFormData, page, setPage, user,fichier,setFichier }) => {

        return (
            <Card w={{ base: "100%", md: "60%" }} align='center'>
                <CardHeader>
                    <Heading size='md'>La facture a été enregistrer avec succès </Heading>
                </CardHeader>
                <CardBody w="100%">
                   <Lottie/>
                </CardBody>
                <CardFooter>
                    <Button
                        mt={4}
                        mr={2}
                        colorScheme='blue'
                        onClick={() => {
                            window.location.href = '/dev/mon_compte_business/facture_client/list'
                        }}
                    >
                        Voir la liste des factures
                    </Button>
                    <Button
                        mt={4}
                        colorScheme='blue'
                        isDisabled={false}
                        onClick={() => {
                            window.location.href = '/dev/mon_compte_business/facture_client/add'
                        }}
                    >
                        Créer une nouvelle facture
                    </Button>
                </CardFooter>
            </Card>
        )
    }

export default Success;
