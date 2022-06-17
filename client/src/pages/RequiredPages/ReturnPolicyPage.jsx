import React from "react";
import { Container, Title, Subtitle, Paragraph } from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const ReturnPolicyPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>Return Policy Page</Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ReturnPolicyPage;
