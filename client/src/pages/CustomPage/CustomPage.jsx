import React from "react";
import { Container } from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const CustomPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>Custom Page</Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CustomPage;
