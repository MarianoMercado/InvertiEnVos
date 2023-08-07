import React from "react";
import { CardPrice, ContainerPrice, ProductosCard } from "./ProductsStyled";
import Buton from "../UI/Button/Button";

const CardProductos = ({ img, title, desc, price }) => {
  return (
    <ProductosCard>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ContainerPrice>
        <CardPrice>${price}</CardPrice>
        <Buton>Agregar</Buton>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProductos;
