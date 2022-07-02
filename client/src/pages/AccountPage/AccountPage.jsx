import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MainContainer,
  Title,
  ShopNowButton,
  Paragraph,
} from "../../tools/globalStyles";

import { changePage } from "../../redux/currentPageRedux";
import { changeOverlay } from "../../redux/overlayRedux.js";
import { logoutUser } from "../../redux/userRedux";

const AccountPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("account"));
    };
    updatePage();
  });

  const handleLogOutClick = () => {
    console.log("log out clicked");
    dispatch(logoutUser());
  };

  const handleLogInClick = () => {
    dispatch(changeOverlay(true));
  };

  return (
    <MainContainer flexDirection={"column"}>
      <Title>AccountPage</Title>
      {useSelector((state) => state.user.currentUser) ? (
        <ShopNowButton onClick={handleLogOutClick}>Log Out</ShopNowButton>
      ) : (
        <ShopNowButton onClick={handleLogInClick}>Log In</ShopNowButton>
      )}
      <Paragraph>
        This page will display relevant account information and settings.
      </Paragraph>
    </MainContainer>
  );
};

export default AccountPage;
