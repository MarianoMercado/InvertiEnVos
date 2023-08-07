import { styled } from "styled-components"; //importammos styles componentes

//creamos la constate que vamos a renderizar uilizando STYLE(que proviene de la importacion) seguiod de la etiqueta a utilizar
export const NavbarContainerStyled = styled.header`
  height: 80px;

  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to top, var(--bg-black), var(--blue));
  padding: 1rem 4rem;
  @media (max-width: 400px) {
    padding: 1rem;
  }
`;

export const LinksContainertSyled = styled.div`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkcontainerStyled = styled.div`
  display: flex;
  gap: 20px;
  /* font-size: 1em; */
  font-weight: 800;
  /* color ${(props) => (props.home ? "#336b87" : "#763626")} */
`;

//herencia
// export const UserContainerStyled = styled(LinkcontainerStyled)``;

export const HomeContainerStyled = styled(LinkcontainerStyled)`
  /* @media (max-wid: 768px) {
    display: none;
  } */
`;
export const MenuContainerStyled = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;
//minuto 31:28 3.4 Livecoding: Landing Page | React JS
