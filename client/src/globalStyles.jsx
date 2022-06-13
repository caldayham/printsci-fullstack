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

const LogoImage = styled.img`
  width: 60px;
  padding-right: 20px;
`;

const LogoTitle = styled.h1`
  font-weight: bold;
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

export {
  ShopNowButton,
  LogoImage,
  LogoTitle,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterOption,
  Select,
  CheckoutButton,
};
