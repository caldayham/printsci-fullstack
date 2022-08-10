import styled from "styled-components";

const AbstractBox = styled.div`
  height: 200px;
  overflow: scroll;
  overflow-x: hidden;
  font-weight: 100;
  padding: 10px;
  margin-top: 20px;
  color: rgb(100, 100, 100);

  transition: all 0.1s ease;
  background-color: white;
`;

const LayeredImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

const ImageLayer = styled.img`
  position: absolute;
  top: 0px;
  width: 100%;

  transition: all 0.1s ease;
`;

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 40px;
  border-left: 1px solid rgb(200, 200, 200);
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
    width: 110%;
  }

  &:hover ${AbstractBox} {
    background-color: rgb(231, 241, 255);
    height: 200px;
  }
`;

export {
  HoverCardWrapper,
  ImageLayer,
  LayeredImgWrapper,
  AbstractBox,
  RightWrapper,
};
