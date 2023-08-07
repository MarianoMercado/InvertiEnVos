import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--back);
  color: var(--white);
  padding: 10px 20px;
`;
export const LinksContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    a {
      padding: 0.5rem 0;
    }
  }
`;

export const FooterInfoDev = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5px 0;
  font-style: "italic";
`;

export const FooterInfoDevName = styled.div`
  font-family: "Tangerine", "cursive";
  font-weight: 900;
  font-size: 2rem;
`;

export const FooterInfoDevDes = styled.div`
  color: var(--white-ligth);
  font-size: 0.9rem;
  background: var(--bg-black);
`;
