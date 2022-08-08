import {
  Container,
  Logo,
  LogoImageBox,
  LogoImage,
  LogoTitle,
  LogoSlogan,
} from "./styles";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePage } from "../../../redux/currentPageRedux";

const ClickLogo = () => {
  const dispatch = useDispatch();

  return (
    <Container onClick={() => dispatch(changePage("home"))}>
      <Link to={`/home/#`} style={{ textDecoration: "none", color: "white" }}>
        <Logo>
          <LogoImageBox>
            <LogoImage src="/favicon.ico" alt="logo" />
          </LogoImageBox>
          <div>
            <LogoTitle>
              Print <br /> Scientific
            </LogoTitle>
            <LogoSlogan>Make it happen.</LogoSlogan>
          </div>
        </Logo>
      </Link>
    </Container>
  );
};

export default ClickLogo;
