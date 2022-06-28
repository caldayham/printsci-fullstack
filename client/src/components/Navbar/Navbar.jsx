import React from "react";
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

import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../redux/currentPageRedux";

const Navbar = ({ setIsShowLoginOverlay }) => {
  const quantity = useSelector((state) => state.cart.quantity);

  const dispatch = useDispatch();

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
              <LocalLink
                onClick={() => dispatch(changePage("catalog"))}
                thisPage={"catalog"}
              >
                Catalog
              </LocalLink>
            </Link>
            <Link
              to="/custom"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LocalLink
                onClick={() => dispatch(changePage("custom"))}
                thisPage={"custom"}
              >
                Custom
              </LocalLink>
            </Link>
            <Link
              to="/research"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LocalLink
                onClick={() => dispatch(changePage("research"))}
                thisPage={"research"}
              >
                Research
              </LocalLink>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LocalLink
                onClick={() => dispatch(changePage("about"))}
                thisPage={"about"}
              >
                About Us
              </LocalLink>
            </Link>
          </NavLinkBar>
        </Center>
        <Right>
          <MenuItem>
            <LocalMinorLink onClick={() => setIsShowLoginOverlay(true)}>
              Login or <br />
              Register
            </LocalMinorLink>
          </MenuItem>
          <MenuItem>
            <Link
              to="/mycart"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => dispatch(changePage("cart"))}
            >
              <BadgeWrapper>
                <Badge badgeContent={quantity} color="primary">
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
