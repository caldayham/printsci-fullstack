import styled from "styled-components";

const Body = styled.div`
  background-color: #ffffff;
`;

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

export { Body, ShopNowButton };
