import React from "react";
import { StaticContainer } from "../../tools/globalStyles";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const CustomPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <StaticContainer>Custom Page</StaticContainer>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CustomPage;
