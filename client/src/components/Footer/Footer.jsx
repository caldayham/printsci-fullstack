import React from "react";
import {
  Container,
  Left,
  Center,
  Right,
  Desc,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./styles.jsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import PinDropIcon from "@mui/icons-material/PinDrop";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import { Link } from "react-router-dom";
import ClickLogo from "../SubComponents/Logo/ClickLogo.jsx";

const Footer = () => {
  return (
    <Container>
      <Left>
        <ClickLogo />
        <Desc>
          Composing high-fidelity 3D printing pipelines to get parts out of your
          head and in your hands.
          <br />
          <br />
          You know the part, we know the path.
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
          <ListItem>
            <Link
              to="/home/#"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/mycart/#"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/catalog/hardware"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Hardware
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/catalog/anesthesia"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Anesthesia
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/custom/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Custom Parts
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/about-us/privacy-policy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/about-us/terms-of-service"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Terms of Service
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/about-us/return-policy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Return Policy
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <PinDropIcon style={{ marginRight: "20px" }} />
          1101 University Ave SE, Minneapolis, MN, suite 106
        </ContactItem>
        <ContactItem>
          <PermPhoneMsgIcon style={{ marginRight: "20px" }} />
          show number
        </ContactItem>
        <ContactItem>
          <MarkEmailReadIcon style={{ marginRight: "20px" }} />
          show email
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
