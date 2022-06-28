import React from "react";
import {
  MainContainer,
  Title,
  Subtitle,
  Paragraph,
} from "../../tools/globalStyles";

const PrivacyPolicyPage = () => {
  return (
    <MainContainer flexDirection={"column"}>
      <Title>Privacy Policy</Title>
      <Paragraph>Please read carefully.</Paragraph>
      <Subtitle>PRIVACY</Subtitle>
    </MainContainer>
  );
};

export default PrivacyPolicyPage;
