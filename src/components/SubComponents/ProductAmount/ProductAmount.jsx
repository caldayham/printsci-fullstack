import { Add, Remove } from "@mui/icons-material";
import React from "react";
import { AmountContainer, Amount } from "./styles";

const ProductAmount = () => {
  return (
    <AmountContainer>
      <Remove />
      <Amount>2</Amount>
      <Add />
    </AmountContainer>
  );
};

export default ProductAmount;
