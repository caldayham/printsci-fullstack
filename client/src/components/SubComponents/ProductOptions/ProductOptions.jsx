import { OptionUnstyled } from "@mui/base";
import React from "react";
import { Container } from "./styles";

const ProductOptions = () => {
  return (
    <Container>
      <Title></Title>
      {options.map((opt) => (
        <OptionWrapper key={opt}>
          <OptionTitle>{opt.title}</OptionTitle>
          <OptionDesc>{opt.desc}</OptionDesc>
        </OptionWrapper>
      ))}
    </Container>
  );
};

export default ProductOptions;
