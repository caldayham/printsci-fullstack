import React from "react";
import { Container } from "./styles";
import Research from "../../components/Research/Research";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const ResearchPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Research />
      </Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ResearchPage;
