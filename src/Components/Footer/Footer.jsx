import React from "react";
import {
  FooterContainer,
  FooterInfoDev,
  FooterInfoDevDes,
  FooterInfoDevName,
  LinksContainerStyled,
} from "./FooterStyled";
const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainerStyled>
        <a href="/#">Términos de Uso</a>
        <a href="/#">Trabajá con Nosotros</a>
        <a href="/#">Soporte</a>
      </LinksContainerStyled>
      <FooterInfoDev>
        <FooterInfoDevName>Mariano Mercado</FooterInfoDevName>
        <FooterInfoDevDes>Desarrollador Full Stack</FooterInfoDevDes>
      </FooterInfoDev>
    </FooterContainer>
  );
};

export default Footer;
