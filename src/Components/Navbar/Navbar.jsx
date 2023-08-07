import React from "react";
import {
  LinksContainertSyled,
  NavbarContainerStyled,
  HomeContainerStyled,
  LinkcontainerStyled,
} from "./NavbarStyles";

import { motion } from "framer-motion";

//importar iconos (simpre hacer referecna de que libreria es)
import { HiHome } from "react-icons/hi";

//contenedor de mi navbar
const Navbar = () => {
  return (
    //importar los etylos creados
    <NavbarContainerStyled>
      <div>
        <a href="/#">
          <img src="./src/img/Logo.png" alt="log" />
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
                <HiHome />
              </LinkcontainerStyled>
              Nosotros
            </a>
          </motion.div>
        </HomeContainerStyled>
      </LinksContainertSyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
