import React from "react";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterSize,
  FilterMaterial,
  AddContainer,
  AmountContainer,
  Amount,
  ProductCheckoutWrapper,
  ProductCheckout,
  ActionBin,
  SetupBin,
} from "./styles";
import {
  FilterContainer,
  Filter,
  FilterTitle,
  Select,
  CheckoutButton,
} from "../../globalStyles";

import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import { Add, Remove } from "@mui/icons-material";

const ProductPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image
              src="/images/SLA_SteriFlow_assembly_img2.PNG"
              alt="product image"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>TFlow Nonstereotaxic Nose Cone</Title>
            <Price>$87.42 USD</Price>
            <Desc>
              Buit for small rodents such as rats, mice, and gerbils. Not
              effective for guineapigs, click HERE for guineapig products
            </Desc>
            <FilterContainer>
              <Filter>
                <FilterTitle>Material</FilterTitle>
                <FilterMaterial color="rgb(0,0,255)">PLA</FilterMaterial>
                <FilterMaterial color="rgb(0,255,0)">PBS</FilterMaterial>
                <FilterMaterial color="rgb(255,0,0)">PVC</FilterMaterial>
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <Select>
                  <FilterSize>S</FilterSize>
                  <FilterSize>M</FilterSize>
                  <FilterSize>L</FilterSize>
                  <FilterSize>XL</FilterSize>
                </Select>
              </Filter>
            </FilterContainer>
          </InfoContainer>
        </Wrapper>
        <ProductCheckoutWrapper>
          <ProductCheckout>
            <SetupBin>
              <Price>$87.42 </Price>
              <AddContainer>
                <AmountContainer>
                  <Remove />
                  <Amount>2</Amount>
                  <Add />
                </AmountContainer>
              </AddContainer>
            </SetupBin>
            <ActionBin>
              <CheckoutButton>Add to Cart</CheckoutButton>
              <CheckoutButton>Buy Now</CheckoutButton>
              <CheckoutButton>Customize</CheckoutButton>
            </ActionBin>
          </ProductCheckout>
        </ProductCheckoutWrapper>
      </Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
