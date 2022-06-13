import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: auto;
  position: fixed;
  top: 50px;
  width: 100vw;
  z-index: 5;
  background-color: rgb(0, 0, 0, 0.9);
  color: white;
  ${mobile({ height: "50px" })}
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

const LogoImageBox = styled.div`
  width: 70px;
  height: 70px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  display: flex;
  width: 90%;
  transition: all 0.1s ease;
`;

const LogoTitle = styled.h1`
  font-weight: bold;
  font-size: 30px;
  transition: all 0.1s ease;
  line-height: 90%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 250px;
  height: 60px;

  &:hover ${LogoImage} {
    width: 100%;
  }
  &:hover ${LogoTitle} {
    font-size: 32px;
  }
`;

const NavLinkBar = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  padding: 0% 10% 0% 10%;
`;

const Link = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const LocalMinorLink = styled.p`
  font-size: 14px;
  font-weight: 200;

  &:hover {
    text-decoration: underline;
  }
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
  LogoImage,
  LogoImageBox,
  LogoTitle,
  LocalMinorLink,
};
