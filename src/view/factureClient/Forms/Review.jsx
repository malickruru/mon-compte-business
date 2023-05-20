import { Text, Flex, Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { HSeparator } from '../../../components/separator/Separator';
import loader from '../../../components/loader/loader.json'
import { useLottie } from 'lottie-react';

const Row = ({ name, info, html = false, textColor = 'black' }) => {
    return (
        <>
            <Flex
                justifyContent="space-between"
                alignItems={{ sm: "center" }}
                w="100%"
                my={{ md: "12px" }} >
                <Text
                    color="gray.500"
                    my="5px"
                >
                    {name}
                </Text>
                {html
                    ?
                    info
                    :
                    <Text
                        color={textColor}
                        my="5px"
                    >
                        {info}
                    </Text>
                }

            </Flex>
            <HSeparator />
        </>
    )
}

const Lottie = () => {

    const style = {
        height: 300,

    };

    const options = {
        animationData: loader,
        loop: true,
        autoplay: true,
        background: "transparent"
    };

    const { View } = useLottie(options, style);

    return View;
};



const Review = ({ formData, setFormData, page, setPage, user,fichier,setFichier }) => {
    const [loading, setloading] = useState(false);

    useEffect(() => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.ipify.org?format=json', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                setFormData({ ...formData, ip: data.ip, email: user[0].email, groupe: user[0].groupe, societe: user[0].societe })

            }
        };
        xhr.send();
    }, []);

    const handleSubmit = () => {
        // loader
        setloading(true)
        //requete 
        const Post = new FormData();
        Object.keys(formData).forEach( (k) => {
            Post.append(k,formData[k])
        })
        Post.append('files',fichier[0])
        // formData.append('pdf', fileInput.files[0]);

        fetch('https://www.7cortex.com/dev/7goto/api/add_facture_client.php', {
            method: 'POST',
            body: Post
        })
            .then(response => response.json())
            .then(data => setPage(page + 1))
            .catch(error => console.error(error));
        // fin loader
    }


    if (loading) {
        return (
            <Center flexDirection="column">
                <Lottie />
                <Text>Génération de votre facture en cours...</Text>
            </Center >)
    } else {
        return (
            <Card w={{ base: "100%", md: "60%" }} align='center'>
                <CardHeader>
                    <Heading size='md'>Les informations sont elle correcte ? </Heading>
                </CardHeader>
                <CardBody w="100%">
                    <Row name="Libellé" info={formData.compta_libelle} />
                    <Row name="Client" info={formData.societetiers} />
                    <Row name="Montant de la facture" info={parseInt(formData.pvgoto).toLocaleString('de-DE') + " KT"} />
                    <Row name="Montant réglé" info={parseInt(formData.reglement).toLocaleString('de-DE') + " KT"} />
                    <Row name="Détail de la facture" html={true} info={<div dangerouslySetInnerHTML={{ __html: formData.message }}></div>} />
                    <Row name="Fichier" info={fichier ? fichier[0].name : "aucun fichier choisie"} />
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
                        colorScheme='green'
                        isDisabled={false}
                        onClick={handleSubmit}
                    >
                        Oui,créer la facture
                    </Button>
                </CardFooter>
            </Card>
        )
    }







}
export default Review;
