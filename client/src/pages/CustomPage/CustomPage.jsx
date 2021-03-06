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
          'Print Scientific has provided the best custom part delivery
          experience our lab has needed. Mostly because they understand why we
          need the [custom part] thing in the first place.'
        </i>{" "}
        <br /> <b style={{ fontSize: "22px" }}>- Dr. Agarwal</b>
      </Subtitle>
      <HoverCardWrapper>
        <Wrapper>
          <Subtitle>Have a CAD model?</Subtitle>
          <p style={{ fontWeight: "100" }}>
            We specialize in taking models from computer to physical.
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
            Sometimes you have an old part that needs some love or some friends,
            click below to talk to a build expert today.
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
            Talk with a build expert!
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
