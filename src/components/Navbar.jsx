import { HamburgerIcon } from '@chakra-ui/icons';
import { Avatar, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { deleteCookie, getCookie } from '../utils/cookie';

const Navbar = ({ toggleMenu,user }) => {
  

  const logout = () => {
    deleteCookie("7cortex_user");
    // window.location.href = '/dev/mon_compte_business/signup'
  }
  return (
    <Flex bg="blue.500" px="4" py="3" alignItems="center">
      <IconButton
        aria-label="Open Sidebar"
        colorScheme='blue'
        // variant="ghost"
        // color="white"
        icon={<HamburgerIcon />}
        onClick={toggleMenu}

        mr="2"
      />
      <Heading size="md" color="white">
        Mon Compte business
      </Heading>
      <Spacer />
      <Menu>
        <MenuButton  >
            <Avatar
            size="lg"
            name={user[0].Nom + user[0].Prenoms}
            src={"https://www.7cortex.com/7cortexintegration/"+user[1].substring(2)}
          />
        </MenuButton> 
        <MenuList>
          <MenuItem color="red.500" onClick={() => {logout()}}>Déconnexion</MenuItem>
          
        </MenuList>
      </Menu>

      {/* Ajoutez les éléments de la Navbar ici, comme un bouton de déconnexion */}
    </Flex>
  );
}

export default Navbar;
