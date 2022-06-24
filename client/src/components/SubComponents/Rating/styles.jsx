import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  color: rgb(0, 110, 255);
  flex-wrap: wrap;
`;

const RatingLayers = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${(props.size * 1008) / 4466}px`};
  display: flex;
  position: relative;
  margin-right: 10px;
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
  padding-right: ${(props) => `${props.paddingRight}px`};
  padding-left: ${(props) => `${props.paddingLeft}px`};
  font-weight: 00;

  &:hover {
    text-decoration: underline;
  }
`;

export { Container, RatingLink, RatingLayers, TopLayer, BottomLayer };
