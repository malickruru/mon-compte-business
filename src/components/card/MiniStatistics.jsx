// Chakra imports
// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "./Card";
// Custom icons
import React from "react";

export default function MiniStatistics(props) {
  const { startContent, endContent, name, growth, value , colorValue = false, w ,mainStat = false } = props;
  const textColor = () => {
    if (colorValue) {
      return parseInt(value) > 0 ? 'green.500' : 'red.500' ; 
    }else{
      return "secondaryGray.900";
    }
  } 
  const textColorSecondary = "secondaryGray.600";

  return (
    <Card py='15px' w={{base : "100%" , md : w}}   my={5}>
      <Flex
     
        my='auto'
        h='100%'
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}>
        {startContent}

        <Stat flex={ mainStat ? 'unset' : "1"} my='auto' ms={startContent ? "18px" : "0px"} >
          <StatLabel
            lineHeight='100%'
            color={textColorSecondary}
            fontSize={ mainStat ? {base: "sm", md : "xl"} : {base: "sm"}}>
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={mainStat ? {base: "2xl", md : "6xl"} : {base: "2xl"}}>
            {parseInt(value).toLocaleString() + " KT"}
         
          </StatNumber>
          {growth ? (
            <Flex align='center'>
              <Text color='secondaryGray.600' fontSize='xs' fontWeight='700' me='5px'>
                {growth}
              </Text>
            </Flex>
          ) : null}
        </Stat>
        
      </Flex>
    </Card>
  );
}
