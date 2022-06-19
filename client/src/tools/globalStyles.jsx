import styled from "styled-components";

const ShopNowButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  color: rgb(10, 10, 10);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    font-size: 22px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIconContainer = styled.div`
  width: 45px;
  margin-right: 10px;
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

  margin-right: 20px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    width: 42px;
    height: 42px;
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
  padding: 0px 20px 0px 20px;
`;

const Title = styled.h1``;

const Subtitle = styled.h3`
  padding-top: 40px;
`;

const Paragraph = styled.p`
  width: 50%;
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
};
