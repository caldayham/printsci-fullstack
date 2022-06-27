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
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 30px 0px 0px;
`;

const CartItems = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductMaterial = styled.span`
  display: flex;
`;

const MaterialSwatch = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  border-radius: 50%;

  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

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
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
`;

export {
  ProductCheckout,
  SummaryItem,
  SummaryItemText,
  SummaryTitle,
  ProductPrice,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductMaterial,
  ProductSize,
  CartItems,
  TopText,
  TopTexts,
  PriceDetail,
  MaterialSwatch,
  SummaryItemPrice,
  CartContent,
  CartCheckout,
};
