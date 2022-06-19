import React from "react";
import { StaticContainer } from "../../tools/globalStyles";
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
      <StaticContainer>
        <Research />
      </StaticContainer>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ResearchPage;
