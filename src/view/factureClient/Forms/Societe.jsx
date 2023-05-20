import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import Select from 'react-select'

const Societe = ({ formData, setFormData, page, setPage, society }) => {
    // const [isError, setIsError] = useState(false);

    // const handleNext = () => {
    //     if (formData.compta_libelle == '') {
    //         setIsError(true);
    //     } else {
    //         setIsError(false)
    //         setPage(page + 1);
    //     }
    // }

    const options = society.map((elem, idx) => {
        return { 'value': idx, 'label': elem.SOCIETE }
    })

    return (

        <Card w={{ base: "100%", md: "60%" }} align='center'>
            <CardHeader>
                <Heading size='md'>Sélectionner un client</Heading>
            </CardHeader>
            <CardBody>
                <FormControl>
                    <FormLabel>Selectioner la société débitrice</FormLabel>
                    <Select options={options}
                        onChange={(e) => setFormData({ ...formData, societetiers: e.label, emailtiers: society[e.value].email })}
                    // onChange={(e) => {console.log(e);}}
                    />
                </FormControl>
                {
                    formData.societetiers ?
                        <Box p={5} fontWeight="bold">
                            Societée selectionnée : {formData.societetiers}
                        </Box>
                        :
                        <Box p={5}>
                            aucune societé selectionnée 
                        </Box>
                }


            </CardBody>
            <CardFooter>
            
                <Button
                    mt={4}
                    colorScheme='blue'
                    isDisabled={!Boolean(formData.societetiers) }
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

export default Societe;
