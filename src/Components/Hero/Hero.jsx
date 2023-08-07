import React from "react";
import {
  HeroBtnContainer,
  HeroContainerStyled,
  HeroTextContainerStyled,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainerStyled>
      <HeroTextContainerStyled>
        <h1>La Mejor Inversión es tu Educación!</h1>
        <h2>Invertí en vos.</h2>
        <p>Capacitate con nosotros y conseguí tu libertad financiera</p>
      </HeroTextContainerStyled>
      <HeroBtnContainer>
        <a href="#">comenzar</a>
      </HeroBtnContainer>
    </HeroContainerStyled>
  );
};

export default Hero;
