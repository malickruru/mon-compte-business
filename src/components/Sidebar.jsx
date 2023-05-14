import { List, ListItem, ListIcon, Box, border } from "@chakra-ui/react";
import { MdDashboard, MdPeople, MdSettings } from "react-icons/md";
import { AiOutlineAreaChart } from "react-icons/ai";


function Sidebar({ activeLink }) {

  const active = (lien) => {
    if (lien == activeLink) {
      return (
        {borderRight : "3px solid blue"}
      )
    }
  }

  return (
    <Box
      position="relative"
      w="20rem"
      h='100%'
      top="0"
      left="0"
      bottom="0"
      bg="white"
      // overflowY='scroll'
    >
      <List spacing={5} p={5}>

        <ListItem p="5px" display="flex"  style={active("Tableau de bord")}>
        <ListIcon as={MdDashboard} color="blue.500" />
          <a href="/" >
            Tableau de bord
          </a>
          
        </ListItem>

        

      </List>
    </Box>
  );
}

export default Sidebar;
