import React from "react";
import {
  HoverCardWrapper,
  AbstractBox,
  LayeredImgWrapper,
  ImageLayer,
} from "./styles";
import { researchData } from "../../Data/researchData";
import { Subtitle } from "../../tools/globalStyles";

const Research = () => {
  console.log(researchData);

  return (
    <div>
      {researchData.map((paper) => (
        <HoverCardWrapper key={paper.uploadNum}>
          <div
            style={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Subtitle style={{ fontSize: "22px", fontWeight: "500" }}>
              {paper.title}
            </Subtitle>
            <AbstractBox>{paper.abstract}</AbstractBox>
          </div>
          <LayeredImgWrapper>
            <ImageLayer src={paper.imageUrl} />
          </LayeredImgWrapper>
        </HoverCardWrapper>
      ))}
    </div>
  );
};

export default Research;
