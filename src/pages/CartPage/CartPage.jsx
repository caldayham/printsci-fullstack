import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {
  Container,
  Wrapper,
  TopTexts,
  TopText,
  Title,
  Top,
  Bottom,
  TopButton,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductMaterial,
  ProductSize,
  PriceDetail,
  MaterialSwatch,
} from "./styles";
import ProductAmount from "../../components/SubComponents/ProductAmount/ProductAmount";

const CartPage = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Cart (4)</TopText>
            <TopText>Saved (2)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="/images/StableFlow_Box1_img2.PNG" />
                <Details>
                  <ProductName>
                    <b>Product:</b> TFlow Nonstereotaxic Anesthesia Nose Cone
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 21613
                  </ProductId>
                  <ProductMaterial>
                    <b>Material:</b> PLA Plastic
                    <MaterialSwatch color="#cf7500" />
                  </ProductMaterial>
                  <ProductSize>
                    <b>Size:</b> Medium
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmount />
              </PriceDetail>
            </Product>
          </Info>
          <Summary>summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default CartPage;
