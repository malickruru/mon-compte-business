import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout'
import { getCookie } from '../utils/cookie';
import MiniStatistics from '../components/card/MiniStatistics'
import { MdBalance } from 'react-icons/md';
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { HSeparator } from '../components/separator/Separator';
// table

const Row = ({ name, price, textColor = 'black' }) => {


    return (
        <>
            <Flex
                justifyContent="space-between"
                alignItems={{ sm: "center" }}
                w="100%"
                my={{ md: "12px" }} >
                <Text
                    color="black"
                    // fontSize='2xl'
                    // fontWeight="semibold"
                    my="5px"
                >
                    {name}
                </Text>
                <Text
                    color={textColor}
                    // fontSize='2xl'
                    // fontWeight="semibold"
                    my="5px"
                >
                    {parseInt(price).toLocaleString('de-DE') + " KT"}
                </Text>
            </Flex>
            <HSeparator />
        </>
    )
}




const Bilan = () => {
    const [user, setUser] = useState([{}, ""]);
    const [bilan, setBilan] = useState([{}]);
    useEffect(() => {
        if (!getCookie("7cortex_user")) {
            window.location.href = '/dev/mon_compte_business/signup';
            // console.log('ok');
        }
        setUser(getCookie("7cortex_user"))
        // récupérer les stats

        var requestOptions = {
            method: 'GET',
        };

        fetch(`https://www.7cortex.com/dev/7goto/api/bilan.php?email=${getCookie("7cortex_user")[0].email}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                setBilan(result.data);

                // var loader = document.querySelector(".load");
                // loader.style.display = "none";
            })
            .catch(error => console.log('error', error));

    }, []);
    return (

        <MainLayout user={user} activeLink={"Tableau de bord"}>
            {/* info générales */}
            <Flex w="100%" flexWrap="wrap" justifyContent={'space-around'} alignItems={'center'} p={5}>
                <MiniStatistics startContent={<Icon as={MdBalance} w={{ base: 12, md: 20 }} h={{ base: 12, md: 20 }} borderRadius='50%' p={2} color='blue.500' bgColor='blue.50' />} name="Mon revenu" value={bilan[0].revenu} colorValue={true} w="90%" mainStat={true} />
                <MiniStatistics startContent={<Icon as={ImArrowUp} w={12} h={12} borderRadius='50%' p={2} color='blue.500' bgColor='blue.50' />} name="Chiffre d'affaire" value={bilan[0].chiffre_affaire} w="40%" growth={`Vous avez encaissez ${bilan[0].deja_encaisse} kt`} />
                <MiniStatistics startContent={<Icon as={ImArrowDown} w={12} h={12} borderRadius='50%' p={2} color='blue.500' bgColor='blue.50' />} name="Cumul des achats" value={bilan[0].totalacht} w="40%" growth={`Vous devez  ${bilan[0].fournisseurapayer} kt à vos fournisseur`} />
            </Flex>

            {/* détail */}
            <Flex w="100%" flexWrap="wrap" justifyContent={'center'} alignItems={'center'} px={10} py={5}>
                <Flex direction="column" w={{ base: "100%", md: "90%" }} bgColor="white" borderRadius="20px" p={3}>
                    <Flex
                        direction={{ sm: "column", lg: "row" }}
                        justifyContent={{ sm: "center", lg: "space-between" }}
                        alignItems={{ sm: "center" }}
                        w="100%"
                        my={{ md: "12px" }}
                    >
                        <Heading as='h2' size='lg'>
                            Tableau de bord
                        </Heading>


                    </Flex>
                    <Text
                        color="gray.400"
                        fontSize='2xl'
                        fontWeight="semibold"
                        my="12px"
                    >
                        Client
                    </Text>
                    <Row name="chiffre d'affaire" price={bilan[0].chiffre_affaire} />
                    <Row name="Montant encaissé" price={bilan[0].deja_encaisse} />
                    <Row name="Montant à encaissé restant" price={bilan[0].clientaencaisser} />
                    <Text
                        color="gray.400"
                        fontSize='2xl'
                        fontWeight="semibold"
                        my="12px"
                    >
                        Founisseur
                    </Text>
                    <Row name="Achat chez les fournisseurs" price={bilan[0].totalacht} />
                    <Row name="Montant restant à payer chez les fournisseurs" price={bilan[0].fournisseurapayer} />
                    <Row name="Marge Brute  " price={bilan[0].margebrut} textColor={parseInt(bilan[0].margebrut) > 0 ? 'green.500' : 'red.500'} />

                    <Text
                        color="gray.400"
                        fontSize='2xl'
                        fontWeight="semibold"
                        my="12px"
                    >
                        Production/ Travaux
                    </Text>
                    <Row name="Travaux effectués" price={bilan[0].prgoto} />
                    <Row name="Travaux réglés" price={bilan[0].reglgainkt} />
                    <Row name="Travaux à percevoir" price={bilan[0].productionapercevoir} />
                    <Text
                        color="gray.400"
                        fontSize='2xl'
                        fontWeight="semibold"
                        my="12px"
                    >
                        Liquidités
                    </Text>
                    <Row name="Dêpot en caisse" price={bilan[0].caisse} />
                    <Row name="Retrait caisse" price={bilan[0].caisse_debit} />
                    <Row name="Solde caisse" price={bilan[0].soldecaisse} />
                    <Text
                        color="gray.400"
                        fontSize='2xl'
                        fontWeight="semibold"
                        my="12px"
                    >
                        Stock
                    </Text>
                    <Row name="Entrée de stock" price={bilan[0].entree_stock} />
                    <Row name="Sortie de stock" price={bilan[0].sortie_stock} />
                    <Row name="Stock final" price={bilan[0].stockfinal} />

                    <Text
                        color="gray.400"
                        fontSize='2xl'
                        fontWeight="semibold"
                        my="12px"
                    >
                        {/* Actifs & passifs
                    </Text>
                    <Row name="Actif à court terme" price={bilan[0].actif_a_ct} />
                    <Row name="Passif à court terme" price={bilan[0].passif_a_ct} />
                    <Text
                        color="gray.400"
                        fontSize='2xl'
                        fontWeight="semibold"
                        my="12px"
                    > */}
                        Résultat
                    </Text>
                    <Row name="Revenu disponible " price={bilan[0].revenu} textColor={parseInt(bilan[0].revenu) > 0 ? 'green.500' : 'red.500'} />
                </Flex>
            </Flex>

        </MainLayout>


    );
}

export default Bilan;
