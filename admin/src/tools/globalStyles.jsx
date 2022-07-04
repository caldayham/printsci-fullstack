import styled from "styled-components";

const MainContainer = styled.div`
  padding: 0px;
  width: 100%;

  position: relative;
`;

const ContentContainer = styled.div`
  padding: 20px;
  overflow: scroll;
  width: calc(100vw - 260px);
  height: calc(100vh - 160px);
`;

const MainTitle = styled.h1`
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0px;

  position: sticky;
  top: 0px;

  background-color: rgb(255, 255, 255);
  z-index: 5;
  border-bottom: 1px solid rgb(200, 200, 200);
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

export { MainContainer, MainTitle, MainButton, ContentContainer };
