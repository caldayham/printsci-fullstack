import React from "react";
import {
  ContentContainer,
  MainButton,
  MainContainer,
  MainTitle,
} from "../../tools/globalStyles";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userRedux";

const AccountPage = () => {
  const dispatch = useDispatch();

  const handleLogOutClick = () => {
    console.log("log out clicked");
    dispatch(logoutUser());
    window.location.reload();
  };

  return (
    <MainContainer>
      <MainTitle>Account Page</MainTitle>
      <ContentContainer>
        <MainButton onClick={handleLogOutClick}>Log Out</MainButton>
      </ContentContainer>
    </MainContainer>
  );
};

export default AccountPage;
