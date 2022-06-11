import styled from "styled-components";

const Container = styled.div`
  height: auto;
  position: fixed;
  top: 50px;
  width: 100vw;
  z-index: 5;
  background-color: rgb(0, 0, 0, 0.9);
  color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: rgb(255, 255, 255);
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2vw;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinkBar = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: space-between;
  padding: 0% 10% 0% 10%;
`;

const Link = styled.p`
  font-size: 20px;
  font-weight: 200;
`;

export {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Right,
  MenuItem,
  Logo,
  NavLinkBar,
  Link,
};
