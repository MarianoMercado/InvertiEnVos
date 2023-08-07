import React from "react";
import { CategoriasWrapper } from "./CategoriasStyled";
import CardsCategorias from "./CardsCategorias";

const Categorias = () => {
  return (
    <CategoriasWrapper>
      <h2>Tu primer inversión</h2>
      <p>Empezá a poner tu dinero en movimiento y potenciá tus ahorros.</p>
      <CardsCategorias />
    </CategoriasWrapper>
  );
};

export default Categorias;
