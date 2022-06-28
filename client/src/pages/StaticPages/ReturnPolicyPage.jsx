import React from "react";
import { MainContainer, Subtitle, Paragraph } from "../../tools/globalStyles";

const ReturnPolicyPage = () => {
  return (
    <MainContainer flexDirection="column">
      <Subtitle>Return Policy</Subtitle>
      <br />
      <Paragraph>
        We strive for maximum client happiness, so if you order a product and
        are not 100% satisfied we offer a 100% money back, no questions, 30 day
        refund policy. We would like to know why the product didn't work out for
        you. Please fill out our <u>Return Form</u>.
      </Paragraph>
    </MainContainer>
  );
};

export default ReturnPolicyPage;
