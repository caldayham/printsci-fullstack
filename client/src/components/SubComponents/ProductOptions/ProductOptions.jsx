import React, { useState } from "react";
import {
  Container,
  Title,
  OptionWrapper,
  OptionImg,
  OptionText,
  OptionColor,
  OptionsWrapper,
} from "./styles";

const ProductOptions = ({ optionIndex, product, setProduct }) => {
  console.log("next is the selected option in product options component");
  console.log();

  const updateProduct = (index) => {
    return index;
  };

  return (
    <Container>
      {
        <Title>
          {product.options[optionIndex].optionTitle + ": "}
          <b style={{ fontSize: "20px" }}>
            {/* {
            product.options[optionIndex].optionSelections[
              product.options[optionIndex].selectedOption
            ]
          } */}
          </b>
        </Title>
      }
      <OptionsWrapper>
        {product.options[optionIndex].optionSelections.map((sel, i) => (
          <OptionWrapper
            key={i}
            thisSelection={i}
            currentSelection={product.options[optionIndex].selectedOption}
            onClick={() => updateProduct(i)}
          >
            {sel.selectionContentType === "img" && (
              <OptionImg src={sel.selectionContent} />
            )}
            {sel.selectionContentType === "text" && (
              <OptionText>{sel.selectionContent}</OptionText>
            )}
            {sel.selectionContentType === "color" && (
              <OptionColor color={sel.selectionContent} />
            )}
          </OptionWrapper>
        ))}
      </OptionsWrapper>
    </Container>
  );
};

export default ProductOptions;
