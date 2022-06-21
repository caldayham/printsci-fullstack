import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  ImgContainer,
  SelectedImage,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterSize,
  FilterMaterial,
  ProductCheckoutWrapper,
  ProductCheckout,
  ActionBin,
  SetupBin,
  AddContainer,
  ImageDeck,
  DeckImage,
} from "./styles";
import {
  FilterContainer,
  Filter,
  FilterTitle,
  Select,
  CheckoutButton,
} from "../../tools/globalStyles";

import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import ProductAmount from "../../components/SubComponents/ProductAmount/ProductAmount";

import { useLocation } from "react-router-dom";
import { publicRequest } from "../../tools/requestMethods";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  console.log("next is the product");
  console.log(product);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <ImgContainer>
            <SelectedImage src={product.mainImg} alt="product image" />
            <ImageDeck>
              {product.imgs.map((img, index) => (
                <DeckImage src={img} key={index}></DeckImage>
              ))}
            </ImageDeck>
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Price>{product.price} USD / piece</Price>
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
                <ProductAmount />
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
