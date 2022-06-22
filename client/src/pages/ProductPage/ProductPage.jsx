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
  DeckImageButton,
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
  const [rendering, setRendering] = useState(true);
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const changeImage = (index) => {
    setSelectedImg(index);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        setRendering(false);
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
              <Price>{product.price} USD / piece</Price>
              <Desc>{product.desc}</Desc>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Material</FilterTitle>
                  {product.material?.map((mat) => (
                    <FilterMaterial color="rgb(200,200,200)" key={mat}>
                      {mat}
                    </FilterMaterial>
                  ))}
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <Select>
                    {product.size?.map((size) => (
                      <FilterSize key={size}>{size}</FilterSize>
                    ))}
                  </Select>
                </Filter>
              </FilterContainer>
            </InfoContainer>
          </Wrapper>
          <ProductCheckoutWrapper>
            <ProductCheckout>
              <SetupBin>
                <Price>{product.price} </Price>
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
