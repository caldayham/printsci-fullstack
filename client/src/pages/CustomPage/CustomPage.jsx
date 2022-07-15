import React from "react";
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
              process.env.REACT_APP_IMGURL + "display-imgs/cad-planes.png"
            }`}
          />
        </LayeredImgWrapper>
      </HoverCardWrapper>

      <HoverCardWrapper>
        <Wrapper>
          <Subtitle>Replacement, replication, or repair?</Subtitle>
          <ShopNowButton style={{ width: "100%" }}>Ship it in!</ShopNowButton>
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

      <HoverCardWrapper>
        <Wrapper>
          <Subtitle>Ideas or Issue?</Subtitle>
          <ShopNowButton style={{ width: "100%" }}>
            Talk with a build expert!
          </ShopNowButton>
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
    </MainContainer>
  );
};

export default CustomPage;
