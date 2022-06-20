import React from "react";
import {
  StaticContainer,
  Title,
  Subtitle,
  Paragraph,
  HorizontalLine,
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
        <Subtitle>What we do</Subtitle>
        <br />
        <Paragraph>
          Print Scientific is a manufacturing and tool version-control company.
          We build high-efficiency systems for bringing tools into the physical.
          Sometimes your product or an equally sufficient solution exists, we
          find it and manipulate it to fit your requirements.
        </Paragraph>
        <HorizontalLine />
        <Subtitle>Where we're going</Subtitle>
        <br />
        <Paragraph>
          Manufacturing medical and research equipment will likely always play
          an important role in our bussinss, that said we want to expand to have
          the capabilities to manufacture and distribute just about any tool at
          both prototype and massive scale. These capabilities will likely be
          manifested in sub-entities, such as PS Containers and PS Electrical.
          <br />
          <br />
          To get to this position we must first build our reputation and
          abilities in our current niche of small-body and low-component
          research equipment. Our team has expertise in CAD, 3D printing, CNC
          milling turning, and polymer casting.
        </Paragraph>
        <HorizontalLine />
        <Subtitle>Meet the team!</Subtitle>
        <Members></Members>
        <br />
        <br />
        <Subtitle>Contact us</Subtitle>
        <HorizontalLine />
        <Subtitle>Other helpful things</Subtitle>
        <br />
        <Paragraph>
          Read our <u>Privacy Policy</u>
        </Paragraph>
        <Paragraph>
          Read our <u>Terms of Service</u>
        </Paragraph>
        <Paragraph>
          Read our <u>Return Polic</u>
        </Paragraph>
        <Paragraph>
          Browse the <u>Catalog</u>
        </Paragraph>
      </StaticContainer>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutPage;
