import React from "react";
import { Container } from "./styles";
import Research from "../../components/Research/Research";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";

const ResearchPage = () => {
  return (
    <div>
      <Container>
        <Announcement />
        <Navbar />
        Research Page
      </Container>
      <Footer />
    </div>
  );
};

export default ResearchPage;
