import React from "react";
import { Container, Title, Subtitle, Paragraph } from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Title>Privacy Policy</Title>
        <Paragraph>Please read carefully.</Paragraph>
        <Subtitle>PRIVACY</Subtitle>
      </Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
