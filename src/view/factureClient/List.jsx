import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { getCookie } from '../../utils/cookie';
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

const FactureClientList = () => {
    const [user, setUser] = useState([{}, ""]);
    useEffect(() => {
        if (!getCookie("7cortex_user")) {
            window.location.href = '/dev/mon_compte_business//signup'
        }
        setUser(getCookie("7cortex_user"))
    }, []);
    return (
        <MainLayout user={user} activeLink={"Factures clients"}>
            <Flex >
            <Card m={2} bgColor="blue.500" w={{base : "100%" , md : "30%"}} align='left'>
                <CardHeader>
                    <Heading color="white" size='md'>Ajouter une facture </Heading>
                </CardHeader>
                <CardBody>
                    <Text color="white"> Créer une facture  </Text>
                </CardBody>
                <CardFooter>
                <a href="/dev/mon_compte_business/facture_client/create"><Button >Ajouter votre facture</Button></a>
                </CardFooter>
            </Card>
            <Card m={2} bgColor="blue.300" w={{base : "100%" , md : "30%"}} align='left'>
                <CardHeader>
                    <Heading color="white" size='md'>Attacher une facture externe</Heading>
                </CardHeader>
                <CardBody>
                    <Text color="white">Comptabiliser une facture externe </Text>
                </CardBody>
                <CardFooter>
                <a href="/dev/mon_compte_business/facture_client/add"><Button >Attacher votre facture</Button></a>
                </CardFooter>
            </Card>
            </Flex>
            
        </MainLayout>
    );
}

export default FactureClientList;
