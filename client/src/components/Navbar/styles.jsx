import styled from "styled-components";
import { mobile, tablet } from "../../tools/responsive";

import { useSelector } from "react-redux";

const Container = styled.div`
  display: relative;
  height: auto;
  position: fixed;
  top: 50px;
  width: 100vw;
  z-index: 5;
  color: white;
  ${mobile({ height: "50px" })}

  transition: all 0.2s ease;
  background-color: rgb(0, 0, 0, 0.95);
  &:hover {
    background-color: rgb(0, 0, 0, 1);
  }
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

const NavLinkBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0% 10% 0% 10%;

  ${tablet({ display: "none" })}
`;

const LocalLink = styled.p`
  font-size: 20px;
  font-weight: 400;
  border-bottom: ${(props) =>
    useSelector((state) => state.currentPage.page) === props.thisPage
      ? "2px solid white"
      : "auto"};

  &:hover {
    border-bottom: 2px solid white;
  }
`;

const LocalMinorLink = styled.p`
  font-size: 14px;
  font-weight: 200;

  &:hover {
    text-decoration: underline;
  }
`;

const BadgeWrapper = styled.div`
  font-size: 32px;
  transition: all 0.1s ease;
  width: 30px;

  &:hover {
    font-size: 34px;
  }
`;

const MobileNav = styled.div`
  display: none;
  ${tablet({ display: "block" })}

  &:hover {
    border: 2px solid white;
  }

  border: ${(props) => (props.showingMobileMenu ? "2px solid white" : "none")};
`;

const MobileMenu = styled.div`
  display: ${(props) => (props.showingMobileMenu ? "absolute" : "none")};
  height: 60px;
  background-color: rgb(14, 14, 14);
  border: 2px solid white;

  z-index: 8;
`;

export {
  MobileMenu,
  MobileNav,
  BadgeWrapper,
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Right,
  MenuItem,
  NavLinkBar,
  LocalLink,
  LocalMinorLink,
};
