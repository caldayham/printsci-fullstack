import { Container, Logo, LogoImageBox, LogoImage, LogoTitle } from "./styles";
import React from "react";
import { Link } from "react-router-dom";

const ClickLogo = () => {
  return (
    <Container>
      <Link to="/home/#" style={{ textDecoration: "none" }}>
        <Logo>
          <LogoImageBox>
            <LogoImage src="/favicon.ico" alt="image" />
          </LogoImageBox>
          <LogoTitle>Print Scientific</LogoTitle>
        </Logo>
      </Link>
    </Container>
  );
};

export default ClickLogo;
