import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 14vh;
  padding: 20px;
  min-height: 86vh;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 200;
  font-size: 22px;
  cursor: pointer;
  background-color: white;

  background-color: ${(props) =>
    props.type === "filled" ? "rgb(25, 25, 25)" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};

  &:hover {
    background-color: ${(props) =>
      props.type === "filled" ? "rgb(0, 0, 0)" : "rgb(238, 238, 238)"};
  }
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 30px 0px 0px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
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

const Summary = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
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
  padding: 50px;
  height: 50%;
  width: 15%;
  margin: 20px;
  position: fixed;
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
  Hr,
  ProductPrice,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductMaterial,
  ProductSize,
  Info,
  Summary,
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopText,
  TopTexts,
  PriceDetail,
  MaterialSwatch,
  SummaryItemPrice,
};
