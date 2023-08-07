import React from "react";
import { StyledButton } from "./ButtonStyles";

const Button = ({ Children, disabled = false }) => {
  return (
    <StyledButton whileTap={{ scale: 0.95 }} disabled={disabled}>
      {Children}
    </StyledButton>
  );
};

export default Button;
