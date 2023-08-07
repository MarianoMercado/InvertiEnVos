import { styled } from "styled-components";

export const ProductosWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  gap: 20px;
  width: 100%;
`;
export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  max-width: 1300px;
  padding: 1rem 0;
`;

export const ProductosCard = styled.div`
  width: 300px;
  border-radius: 15px;
  padding: 1rem;
  background: linear-gradient(to top, var(--bg-black), var(--bg-black));
  img {
    width: 80%;
    height: 100px;
    border-radius: 15px;
    /* margin-bottom: 1rem; */
  }
  h2 {
    font-weight: 600;
    margin: 0;
  }
  p {
    color: #666;
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    width: 250px;
    text-align: left;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.75rem;
  background: linear-gradient(10deg, var(--white), var(--msj-succes));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
`;
