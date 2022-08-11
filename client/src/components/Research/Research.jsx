import React from "react";
import {
  HoverCardWrapper,
  AbstractBox,
  LayeredImgWrapper,
  ImageLayer,
  RightWrapper,
} from "./styles";
import { researchData } from "../../Data/researchData";
import { CustomLink, ShopNowButton, Subtitle } from "../../tools/globalStyles";

const Research = () => {
  return (
    <div>
      {researchData.map((paper) => (
        <HoverCardWrapper key={paper.uploadNum}>
          <div
            style={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingRight: "40px",
            }}
          >
            <div>
              <Subtitle style={{ fontSize: "22px", fontWeight: "500" }}>
                {paper.title}
              </Subtitle>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "100",
                  color: "rgb(100, 100, 100)",
                }}
              >
                <b>{paper.mainAuthors}</b>, {paper.authors}
              </p>
            </div>
            <div>
              <AbstractBox>
                <b>Abstract</b>
                <br />
                {" " + paper.abstract}
              </AbstractBox>
              <ShopNowButton style={{ marginTop: "20px", width: "100%" }}>
                Learn More
              </ShopNowButton>
            </div>
          </div>
          <RightWrapper>
            <Subtitle style={{ fontSize: "22px", fontWeight: "500" }}>
              Parts Used
            </Subtitle>
            <LayeredImgWrapper>
              <ImageLayer
                src={process.env.REACT_APP_IMGURL + paper.partImgUrls[0]}
              />
            </LayeredImgWrapper>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "100",
                color: "rgb(100, 100, 100)",
              }}
            >
              <b>TFlow Nose Cone:</b> size: medium, material: nylon 12
            </p>
            <CustomLink to={"/product/62b8a35449c2cace968db2e8"}>
              <ShopNowButton style={{ marginTop: "20px", width: "100%" }}>
                Shop Now
              </ShopNowButton>
            </CustomLink>
          </RightWrapper>
        </HoverCardWrapper>
      ))}
    </div>
  );
};

export default Research;
