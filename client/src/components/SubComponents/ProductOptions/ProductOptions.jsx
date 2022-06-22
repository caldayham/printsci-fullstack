import React from "react";
import {
  Container,
  Title,
  OptionWrapper,
  OptionImg,
  OptionText,
  OptionColor,
} from "./styles";

const ProductOptions = ({ option }) => {
  console.log("next is option in the product option component");
  console.log(option);

  return (
    <Container>
      <Title>{option.optionTitle}</Title>
      {option ? (
        option.optionSelections.map((opt) => (
          <OptionWrapper key={opt}>
            {opt.selectionContentType === "img" && (
              <OptionImg src={opt.selectionContent} />
            )}
            {opt.selectionContentType === "text" && (
              <OptionText>{opt.selectionContent}</OptionText>
            )}
            {opt.selectionContentType === "" && (
              <OptionColor color={opt.selectionContent} />
            )}
          </OptionWrapper>
        ))
      ) : (
        <div>no option specified</div>
      )}
    </Container>
  );
};

export default ProductOptions;
