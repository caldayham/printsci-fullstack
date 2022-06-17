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
  ProductPrice,
  Hr,
  SummaryItem,
  SummaryItemText,
  SummaryTitle,
  SummaryItemPrice,
  ProductCheckout,
} from "./styles";
import ProductAmount from "../../components/SubComponents/ProductAmount/ProductAmount";
import { CheckoutButton } from "../../tools/globalStyles";

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
                    <b>ID:</b> 95021613
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
                <ProductPrice>$87.42</ProductPrice>
                <ProductAmount />
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src="/images/SLA_SteriFlow_assembly_img1.PNG" />
                <Details>
                  <ProductName>
                    <b>Product:</b> SteriFlow Hardware set
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 95023824
                  </ProductId>
                  <ProductMaterial>
                    <b>Material:</b> Aluminum / PLA Plastic
                    <MaterialSwatch color="#5a5a5a" />
                  </ProductMaterial>
                  <ProductSize>
                    <b>Size:</b> small
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>$322.82</ProductPrice>
                <ProductAmount />
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <ProductCheckout>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$410.24</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$18.00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$-18.00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$410.24</SummaryItemPrice>
              </SummaryItem>
              <CheckoutButton>Checkout</CheckoutButton>
            </ProductCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default CartPage;
