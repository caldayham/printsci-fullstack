import React from "react";
import { Container, HeaderTitle, AccountIcon } from "./styles";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const Header = () => {
  return (
    <Container>
      <HeaderTitle>Print Scientific Admin Panel</HeaderTitle>
      <AccountIcon>
        <ManageAccountsIcon />
      </AccountIcon>
    </Container>
  );
};

export default Header;
