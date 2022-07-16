import React from "react";
import { Container } from "./styles";
import { researchData } from "../../Data/researchData";

const Research = () => {
  console.log(researchData);

  return (
    <Container>
      {researchData.map((paper) => (
        <div
          style={{ width: "100%", height: "20px", backgroundColor: "black" }}
          key={paper.uploadNum}
        />
      ))}
    </Container>
  );
};

export default Research;
