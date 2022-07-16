import styled from "styled-components";

const LayeredImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  height: 200px;
  align-items: center;
  position: relative;
`;

const ImageLayer = styled.img`
  position: absolute;
  height: 100%;
  z-index: 1;
  transition: all 0.1s ease;
`;

const ImageLayerFocus = styled.img`
  position: absolute;
  height: 100%;
  z-index: 2;

  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 200px;
  align-items: ${(props) => (props.align ? props.align : "left")};
`;

const HoverCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  margin-top: 2%;
  padding: 20px;
  color: black;
  border: 1px solid rgb(200, 200, 200);
  background: rgb(231, 241, 255);
  margin-bottom: 0%;

  transition: all 0.1s ease;
  &:hover {
    background: rgb(193, 220, 255);
  }

  &:hover ${ImageLayer} {
    height: 110%;
  }

  &:hover ${ImageLayerFocus} {
    height: 140%;
  }
`;

export {
  Wrapper,
  LayeredImgWrapper,
  ImageLayer,
  HoverCardWrapper,
  ImageLayerFocus,
};
