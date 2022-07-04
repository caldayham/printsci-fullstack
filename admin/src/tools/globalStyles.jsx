import styled from "styled-components";

const MainContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

const MainTitle = styled.h1`
  padding: 0px;
  margin: 0px;
`;

const MainButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background-color: rgb(14, 14, 14);
    color: white;
  }
`;

export { MainContainer, MainTitle, MainButton };
