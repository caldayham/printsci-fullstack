import React from "react";
import { Container } from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>Privacy Policy Page</Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
