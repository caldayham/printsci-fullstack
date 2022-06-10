import React from "react";
import { Container, Left, Center, Right, LogoImage, Logo } from "./styles.jsx";

const Footer = () => {
  return (
    <Container>
      <Left>
        <LogoImage src="/favicon.ico" alt="image" />
        <Logo>Print Scientific</Logo>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
