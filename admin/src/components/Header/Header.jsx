import React from "react";
import { Container, HeaderTitle, IconWrapper, AccountIcon } from "./styles";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  function handleAccountIconClick() {
    navigate("/account");
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
