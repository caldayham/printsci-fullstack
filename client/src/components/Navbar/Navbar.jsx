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
  NavLinkBar,
  LocalLink,
  LocalMinorLink,
  BadgeWrapper,
} from "./styles.jsx";

import { Badge } from "@mui/material";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { Link } from "react-router-dom";
import ClickLogo from "../SubComponents/Logo/ClickLogo";

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
          <ClickLogo />
          <NavLinkBar>
            <Link
              to="/catalog"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LocalLink>Catalog</LocalLink>
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
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LocalMinorLink>
                Login or <br />
                Register
              </LocalMinorLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              <BadgeWrapper>
                <Badge badgeContent={4} color="primary">
                  <ShoppingBagOutlinedIcon style={{ fontSize: "inherit" }} />
                </Badge>
              </BadgeWrapper>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
