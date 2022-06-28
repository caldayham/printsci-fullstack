import { Container, Logo, LogoImageBox, LogoImage, LogoTitle } from "./styles";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePage } from "../../../redux/currentPageRedux";

const ClickLogo = () => {
  const dispatch = useDispatch();

  return (
    <Container onClick={() => dispatch(changePage("home"))}>
      <Link to={`/home/#`} style={{ textDecoration: "none" }}>
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
