import React from "react";
import {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./styles.jsx";
import { LogoImage, LogoTitle } from "../../globalStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import PinDropIcon from "@mui/icons-material/PinDrop";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <LogoImage src="/favicon.ico" alt="image" />
          <LogoTitle>Print Scientific</LogoTitle>
        </Logo>
        <Desc>
          Research can be messy, you shouldn't have to throw the baby out with
          the bathwater when one part breaks. Print Scientific composes
          high-fidelity 3D printing pipelines to get custom orders shipped fast
          so you can focus without worrying.
        </Desc>
        <SocialContainer>
          <SocialIcon color="0077b5">
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon color="4267b2">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="1da1f2">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="e1306c">
            <InstagramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Helpful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Hardware</ListItem>
          <ListItem>Anesthesia</ListItem>
          <ListItem>Custom Parts</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms of Service</ListItem>
          <ListItem>Return Policy </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <PinDropIcon style={{ marginRight: "20px" }} />
          1101 University Ave SE, Minneapolis, MN
          <br />
          suite 106
        </ContactItem>
        <ContactItem>
          <PermPhoneMsgIcon style={{ marginRight: "20px" }} />
          +1 (650) 521-7269
        </ContactItem>
        <ContactItem>
          <MarkEmailReadIcon style={{ marginRight: "20px" }} />
          support@printscientific.com
        </ContactItem>
        <Payment
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="payment image"
        />
      </Right>
    </Container>
  );
};

export default Footer;
