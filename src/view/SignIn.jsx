import React from "react";

// Chakra imports
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "../components/separator/Separator";
import DefaultAuth from "../layouts/auth/Default";
// Assets
// import illustration from "assets/img/auth/auth.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import illustration from "../components/illustration";
import theme from "../theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import BtnLoader from "../components/loader/btnLoader";
import {setCookie} from "../utils/cookie";

function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  // show password
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  // loader
  const [isloading, setIsloading] = React.useState(false);
  // alert
  const [showError, setShowError] = React.useState(false);
  const [ErrorMsg, setErrorMsg] = React.useState("");
  // login
  const username = React.useRef(null);
  const password = React.useRef(null);

  const handleSubmit = () => {
    // console.log(username.current.value);
    // console.log(password.current.value);
    var requestOptions = {
      method: 'GET',
    };
    setIsloading(true)
    fetch(`https://www.7cortex.com/dev/7goto/api/login.php?username=${username.current.value}&password=${password.current.value}`, requestOptions)
      .then(response => response.json())
      .then(
        result => {
          setIsloading(false)
          if (!result.success) {
            setErrorMsg(result.message)
            setShowError(true)
          }else{
            setCookie('7cortex_user',JSON.stringify(result.data))
            window.location.href = '/'
          }
          
        }
      )
      .catch(error => console.log('error', error));
  }
  return (
    <ChakraProvider theme={theme}>
      <ThemeEditorProvider>
        <DefaultAuth illustrationBackground={illustration} image={illustration}>
          <Flex
            maxW={{ base: "100%", md: "max-content" }}
            w='100%'
            mx={{ base: "auto", lg: "0px" }}
            me='auto'
            h='100%'
            alignItems='start'
            justifyContent='center'
            mb={{ base: "30px", md: "60px" }}
            px={{ base: "25px", md: "0px" }}
            mt={{ base: "40px", md: "14vh" }}
            flexDirection='column'>
            <Box me='auto'>
              <Heading color={textColor} fontSize='36px' mb='10px'>
                Connexion
              </Heading>
              <Text
                mb='36px'
                ms='4px'
                color={textColorSecondary}
                fontWeight='400'
                fontSize='md'>
                Entrez votre email et votre mot de passe 7goto pour vous connecter
              </Text>
            </Box>
            <Flex
              zIndex='2'
              direction='column'
              w={{ base: "100%", md: "420px" }}
              maxW='100%'
              background='transparent'
              borderRadius='15px'
              mx={{ base: "auto", lg: "unset" }}
              me='auto'
              mb={{ base: "20px", md: "auto" }}>

              {
                showError && <Alert status='error'>
                  <AlertIcon />
                  <AlertTitle>{ErrorMsg}</AlertTitle>
                </Alert>
              }

              <FormControl>
                <FormLabel
                  display='flex'
                  ms='4px'
                  fontSize='sm'
                  fontWeight='500'
                  color={textColor}
                  mb='8px'>
                  Email<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant='auth'
                  fontSize='sm'
                  ms={{ base: "0px", md: "0px" }}
                  type='email'
                  placeholder='Mon mail 7goto'
                  mb='24px'
                  fontWeight='500'
                  size='lg'
                  ref={username}
                />
                <FormLabel
                  ms='4px'
                  fontSize='sm'
                  fontWeight='500'
                  color={textColor}
                  display='flex'>
                  Password<Text color={brandStars}>*</Text>
                </FormLabel>
                <InputGroup size='md'>
                  <Input
                    isRequired={true}
                    fontSize='sm'
                    placeholder='Mon mot de passe 7goto'
                    mb='24px'
                    size='lg'
                    type={show ? "text" : "password"}
                    variant='auth'
                    ref={password}
                  />
                  <InputRightElement display='flex' alignItems='center' mt='4px'>
                    <Icon
                      color={textColorSecondary}
                      _hover={{ cursor: "pointer" }}
                      as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                      onClick={handleClick}
                    />
                  </InputRightElement>
                </InputGroup>
                <Flex justifyContent='space-between' align='center' mb='24px'>


                </Flex>
                <Button
                  fontSize='sm'
                  variant='brand'
                  fontWeight='500'
                  w='100%'
                  h='50'
                  mb='24px'
                  p='auto'
                  onClick={handleSubmit}
                >
                  {isloading ? <BtnLoader /> : "Se connecter"}
                </Button>
              </FormControl>
              <Flex
                flexDirection='column'
                justifyContent='center'
                alignItems='start'
                maxW='100%'
                mt='0px'>
                <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
                  Vous n'avez pas de compte ?
                  <a href='https://www.7cortex.com/7cortexintegration/7goto/register.php'>
                    <Text
                      color={textColorBrand}
                      as='span'
                      ms='5px'
                      fontWeight='500'>
                      Inscrivez-vous
                    </Text>
                  </a>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </DefaultAuth>
      </ThemeEditorProvider>
    </ChakraProvider>
  );
}

export default SignIn;
