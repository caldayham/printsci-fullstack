import React from "react";
import {
  HoverCardWrapper,
  MainContainer,
  ShopNowButton,
  Subtitle,
  Title,
} from "../../tools/globalStyles";

const CustomPage = () => {
  return (
    <MainContainer flexDirection={"column"}>
      <Title>Custom Parts</Title>
      <Subtitle>
        <i style={{ fontSize: "20px" }}>
          'Print Scientific has provided the best custom part delivery
          experience our lab has needed. Mostly because they understand why we
          need the [custom part] thing'
        </i>{" "}
        <br /> <b style={{ fontSize: "22px" }}>- Dr. Agarwal</b>
      </Subtitle>
      <HoverCardWrapper style={{ maxHeight: "120px" }}>
        <Subtitle>CAD Model to Part</Subtitle>
        <ShopNowButton>Send it to us!</ShopNowButton>
      </HoverCardWrapper>
      <HoverCardWrapper style={{ maxHeight: "120px" }}>
        <Subtitle>Replacement, Repair, or Duplication of Parts</Subtitle>
        <ShopNowButton>Ship it in!</ShopNowButton>
      </HoverCardWrapper>
      <HoverCardWrapper style={{ maxHeight: "120px" }}>
        <Subtitle>Idea or Issue to Part</Subtitle>
        <ShopNowButton>Chat with a build expert!</ShopNowButton>
      </HoverCardWrapper>
    </MainContainer>
  );
};

export default CustomPage;
