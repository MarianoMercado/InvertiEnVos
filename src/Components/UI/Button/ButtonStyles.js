import { motion } from "framer-motion";
import { styled } from "styled-components";

//
export const StyledButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  background: linear-gradient(to top, var(--bg-black), var(--blue));
  border-radius: 16px;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  animation-duration: 2s ease;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to left, var(--blue), var(--bg-black));
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
