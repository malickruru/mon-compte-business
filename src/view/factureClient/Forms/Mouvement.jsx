import { Text, Flex, Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { HSeparator } from '../../../components/separator/Separator';
import loader from '../../../components/loader/loader.json'
import { useLottie } from 'lottie-react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'


const Row = ({ setMontant, id }) => {
    const [description, setDescription] = useState("");
    const [qte, setQte] = useState(1);
    const [prix, setPrix] = useState(0);

    return (
        <div id={'detail-'+id} data-desc={description} data-qte={qte} data-prix={prix} data-total={qte * prix}>
            <Flex
                
                justifyContent="space-between"
                alignItems={{ sm: "center" }}
                w="100%"
                my={{ md: "12px" }} >
                <Input type='text' value={description} placeholder='description'
                    onChange={(e) => { setDescription(e.target.value) }}
                />
                <Input type='number' min={10} value={qte} placeholder='qté'
                    onChange={(e) => { 
                        setMontant( e.target.value * prix , id)
                        setQte(e.target.value) 
                    }}
                />
                <Input type='number' value={prix} placeholder='prix'
                    onChange={(e) => {
                        setMontant( e.target.value * qte , id)
                        setPrix(e.target.value)
                    }}
                />

                <Text
                    my="5px"
                >
                    {qte * prix}
                </Text>


            </Flex>
            <HSeparator />
        </div>
    )
}




const Mvmt = ({ formData, setFormData, page, setPage}) => {
    const [facture, setFacture] = useState([0]);
    const [somme, setSomme] = useState(0);

    const calculerSomme = () => {
        let total = 0;
    
        for (let i = 0; i < facture.length; i++) {
          total += parseInt(facture[i]) ;
        }
    
        setSomme(total);
      };
    

    const setMontant = (prix , id) => {
        if(prix > 0){
            let newFact = facture;
            newFact[id] = prix;
            setFacture(newFact)
            calculerSomme()
            setFormData({ ...formData, pvgoto: somme })
        }
    }

    const GetTable = () => {

        var content = "";
        for (let i = 0; i < facture.length; i++) {
            
            let row = document.getElementById('detail-'+i)
            content += `<tr>
            <td>${row.getAttribute('data-desc')}</td>
            <td>${row.getAttribute('data-qte')}</td>
            <td>${row.getAttribute('data-prix')}</td>
            <td>${row.getAttribute('data-total')}</td>
            </tr>`
          }

        var message = `<table>
        <tr>
          <th>Description</th>
          <th>quantité</th>
          <th>Prix</th>
          <th>Total</th>
        </tr>
          ${content}
        </table>`
        return message;
    }



    return (
        <Card w={{ base: "100%", md: "60%" }} align='center'>
            <CardHeader>
                <Heading size='md'>Détail de la facture</Heading>
            </CardHeader>
            <CardBody w="100%">
                <Flex
                    justifyContent="space-between"
                    alignItems={{ sm: "center" }}
                    w="100%"
                    my={{ md: "12px" }} >
                    <Text
                        fontWeight="bold"
                        my="5px"
                    >
                        Description
                    </Text>
                    <Text
                        fontWeight="bold"
                        my="5px"
                    >
                        Quantitée
                    </Text>
                    <Text
                        fontWeight="bold"
                        my="5px"
                    >
                        Prix unitaire
                    </Text>
                    <Text
                        fontWeight="bold"
                        my="5px"
                    >
                        Montant
                    </Text>
                </Flex>
                <HSeparator />
                {
                    facture.map((e,idx) => (
                            <Row key={idx} setMontant={setMontant} id={idx}/>
                        )
                    )
                }
                <Flex>
                <Button
                    colorScheme='blue'
                    onClick={() => {
                        setFacture((prevState) => [...prevState, 0])
                    }}
                >
                    <AddIcon/>
                </Button>
                </Flex>
                
                <Flex
                    justifyContent="space-between"
                    alignItems={{ sm: "center" }}
                    w="100%"
                    my={{ md: "12px" }} >
                    <Text
                        fontWeight="bold"
                        my="5px"
                    >
                        Total
                    </Text>
                    
                    <Text
                        fontWeight="bold"
                        my="5px"
                    >
                        {somme}
                    </Text>
                </Flex>
                
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
                    isDisabled={!Boolean(formData.pvgoto)}
                    onClick={() => {
                        // calculerSomme()
                        setFormData({ ...formData, pvgoto: somme, message : GetTable() })
                        setPage(page + 1)
                    }}
                >
                    Suivant
                </Button>
            </CardFooter>
        </Card>
    )
}








export default Mvmt;
