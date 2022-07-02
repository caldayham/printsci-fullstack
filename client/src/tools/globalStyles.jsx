import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const MainContainer = styled.div`
  margin-top: 170px;
  margin-left: 6vw;
  margin-right: 6vw;
  margin-bottom: 50px;
  min-height: 86vh;

  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "auto"};
`;

const ShopNowButton = styled.button`
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

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIconContainer = styled.button`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.1s ease;

  &:hover {
    width: 44px;
    height: 44px;
  }
`;

const FilterContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  height: auto;
`;

const Filter = styled.div`
  display: flex;
  align-items: top;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const FilterOption = styled.option``;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: rgb(255, 255, 255, 1);
`;

const CheckoutButton = styled.button`
  padding: 5px 10px 5px 10px;
  margin: 5px 0px 5px 0px;
  background-color: rgb(25, 25, 25);
  color: white;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.1s ease;

  &:hover {
    background-color: rgb(0, 0, 0);
  }
`;

const StaticContainer = styled.div`
  min-height: 82vh;
  margin-top: 18vh;
  padding: 0px 20px 100px 20px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  background-color: white;
`;

const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
`;
const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 200;
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  width: ${(props) => (props.width ? props.width : null)};
  min-width: ${(props) => (props.width ? "300px" : null)};
`;

const PageSection = styled.div`
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "40px"};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "40px")};
  border-bottom: ${(props) =>
    props.borderBottom == null ? "1px solid rgb(200, 200, 200)" : "none"};
`;

export {
  StaticContainer,
  SocialIconContainer,
  Title,
  Subtitle,
  Paragraph,
  ShopNowButton,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterOption,
  Select,
  CheckoutButton,
  SocialContainer,
  SocialIcon,
  MainContainer,
  CustomLink,
  PageSection,
};
