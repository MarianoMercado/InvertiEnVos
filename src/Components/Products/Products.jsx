import React from "react";
import { ButtonContainerStyled, ProductosWrapper } from "./ProductsStyled";
import { ProductosContainer } from "./ProductsStyled";
import { products } from "../../data/Products";
import CardProductos from "../Products/CardProductos";
import Buton from "../UI/Button/Button";
//impotar la data para renderizar

const Products = () => {
  return (
    <ProductosWrapper>
      <h2>Ahora invertir te lleva solo un click</h2>

      <ProductosContainer>
        {products.map((idProuct) => {
          return <CardProductos key={idProuct.id} {...idProuct} />;
        })}
      </ProductosContainer>
      <ButtonContainerStyled>
        <Buton>Ver menos</Buton>
        <Buton disabled>Ver más</Buton>
      </ButtonContainerStyled>
    </ProductosWrapper>
  );
};

export default Products;
