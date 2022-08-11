import React from "react";
import {
  Container,
  OptionWrapper,
  OptionImg,
  OptionText,
  OptionColor,
  OptionsWrapper,
} from "./styles";
import { Paragraph } from "../../../tools/globalStyles";

const ProductOptions = ({ product, changeProduct }) => {
  const handleSelection = (optionIndex, selectedOptionIndex) => {
    const productWithNewOption = JSON.parse(JSON.stringify(product));
    productWithNewOption.options[optionIndex].selectedOption =
      selectedOptionIndex;
    changeProduct(productWithNewOption);
  };

  return (
    <div>
      {product.options.map((option, optionIndex) => (
        <Container key={optionIndex}>
          {
            <Paragraph>
              <span style={{ fontSize: "16px" }}>
                {option.optionTitle + ": "}
              </span>
              <b style={{ fontSize: "20px" }}>
                {option.optionSelections[option.selectedOption].selection}
              </b>
            </Paragraph>
          }
          <OptionsWrapper>
            {option.optionSelections.map(
              (selectedOption, selectedOptionIndex) => (
                <OptionWrapper
                  key={selectedOptionIndex}
                  thisSelection={selectedOptionIndex}
                  currentSelection={option.selectedOption}
                  onClick={() =>
                    handleSelection(optionIndex, selectedOptionIndex)
                  }
                >
                  {selectedOption.selectionContentType === "img" && (
                    <OptionImg
                      src={
                        process.env.REACT_APP_IMGURL +
                        selectedOption.selectionContent
                      }
                    />
                  )}
                  {selectedOption.selectionContentType === "text" && (
                    <OptionText>{selectedOption.selectionContent}</OptionText>
                  )}
                  {selectedOption.selectionContentType === "color" && (
                    <OptionColor color={selectedOption.selectionContent} />
                  )}
                </OptionWrapper>
              )
            )}
          </OptionsWrapper>
        </Container>
      ))}
    </div>
  );
};

export default ProductOptions;
