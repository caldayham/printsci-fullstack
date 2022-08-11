import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../redux/currentPageRedux";
import {
  MainContainer,
  ShopNowButton,
  Subtitle,
  Title,
} from "../../tools/globalStyles";

import {
  ImageLayer,
  LayeredImgWrapper,
  Wrapper,
  HoverCardWrapper,
  ImageLayerFocus,
} from "./styles";

const CustomPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("custom"));
    };
    updatePage();
  });

  return (
    <MainContainer flexDirection={"column"}>
      <Title>Custom Parts</Title>
      <Subtitle>
        <i style={{ fontSize: "20px" }}>
          'Print Scientific began as a custom part delivery service for research
          labs. We have seen the environment, we have seen the use cases, we
          know the process.'
        </i>{" "}
        <br />{" "}
        <b style={{ fontSize: "22px" }}>
          - Cal Day Ham
          <br />
        </b>
        <div style={{ fontWeight: "100", fontSize: "16px", marginTop: "0px" }}>
          Founder, Print Scientific
        </div>
      </Subtitle>
      <HoverCardWrapper>
        <Wrapper>
          <Subtitle>Have a CAD model?</Subtitle>
          <p style={{ fontWeight: "100" }}>
            Every manufacturing process at Print Scientific starts with a
            computer model. If you already have one, all the better!
          </p>
          <ShopNowButton style={{ width: "100%" }}>Get it built!</ShopNowButton>
        </Wrapper>
        <LayeredImgWrapper>
          <ImageLayerFocus
            src={`${
              process.env.REACT_APP_IMGURL + "display-imgs/cad-part.png"
            }`}
          />
          <ImageLayer
            src={`${
              process.env.REACT_APP_IMGURL + "display-imgs/cad-planes2.png"
            }`}
          />
        </LayeredImgWrapper>
      </HoverCardWrapper>

      <HoverCardWrapper>
        <Wrapper>
          <Subtitle>Replacement, replication, or repair?</Subtitle>
          <p style={{ fontWeight: "100" }}>
            Sometimes you have an old part that needs a repair, or you just
            need, more click below to talk to a build expert today.
          </p>
          <ShopNowButton style={{ width: "100%" }}>Ship it in!</ShopNowButton>
        </Wrapper>
        <LayeredImgWrapper>
          <ImageLayer
            src={`${
              process.env.REACT_APP_IMGURL +
              "display-imgs/broken-display-main.png"
            }`}
          />
          <ImageLayerFocus
            src={`${
              process.env.REACT_APP_IMGURL +
              "display-imgs/broken-display-bit.png"
            }`}
          />
        </LayeredImgWrapper>
      </HoverCardWrapper>

      <HoverCardWrapper>
        <Wrapper>
          <Subtitle>Ideas or Issue?</Subtitle>
          <p style={{ fontWeight: "100" }}>
            At our root we are a company that solves problems through building,
            if you have an idea or issue we can definitely help get you there!
          </p>
          <ShopNowButton style={{ width: "100%" }}>
            Talk with an expert!
          </ShopNowButton>
        </Wrapper>
        <LayeredImgWrapper>
          <ImageLayer
            src={`${
              process.env.REACT_APP_IMGURL +
              "display-imgs/hinge-display-body.png"
            }`}
          />
          <ImageLayerFocus
            src={`${
              process.env.REACT_APP_IMGURL + "display-imgs/hinge-display.png"
            }`}
          />
        </LayeredImgWrapper>
      </HoverCardWrapper>
    </MainContainer>
  );
};

export default CustomPage;
