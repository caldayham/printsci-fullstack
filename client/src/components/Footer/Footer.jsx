import React from "react";
import {
  Container,
  Left,
  Center,
  Right,
  Desc,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./styles.jsx";
import {
  SocialContainer,
  SocialIcon,
  SocialIconContainer,
} from "../../tools/globalStyles.jsx";

import PinDropIcon from "@mui/icons-material/PinDrop";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import { Link } from "react-router-dom";
import ClickLogo from "../SubComponents/Logo/ClickLogo.jsx";

import Icon from "react-icons-kit";
import { companySocials } from "../../Data/data";

import { useDispatch } from "react-redux";
import { changePage } from "../../redux/currentPageRedux";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Left>
        <ClickLogo />
        <Desc>
          Composing high-fidelity manufacturing pipelines to get parts out of
          your head and into your hands.
          <br />
          <br />
          You know the part, we know the path.
        </Desc>
        <SocialContainer>
          {companySocials.map((account) => (
            <a
              href={account.link}
              target="_blank"
              rel="noreferrer"
              title={account.linkTitle}
              key={account.id}
            >
              <SocialIconContainer>
                <SocialIcon color={account.color}>
                  <Icon icon={account.icon} size={"60%"} />
                </SocialIcon>
              </SocialIconContainer>
            </a>
          ))}
        </SocialContainer>
      </Left>
      <Center>
        <Title>Helpful Links</Title>
        <List>
          <ListItem>
            <Link
              onClick={() => dispatch(changePage("home"))}
              to="/home/#"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => dispatch(changePage("cart"))}
              to="/mycart/#"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => dispatch(changePage("catalog"))}
              to="/catalog/hardware"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Hardware
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => dispatch(changePage("catalog"))}
              to="/catalog/anesthesia"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Anesthesia
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => dispatch(changePage("custom"))}
              to="/custom/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Custom Parts
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => dispatch(changePage("privacy"))}
              to="/about/privacy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => dispatch(changePage("terms"))}
              to="/about/terms"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Terms of Service
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => dispatch(changePage("return"))}
              to="/about/return"
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
          Palo Alto CA, 94303
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
