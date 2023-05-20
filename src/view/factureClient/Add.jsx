import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { getCookie } from '../../utils/cookie';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading } from '@chakra-ui/react';
import MultiStepForm from './MultiStepForm';

const FactureClientAdd = () => {
    const [user, setUser] = useState([{}, ""]);
    useEffect(() => {
        if (!getCookie("7cortex_user")) {
            window.location.href = '/dev/mon_compte_business/signup'
        }
        setUser(getCookie("7cortex_user"))
        
    }, []);
    return (
        <MainLayout user={user} activeLink={"Factures clients"}>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/dev/mon_compte_business/facture_client/list'> Retour à la liste </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Heading as={"h1"} textAlign={"center"} p={3} > Ajouter une facture</Heading>
            
                <MultiStepForm user={user} />
            

        </MainLayout>
    );
}

export default FactureClientAdd;
