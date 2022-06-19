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
import Members from "../../components/Members/Members";

const AboutPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <StaticContainer>
        <Title>Meet the team!</Title>
        <Members></Members>
      </StaticContainer>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutPage;
