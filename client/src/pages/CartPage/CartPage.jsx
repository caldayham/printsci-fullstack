import React from "react";
import { useSelector } from "react-redux";

import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductAmount from "../../components/SubComponents/ProductAmount/ProductAmount";

import {
  TopTexts,
  TopText,
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
  SummaryItem,
  SummaryItemText,
  SummaryTitle,
  SummaryItemPrice,
  ProductCheckout,
  CartContent,
  CartCheckout,
} from "./styles";
import { CheckoutButton, MainContainer, Title } from "../../tools/globalStyles";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <Announcement />
      <Navbar />
      <MainContainer>
        {/*here is the left side content for the cart content*/}
        <CartContent>
          <Title>Your Cart</Title>
          <TopTexts>
            <TopText>Cart (4)</TopText>
            <TopText>Saved (2)</TopText>
          </TopTexts>
          <Info>
            {cart.products.map((product, i) => (
              <Product key={i}>
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
            ))}
          </Info>
        </CartContent>
        {/*here is the right side content for the checkout*/}
        <CartCheckout>
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
        </CartCheckout>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default CartPage;
