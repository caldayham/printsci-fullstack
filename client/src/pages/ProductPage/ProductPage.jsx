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
  ProductCheckoutWrapper,
  ProductCheckout,
  ActionBin,
  SetupBin,
  AddContainer,
  ImageDeck,
  DeckImage,
  DeckImageButton,
  OptionsWrapper,
} from "./styles";
import { CheckoutButton } from "../../tools/globalStyles";

import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import ProductAmount from "../../components/SubComponents/ProductAmount/ProductAmount";

import { useLocation } from "react-router-dom";
import { publicRequest } from "../../tools/requestMethods";
import ProductOptions from "../../components/SubComponents/ProductOptions/ProductOptions";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [rendering, setRendering] = useState(true);
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const changeImage = (index) => {
    setSelectedImg(index);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        setRendering(false);
        setTotalPrice(product.basePrice);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    console.log(quantity);
  }, [quantity]);

  return (
    <div>
      <Announcement />
      <Navbar />
      {rendering ? (
        <div>"is rendering"</div>
      ) : (
        <Container>
          <Wrapper>
            <ImgContainer>
              <SelectedImage
                src={product.imgs[selectedImg]}
                alt="product image"
              />
              <ImageDeck>
                {product.imgs.map((img, index) => (
                  <DeckImageButton
                    key={index}
                    onClick={() => changeImage(index)}
                  >
                    <DeckImage
                      src={img}
                      selectedImg={selectedImg}
                      thisImg={index}
                    ></DeckImage>
                  </DeckImageButton>
                ))}
              </ImageDeck>
            </ImgContainer>
            <InfoContainer>
              <Title>{product.title}</Title>
              <Price>${product.basePrice} USD</Price>
              <Desc>{product.desc}</Desc>
              <OptionsWrapper>
                {product.options.map((option) => (
                  <ProductOptions option={option} key={option.optionTitle} /> // this is where each option will be rendered
                ))}
              </OptionsWrapper>
            </InfoContainer>
          </Wrapper>
          <ProductCheckoutWrapper>
            <ProductCheckout>
              <SetupBin>
                <Price>${product.basePrice} </Price>
                <AddContainer>
                  <ProductAmount quantity={quantity} change={setQuantity} />
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
      )}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
