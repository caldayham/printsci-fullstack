import React from "react";
import {} from "../../globalStyles";
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Right,
  MenuItem,
  Logo,
  NavLinkBar,
  Link as LocalLink,
  LogoImage,
  LogoImageBox,
  LogoTitle,
  LocalMinorLink,
} from "./styles.jsx";

import { Badge } from "@mui/material";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <YoutubeSearchedForIcon
              style={{ color: "rgb(40,40,40)", fontSize: 20 }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>
              <LogoImageBox>
                <LogoImage src="/favicon.ico" alt="image" />
              </LogoImageBox>
              <LogoTitle>Print Scientific</LogoTitle>
            </Logo>
          </Link>
          <NavLinkBar>
            <Link
              to="/catalogue"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LocalLink>Catalogue</LocalLink>
            </Link>
            <Link
              to="/custom"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LocalLink>Custom</LocalLink>
            </Link>
            <Link
              to="/research"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LocalLink>Research</LocalLink>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LocalLink>About Us</LocalLink>
            </Link>
          </NavLinkBar>
        </Center>
        <Right>
          <MenuItem>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LocalMinorLink>
                Login or <br />
                Register
              </LocalMinorLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingBagOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
