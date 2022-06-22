import styled from "styled-components";

const ShopNowButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  color: rgb(10, 10, 10);
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    font-size: 22px;
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
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
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

const Title = styled.h1``;

const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
`;

const Paragraph = styled.p`
  width: 50%;
  font-size: 18px;
  font-weight: 200;
`;

const HorizontalLine = styled.hr`
  height: 1px;
  border: none;
  background-color: black;
  margin: 40px 0px;
`;

export {
  HorizontalLine,
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
};