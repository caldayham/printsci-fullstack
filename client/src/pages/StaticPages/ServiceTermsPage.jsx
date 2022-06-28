import React from "react";
import {
  MainContainer,
  Title,
  Subtitle,
  Paragraph,
} from "../../tools/globalStyles";

import { Link } from "react-router-dom";

const ServiceTermsPage = () => {
  return (
    <MainContainer flexDirection={"column"}>
      <Title>Service Terms</Title>
      <Paragraph>Please read carefully.</Paragraph>
      <Subtitle>PRIVACY</Subtitle>
      <Paragraph>
        We take our customers privacy very seriously and do not sell ANY
        customer data. We do store essential consumer data such as items in your
        cart and that you've viewed, and data you upload to your profile such as
        your name and email and product reviews. For more on the Print
        Scientific privacy policy
        <Link to={`/about/privacy`}> click here.</Link>
      </Paragraph>
      <Subtitle>ELECTRONIC COMMUNICATIONS</Subtitle>
      <Subtitle>COPYRIGHT</Subtitle>
      <Subtitle>TRADEMARKS</Subtitle>
      <Subtitle>PATENTS</Subtitle>
      <Subtitle>LICENSE AND ACCESS</Subtitle>
      <Subtitle>YOUR ELECTRONIC ACCOUNT</Subtitle>
      <Subtitle>CONSUMER GENERATED CONTENT</Subtitle>
      <Subtitle>INTELECTUAL PROPERTY COMPLAINTS</Subtitle>
      <Subtitle>RISK OF LOSS</Subtitle>
      <Subtitle>RETURNS, REFUNDS, AND TITLE</Subtitle>
      <Subtitle>PRODUCT DESCRIPTIONS</Subtitle>
      <Subtitle>PRICING</Subtitle>
      <Subtitle>WEBSITE PERMISSIONS</Subtitle>
      <Subtitle>SANCTIONS AND EXPORT POLICY</Subtitle>
      <Subtitle>OTHER BUSINESSES</Subtitle>
      <Subtitle>DISCLAIMER OF WARRANTIES</Subtitle>
      <Subtitle>DISPUTES</Subtitle>
      <Subtitle>APPLICABLE LAW</Subtitle>
      <Subtitle>SITE POLICIES</Subtitle>
      <Subtitle>OUR ADRESS</Subtitle>
      <p>1101 University Ave SE, Minneapolis MN, 55414</p>
      <Subtitle>SOFTWARE TERMS</Subtitle>
      <Subtitle>HOW TO SERVE A SUBPOENA OR OTHER LEGAL PROCESS</Subtitle>
      <Subtitle>
        NOTICE AND PROCEDURE FOR MAKING CLIAMS OF INTELLECTUAL PROPERTY
        INFRINGEMENT
      </Subtitle>
    </MainContainer>
  );
};

export default ServiceTermsPage;
