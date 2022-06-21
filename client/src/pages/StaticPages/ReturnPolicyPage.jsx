import React from "react";
import { StaticContainer, Subtitle, Paragraph } from "../../tools/globalStyles";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const ReturnPolicyPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <StaticContainer>
        <Subtitle>Return Policy</Subtitle>
        <br />
        <Paragraph>
          We strive for maximum client happiness, so if you order a product and
          are not 100% satisfied we offer a 100% money back, no questions, 30
          day refund policy. We would like to know why the product didn't work
          out for you. Please fill out our <u>Return Form</u>.
        </Paragraph>
      </StaticContainer>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ReturnPolicyPage;
