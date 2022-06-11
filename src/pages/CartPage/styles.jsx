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
    props.type === "filled" ? "#d9ebfc" : "transparent"};
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

const Summary = styled.div`
  flex: 1;
`;

const Product = styled.div``;
const ProductDetail = styled.div``;
const Image = styled.img``;
const Details = styled.div``;
const ProductName = styled.div``;
const ProductId = styled.div``;
const ProductMaterial = styled.div``;
const ProductSize = styled.div``;

const PriceDetail = styled.div``;

export {
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
};
