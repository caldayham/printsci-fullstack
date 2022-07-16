import React from "react";
import { CustomLink } from "../../tools/globalStyles";
import { LocalLink, MobileNav, NavLinkBar } from "./styles";

import MenuIcon from "@mui/icons-material/Menu";

const LinkMenu = ({ showingMobileMenu, setShowingMobileMenu }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
      <MobileNav
        onClick={() =>
          setShowingMobileMenu((prev) => !prev) & console.log(showingMobileMenu)
        }
        showingMobileMenu={showingMobileMenu}
      >
        <MenuIcon style={{ width: "40px", height: "40px" }} />
      </MobileNav>
    </div>
  );
};

export default LinkMenu;
