import React from "react";
import {
  StaticContainer,
  Title,
  Subtitle,
  Paragraph,
} from "../../tools/globalStyles";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <StaticContainer>
        <Title>Privacy Policy</Title>
        <Paragraph>Please read carefully.</Paragraph>
        <Subtitle>PRIVACY</Subtitle>
      </StaticContainer>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
