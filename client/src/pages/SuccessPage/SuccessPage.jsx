import React, { useEffect } from "react";
import {
  MainContainer,
  Title,
  ShopNowButton,
  CustomLink,
} from "../../tools/globalStyles";
import { Container } from "./styles";

import { useDispatch } from "react-redux";
import { changePage } from "../../redux/currentPageRedux";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);

  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("checkout/success"));
    };
    updatePage();
  });

  return (
    <MainContainer>
      <Container>
        <Title>Your purchase was successful!</Title>
        <Container style={{ width: "220px", gap: "10px" }}>
          <CustomLink to={"/research"} style={{ width: "inherit" }}>
            <ShopNowButton style={{ width: "inherit" }}>
              Learn more about our amazing research communtiy!
            </ShopNowButton>
          </CustomLink>
          <CustomLink to={`/catalog/all`} style={{ width: "inherit" }}>
            <ShopNowButton style={{ width: "inherit" }}>
              Browse more products
            </ShopNowButton>
          </CustomLink>
        </Container>
      </Container>
    </MainContainer>
  );
};

export default SuccessPage;
