
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getCookie } from "../../utils/cookie";
import Libelle from "./Forms/libelle";
import Societe from "./Forms/Societe";
import { Box, Flex } from "@chakra-ui/react";
import Montant from "./Forms/Montant";
import Detail from "./Forms/Detail";
import Files from "./Forms/Files";
import Review from "./Forms/Review";
import Success from "./Forms/Success";
import Mvmt from "./Forms/Mouvement";

function MultiStepCreate({user}) {
  const [page, setPage] = useState(0);
  const [society , setSociety] = useState([])

  const [formData, setFormData] = useState({
    compta_libelle : "",
    societetiers: "",
    emailtiers: "",
    pvgoto : "",
    reglement : 0,
    message : "",
    ip:"",
    commission_hosting : 100,
    id_operation : 7,
    codeop : "v",
    email : "",
    groupe : "",
    societe : "",
  });

  const [fichier, setFichier] = useState('')

  useEffect(() => {
    
    var requestOptions = {
      method: 'GET',
    };

    // setFormData({ ...formData, email: user[0].email, groupe: user[0].groupe, societe: user[0].societe })
    
    fetch("https://www.7cortex.com/dev/7goto/api/society.php", requestOptions)
      .then(response => response.json())
      .then(result => setSociety(result.data))
      .catch(error => console.log('error', error));
      }, []);

  const componentList = [
    
    <Societe 
    formData={formData}
    setFormData={setFormData}
    page={page}
    setPage={setPage}
    society={society}
    />,
    <Libelle 
    formData={formData}
    setFormData={setFormData}
    page={page}
    setPage={setPage}
    />,
    <Mvmt 
    formData={formData}
    setFormData={setFormData}
    page={page}
    setPage={setPage}
    />,
    <Review 
    formData={formData}
    setFormData={setFormData}
    fichier={fichier}
    setFichier={setFichier}
    page={page}
    setPage={setPage}
    user={user}
    />,
    <Success/>,
  ];

  const progressWidth = () => {
    return ((page + 1) / (componentList.length))*100
  }
  return (
    <Flex flexDirection="column"  alignItems='center' justifyContent="center" m={5}>
      <div className="progress-bar" style={{width : "60%"}}>
        {
          <div
            style={{width: progressWidth() + "%"}}
          ></div>
        }
      </div>
      {componentList[page]}
    </Flex>
  );
}

export default MultiStepCreate;