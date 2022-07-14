import React from "react";
import {
  ComponentContainer,
  ContentContainer,
  MainContainer,
  MainTitle,
  SubTitle,
} from "../../../tools/globalStyles";

const CreateProductPage = () => {
  return (
    <MainContainer>
      <MainTitle>Create a Product</MainTitle>
      <ContentContainer>
        <ComponentContainer
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <SubTitle>Please fill out the following information:</SubTitle>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <label>Part title: </label>
              <input type="text" placeholder="part title" />
            </div>

            <div>
              <label>Part id: </label>
              <input type="text" placeholder="part id" />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Summary description: </label>
              <input type="text" placeholder="summary description" />
            </div>
          </form>
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              display: "flex",
              width: "calc(100% - 40px)",
            }}
          >
            <button style={{ width: "100%" }}>Create</button>
          </div>
        </ComponentContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default CreateProductPage;
