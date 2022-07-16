import React, { useState } from "react";
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
  LocalMinorLink,
  BadgeWrapper,
  MobileMenu,
  NavLinkBar,
  LocalLink,
} from "./styles.jsx";

import { Badge } from "@mui/material";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ClickLogo from "../SubComponents/Logo/ClickLogo";

import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../redux/currentPageRedux";
import { changeOverlay } from "../../redux/overlayRedux.js";
import { CustomLink } from "../../tools/globalStyles.jsx";
import LinkMenu from "./LinkMenu.jsx";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [showingMobileMenu, setShowingMobileMenu] = useState(false);

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
          <LinkMenu
            showingMobileMenu={showingMobileMenu}
            setShowingMobileMenu={setShowingMobileMenu}
          />
        </Center>
        <Right>
          {!useSelector((state) => state.user.currentUser) && (
            <MenuItem>
              <LocalMinorLink onClick={() => dispatch(changeOverlay(true))}>
                Login or <br />
                Register
              </LocalMinorLink>
            </MenuItem>
          )}
          {useSelector((state) => state.user.currentUser) && (
            <CustomLink to="/myaccount">
              <BadgeWrapper>
                <Badge>
                  <ManageAccountsIcon style={{ fontSize: "inherit" }} />
                </Badge>
              </BadgeWrapper>
            </CustomLink>
          )}
          <MenuItem>
            <CustomLink
              to="/mycart"
              onClick={() => dispatch(changePage("cart"))}
            >
              <BadgeWrapper>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingBagOutlinedIcon style={{ fontSize: "inherit" }} />
                </Badge>
              </BadgeWrapper>
            </CustomLink>
          </MenuItem>
        </Right>
      </Wrapper>
      <MobileMenu showingMobileMenu={showingMobileMenu}>
        <NavLinkBar>
          <CustomLink to="/catalog">
            <LocalLink thisPage={"catalog"}>Catalog</LocalLink>
          </CustomLink>
          <CustomLink to="/custom">
            <LocalLink thisPage={"custom"}>Custom</LocalLink>
          </CustomLink>
          <CustomLink to="/research">
            <LocalLink thisPage={"research"}>Research</LocalLink>
          </CustomLink>
          <CustomLink to="/about">
            <LocalLink thisPage={"about"}>About Us</LocalLink>
          </CustomLink>
        </NavLinkBar>
      </MobileMenu>
    </Container>
  );
};

export default Navbar;
