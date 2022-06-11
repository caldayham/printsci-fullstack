import { Add, Remove } from "@mui/icons-material";
import React from "react";
import { AddContainer, AmountContainer, Amount } from "./styles";

const ProductAmount = () => {
  return (
    <AddContainer>
      <AmountContainer>
        <Remove />
        <Amount>2</Amount>
        <Add />
      </AmountContainer>
    </AddContainer>
  );
};

export default ProductAmount;
