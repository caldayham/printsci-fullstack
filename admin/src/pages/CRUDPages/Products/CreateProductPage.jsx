import React from "react";
import {
  ComponentContainer,
  ContentContainer,
  MainContainer,
  MainTitle,
  SubTitle,
} from "../../../tools/globalStyles";
import { InputDiv } from "./styles";

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
            <InputDiv>
              <label>Part title: </label>
              <input type="text" placeholder="part title" />
            </InputDiv>

            <InputDiv>
              <label>Part id: </label>
              <input type="text" placeholder="part id" />
            </InputDiv>
            <InputDiv>
              <label>Rating:</label>
              <input type="number" placeholder="Average Rating" />
              <input type="number" placeholder="Number of Ratings" />
              <input type="number" placeholder="Answered Questions" />
            </InputDiv>
            <InputDiv>
              <label>Description: </label>
              <input type="text" placeholder="summary description" />
            </InputDiv>
            <InputDiv>
              <label>Images: </label>
              <input type="file" id="file" />
            </InputDiv>
            <InputDiv>
              <label>Categories: </label>
              <input
                type="text"
                placeholder="Categories, put spaces between entries."
              />
            </InputDiv>
            <InputDiv>
              <label>Family: </label>
              <input type="text" placeholder="product family" />
            </InputDiv>
            <InputDiv>
              <label>Options: </label>
              <input type="text" placeholder="Option" />
            </InputDiv>
            <InputDiv>
              <label>Base Price: </label>
              <input type="text" placeholder="base price" />
            </InputDiv>
            <InputDiv>
              <label>Features: </label>
              <input type="text" placeholder="product features" />
            </InputDiv>
            <InputDiv>
              <label>Specifications: </label>
              <input type="text" placeholder="product specifications" />
            </InputDiv>
            <InputDiv>
              <label>In Stock: </label>
              <input type="text" placeholder="true / false" />
            </InputDiv>
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
