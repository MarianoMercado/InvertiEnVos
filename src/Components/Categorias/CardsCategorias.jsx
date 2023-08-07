import React from "react";
import { CardCategoria, CardCategoriaContainer } from "./CategoriasStyled";

const CardsCategorias = () => {
  return (
    <>
      <CardCategoriaContainer>
        <CardCategoria whileHover={{ scale: 0.9 }}>
          <img src="./DolarMep.jpeg" alt="" />
          <h4>Dolar MEP</h4>
          <p>
            Es una de las alternativas más convenientes para dolarizár tus
            ahorros
          </p>
        </CardCategoria>
        <CardCategoria whileHover={{ scale: 0.9 }}>
          <img src="./BolsaDeValores.jpg" alt="" />
          <h4>Bolsa de valores</h4>
          <p>
            Comenzarás a operar con los distintos activos financieos que existen
            en este increíble mundo
          </p>
        </CardCategoria>
        <CardCategoria whileHover={{ scale: 0.9 }}>
          <img src="./Criptomonedas.jpg" alt="" />
          <h4>Criptomonedas</h4>
          <p>
            Las criptomonedas tienen un potencial de crecimiento y valorización
            muy alto,
          </p>
        </CardCategoria>
      </CardCategoriaContainer>
    </>
  );
};

export default CardsCategorias;
