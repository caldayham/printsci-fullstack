import React from "react";
import { Container } from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const AboutPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>About Page</Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutPage;
