import React from "react";
import { Container, Left, Center, Right } from "./styles.jsx";
import { LogoImage, LogoTitle } from "../../globalStyles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <LogoImage src="/favicon.ico" alt="image" />
        <LogoTitle>Print Scientific</LogoTitle>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
