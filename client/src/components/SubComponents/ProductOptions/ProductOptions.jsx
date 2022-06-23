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

const ProductOptions = ({ option, selected, changeSelected, specIndex }) => {
  console.log("next is selected in product options component");
  console.log(selected);
  const [selection, setSelection] = useState(0);

  const updateSelection = (index) => {
    setSelection(index);
    console.log("next is the specific property that this option is");
    console.log(selected[specIndex]);
    const newSelected = JSON.parse(JSON.stringify(selected));
    newSelected.splice(specIndex, 1, option.optionSelections[index]); // removing the old option selection and spicing in the new option selection
    changeSelected(newSelected);
    console.log("next is the new selected");
    console.log(newSelected, selected);
  };

  return (
    <Container>
      <Title>
        {option.optionTitle + ": "}
        <b style={{ fontSize: "20px" }}>
          {option.optionSelections[selection].selection}
        </b>
      </Title>
      <OptionsWrapper>
        {option ? (
          option.optionSelections.map((sel, i) => (
            <OptionWrapper
              key={sel._id}
              thisSelection={i}
              currentSelection={selection}
              onClick={() => updateSelection(i)}
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
          ))
        ) : (
          <div>no option specified</div>
        )}
      </OptionsWrapper>
    </Container>
  );
};

export default ProductOptions;
