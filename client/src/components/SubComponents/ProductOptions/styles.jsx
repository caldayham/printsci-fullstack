import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  border-top: 0.5px solid rgb(200, 200, 200);
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 200;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
  flex-wrap: wrap;
  padding-top: 5px;
`;

const OptionWrapper = styled.button`
  height: 40px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) =>
    props.currentSelection === props.thisSelection
      ? "rgb(14,14,14)"
      : "rgb(255,255,255)"};
  color: ${(props) =>
    props.currentSelection === props.thisSelection
      ? "rgb(255,255,255)"
      : "rgb(0,0,0)"};
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.currentSelection === props.thisSelection
        ? "rgb(0,0,0)"
        : "rgb(14,14,14)"};
    color: white;
  }
`;
const OptionImg = styled.img`
  width: 60px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OptionText = styled.p`
  font-size: 12px;
`;
const OptionColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${(props) => props.color};
`;

export {
  Container,
  OptionsWrapper,
  Title,
  OptionWrapper,
  OptionImg,
  OptionText,
  OptionColor,
};
