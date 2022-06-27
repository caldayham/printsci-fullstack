import React from "react";

import { MainContainer } from "../tools/globalStyles";

import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const mainPageWrapper = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <MainContainer>mainPageWrapper</MainContainer>
      <Footer />
    </div>
  );
};

export default mainPageWrapper;
