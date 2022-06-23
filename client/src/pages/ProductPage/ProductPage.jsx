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

import numberWithCommas from "../../tools/stylingTools";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [rendering, setRendering] = useState(true);
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [packagePrice, setPackagePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const changeImage = (index) => {
    setSelectedImg(index);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        setPackagePrice(res.data.basePrice);
        setTotalPrice(res.data.basePrice);
        console.log("next is res data options");
        console.log(res.data.options);
        res.data.options.map((option) => {
          const oldSelectedOptions = selectedOptions;
          oldSelectedOptions.push(option.optionSelections[0]);
          setSelectedOptions(oldSelectedOptions);
        });
        setRendering(false);
        console.log("next is selectedOptions");
        console.log(selectedOptions);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const updateTotalPrice = () => {
      setTotalPrice((packagePrice * quantity).toFixed(2));
    };
    updateTotalPrice();
  }, [quantity, packagePrice]);

  useEffect(() => {
    const updatePrice = () => {
      console.log("================================");
      console.log(
        "selectedOptions, or product id, or rendering state changed, here are the new selectedOptions:"
      );
      console.log(selectedOptions);
      console.log("next is the current total price:");
      console.log(packagePrice);
      console.log("================================");

      const allPriceMultipliers = [];
      selectedOptions.map((opt) => {
        allPriceMultipliers.push(opt.selectionPriceMultiplier);
        console.log(allPriceMultipliers);
      });

      const initialValue = 1;
      const totalOptionsMultiplier = allPriceMultipliers.reduce(
        (a, b) => a * b,
        initialValue
      );
      console.log(totalOptionsMultiplier);
      const newPrice = product.basePrice * totalOptionsMultiplier;

      setPackagePrice(newPrice.toFixed(2));
    };
    updatePrice();
  }, [selectedOptions, id, rendering]);

  const handleAddToCart = () => {
    // this is where we will handle adding to the cart
    //update cart
  };
  const handleBuyNow = () => {
    // this is where we will handle buying the product immediately
    //update cart
  };
  const handleCustomize = () => {
    // this is where we will handle customizing the selected product
    //update cart
  };

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
              <Price>
                ${packagePrice && numberWithCommas(packagePrice)} USD
              </Price>
              <Desc>{product.desc}</Desc>
              <OptionsWrapper>
                {product.options.map((option, i) => (
                  <ProductOptions
                    option={option}
                    key={i}
                    specIndex={i}
                    selected={selectedOptions}
                    changeSelected={setSelectedOptions}
                  /> // this is where each option will be rendered
                ))}
              </OptionsWrapper>
            </InfoContainer>
          </Wrapper>
          <ProductCheckoutWrapper>
            <ProductCheckout>
              <SetupBin>
                <Price>${numberWithCommas(totalPrice)} </Price>
                <AddContainer>
                  <ProductAmount quantity={quantity} change={setQuantity} />
                </AddContainer>
              </SetupBin>
              <ActionBin>
                <CheckoutButton onClick={handleAddToCart}>
                  Add to Cart
                </CheckoutButton>
                <CheckoutButton onClick={handleBuyNow}>Buy Now</CheckoutButton>
                <CheckoutButton onClick={handleCustomize}>
                  Customize
                </CheckoutButton>
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
