import React from "react";
import {
  StaticContainer,
  Title,
  Subtitle,
  Paragraph,
} from "../../tools/globalStyles";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const ReturnPolicyPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <StaticContainer>Return Policy Page</StaticContainer>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ReturnPolicyPage;
