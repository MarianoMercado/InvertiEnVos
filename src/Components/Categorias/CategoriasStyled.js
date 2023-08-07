import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CategoriasWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 15px;
  text-align: center;
  gap: 10px;
  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

export const CategoriasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  user-select: none;
`;

export const CardCategoriaContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  /* color: var(--); */
`;
export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  padding: 5px 20px;
  height: 350px;
  background: linear-gradient(to top, var(--blue), var(--bg-black));
  width: 250px;
  border-radius: 15px;
  text-align: center;
  img {
    height: 200px;
    width: 100%;
    border-radius: 15px;
  }
`;
