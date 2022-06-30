import styled from "styled-components";

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  padding-right: 50px;
`;

const CartCheckout = styled.div`
  display: flex;
  flex: 1;
`;

const TopTexts = styled.div`
  position: sticky;
  top: 130px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(200, 200, 200);
  background-color: white;
  padding-bottom: 10px;

  z-index: 4;
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 30px 0px 0px;
`;

const CartItems = styled.div`
  flex: 3;
`;

const EditOptions = styled.div`
  opacity: 0;
  width: 180px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.2s ease;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 10px 0px;
  background-color: rgb(231, 241, 255);

  &:hover ${EditOptions} {
    opacity: 1;
  }

  transition: all 0.1s ease;
  &:hover {
    background-color: rgb(193, 220, 255);
  }
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.h1`
  font-weight: 200;
  font-size: 32px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  font-size: 180%;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  font-weight: ${(props) => (props.type === "total" ? "500" : "200")};
  font-size: ${(props) => (props.type === "total" ? "24px" : "16px")};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const ProductCheckout = styled.div`
  padding: 20px;
  height: 50vh;
  position: sticky;
  top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-width: 200px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.2s ease;
  z-index: 4;

  &:hover {
    background-color: rgb(14, 14, 14);
    color: white;
    transform: scale(1.2);
  }
`;

export {
  Icon,
  EditOptions,
  ProductCheckout,
  SummaryItem,
  SummaryItemText,
  SummaryTitle,
  ProductPrice,
  Product,
  ProductDetail,
  Image,
  Details,
  CartItems,
  TopText,
  TopTexts,
  PriceDetail,
  SummaryItemPrice,
  CartContent,
  CartCheckout,
};
