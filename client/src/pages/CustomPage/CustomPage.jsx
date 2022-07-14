import React from "react";
import { MainContainer, Title } from "../../tools/globalStyles";

const CustomPage = () => {
  return (
    <MainContainer flexDirection={"column"}>
      <Title>Custom Page</Title>
      <div>Have a 3D computer model and need it printed? Send it in!</div>
      <div>Have a part you need duplicated or modified? Ship it over!</div>
      <div>
        Have an idea that you want to make happen? Chat with a build expert
        today!
      </div>
    </MainContainer>
  );
};

export default CustomPage;
