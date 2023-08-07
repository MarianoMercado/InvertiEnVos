import React from "react";
import {
  LinksContainertSyled,
  NavbarContainerStyled,
  HomeContainerStyled,
  LinkcontainerStyled,
  MenuContainerStyled,
} from "./NavbarStyles";

import { motion } from "framer-motion";

//importar iconos (simpre hacer referecna de que libreria es)
import { HiHome } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

//contenedor de mi navbar
const Navbar = () => {
  return (
    //importar los etylos creados
    <NavbarContainerStyled>
      <div>
        <a href="/#">
          <img src="./Logo.png" alt="log" />
        </a>
      </div>
      <LinksContainertSyled>
        <HomeContainerStyled>
          <motion.div whileTap={{ scale: 0.95 }}>
            <a href="/#">
              <LinkcontainerStyled>
                <HiHome />
              </LinkcontainerStyled>
              Inicio
            </a>
          </motion.div>

          <motion.div whileTap={{ scale: 0.95 }}>
            <a href="/#">
              <LinkcontainerStyled>
                <FaUserAlt />
              </LinkcontainerStyled>
              Crear cuenta
            </a>
          </motion.div>
        </HomeContainerStyled>
      </LinksContainertSyled>
      <motion.div whileTap={{ scale: 0.95 }}>
        <MenuContainerStyled>
          <AiOutlineMenu />
        </MenuContainerStyled>
      </motion.div>
    </NavbarContainerStyled>
  );
};

export default Navbar;
