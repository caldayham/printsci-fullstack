import React from "react";
import { Container } from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";

const CustomPage = () => {
  return (
    <div>
      <Container>
        <Announcement />
        <Navbar />
        Custom Page
      </Container>
      <Footer />
    </div>
  );
};

export default CustomPage;
