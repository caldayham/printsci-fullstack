import React from "react";
import {
  HoverCardWrapper,
  MainContainer,
  ShopNowButton,
  Subtitle,
  Title,
} from "../../tools/globalStyles";

import { Wrapper } from "./styles";

const CustomPage = () => {
  console.log(
    `${
      process.env.REACT_APP_IMGURL + "/images/SLA_SteriFlow_assembly_img1.PNG"
    }`
  );

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
      <HoverCardWrapper>
        <Wrapper>
          <Subtitle>CAD Model to Part</Subtitle>
          <ShopNowButton style={{ width: "100%" }}>Get it built!</ShopNowButton>
        </Wrapper>
        <Wrapper align="center">
          <img
            src={`${process.env.REACT_APP_IMGURL + "/images/tflow-cad.PNG"}`}
            alt=""
            style={{ height: "200px", width: "200px" }}
          />
        </Wrapper>
      </HoverCardWrapper>

      <HoverCardWrapper>
        <Wrapper>
          <Subtitle>Replacement, Replication, Repair</Subtitle>
          <ShopNowButton style={{ width: "100%" }}>Ship it in!</ShopNowButton>
        </Wrapper>
        <Wrapper align="center">
          <img
            src={`${
              process.env.REACT_APP_IMGURL +
              "/images/SLA_SteriFlow_assembly_img1.PNG"
            }`}
            alt=""
            style={{ height: "200px", width: "200px" }}
          />
        </Wrapper>
      </HoverCardWrapper>

      <HoverCardWrapper>
        <Wrapper>
          <Subtitle>Ideas or Issue to Part</Subtitle>
          <ShopNowButton style={{ width: "100%" }}>
            Talk with a build expert!
          </ShopNowButton>
        </Wrapper>
        <Wrapper align="center">
          <img
            src={`${
              process.env.REACT_APP_IMGURL +
              "/images/SLA_SteriFlow_assembly_img1.PNG"
            }`}
            alt=""
            style={{ height: "200px", width: "200px" }}
          />
        </Wrapper>
      </HoverCardWrapper>
    </MainContainer>
  );
};

export default CustomPage;
