import React from "react";
import { MainButton, MainContainer, MainTitle } from "../../tools/globalStyles";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userRedux";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    console.log("log out clicked");
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <MainContainer>
      <MainTitle>Account Page</MainTitle>
      <MainButton onClick={handleLogOutClick}>Log Out</MainButton>
    </MainContainer>
  );
};

export default AccountPage;
