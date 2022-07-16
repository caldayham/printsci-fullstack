import styled from "styled-components";

const AbstractBox = styled.div`
  height: 100px;
  overflow: scroll;
  font-weight: 100;
  border: 1px solid rgb(14, 14, 14);
  padding: 10px;
`;

const LayeredImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  height: 100px;
  align-items: end;
  position: relative;
`;

const ImageLayer = styled.img`
  position: absolute;
  height: 100%;

  transition: all 0.1s ease;
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
`;

export { HoverCardWrapper, ImageLayer, LayeredImgWrapper, AbstractBox };
