import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0px;
  z-index: 5;

  background-color: rgb(14, 14, 14);
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgb(0, 0, 0);
  }
`;

const HeaderTitle = styled.h1`
  padding-left: 20px;
`;

const AccountIcon = styled.div`
  width: 90%;
  height: 90%;

  transition: all 0.1s ease;
  &:hover {
    width: 100%;
    height: 100%;
  }
`;

const IconWrapper = styled.div`
  margin-right: 20px;

  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, HeaderTitle, IconWrapper, AccountIcon };
