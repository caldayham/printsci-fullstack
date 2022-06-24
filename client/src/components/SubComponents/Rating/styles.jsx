import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  color: rgb(0, 110, 255);
`;

const RatingLayers = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${(props.size * 1008) / 4466}px`};
  display: flex;
  position: relative;
`;

const TopLayer = styled.div`
  position: absolute;
  z-index: 2;
`;

const BottomLayer = styled.div`
  position: absolute;
  z-index: 1;
`;

const RatingLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 0px 10px;
  font-weight: 00;

  &:hover {
    text-decoration: underline;
  }
`;

export { Container, RatingLink, RatingLayers, TopLayer, BottomLayer };
