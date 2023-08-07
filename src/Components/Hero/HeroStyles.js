import { motion } from "framer-motion";
import { styled } from "styled-components";

export const HeroContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  gap: 50px;
  padding: 10px 0;

  h1 {
    margin-bottom: 2rem;
  }
  @media (msx-eifth: 1000px) {
    flex-direction: column;
  }
`;
export const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 80%;
  h1 {
    font-size: 3rem;
    margin: 10px 0;
  }
  h2 {
    font-size: 2.5rem;
    margin: 10px 0;
  }
  p {
    font-size: 1.2rem;
  }
  @media (max-width: 1000px) {
    width: 80%;
    align-items: center;
    text-align: center;
    h1 {
      font-size: 1.9rem;
    }
  }
`;

export const HeroBtnContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 20px;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background: linear-gradient(to top, var(--bg-black), var(--blue));
  color: var(--white);
  font-weight: 900;
  font-size: 20px;
  text-decoration: none;
  transition-delay: 2s;
  &:hover {
    transition-delay: 2s;
    background: linear-gradient(to left, var(--blue), var(--bg-black));
  }
`;
