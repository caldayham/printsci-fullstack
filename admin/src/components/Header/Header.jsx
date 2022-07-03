import React from "react";
import { Container, HeaderTitle, IconWrapper, AccountIcon } from "./styles";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const Header = () => {
  function handleAccountIconClick() {
    console.log("AccountIcon Clicked");
  }

  return (
    <Container>
      <HeaderTitle>Print Scientific Admin Panel</HeaderTitle>
      <IconWrapper>
        <AccountIcon onClick={handleAccountIconClick}>
          <ManageAccountsIcon style={{ width: "100%", height: "100%" }} />
        </AccountIcon>
      </IconWrapper>
    </Container>
  );
};

export default Header;
