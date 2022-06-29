import React, { useState, useEffect } from "react";
import {
  ImgContainer,
  SelectedImage,
  InfoContainer,
  Price,
  ProductCheckoutWrapper,
  ProductCheckout,
  ActionBin,
  SetupBin,
  AddContainer,
  ImageDeck,
  DeckImage,
  OptionsWrapper,
  BulletDesc,
  Specs,
  InfoSection,
  InfoSectionTitle,
  ImgWrapper,
} from "./styles";
import {
  CheckoutButton,
  Paragraph,
  MainContainer,
  Title,
} from "../../tools/globalStyles";

import ProductAmount from "../../components/SubComponents/ProductAmount/ProductAmount";

import { useLocation } from "react-router-dom";
import { publicRequest } from "../../tools/requestMethods";
import ProductOptions from "../../components/SubComponents/ProductOptions/ProductOptions";
import Rating from "../../components/SubComponents/Rating/Rating";

import numberWithCommas from "../../tools/stylingTools";

import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import { changePage } from "../../redux/currentPageRedux";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [rendering, setRendering] = useState(true);
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [packagePrice, setPackagePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const changeImage = (index) => {
    setSelectedImg(index);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        console.log("--------------------------------");
        console.log("next is the fetched product");
        console.log(res.data);
        console.log("--------------------------------");

        setProduct(res.data);
        setRendering(false);
        dispatch(changePage("product"));
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id, dispatch]);

  useEffect(() => {
    const updatePackagePrice = () => {
      var currentPackagePriceMultiplier = 1;
      product.options.map((option) => {
        // getting the total multiples over the base price
        currentPackagePriceMultiplier *=
          option.optionSelections[option.selectedOption]
            .selectionPriceMultiplier;
        return currentPackagePriceMultiplier;
      });
      console.log(
        "this is the currentPackagePriceMultiplier: " +
          currentPackagePriceMultiplier
      );

      setPackagePrice(product.basePrice * currentPackagePriceMultiplier);
    };

    const updateTotalPrice = () => {
      setTotalPrice(packagePrice * quantity);
    };
    !rendering && updateTotalPrice();
    !rendering && updatePackagePrice();
  }, [quantity, packagePrice, rendering, product]);

  const handleAddToCart = () => {
    // this is where we will handle adding to the cart
    //update cart
    dispatch(addProduct({ ...product, quantity, totalPrice }));

    console.log("next is the current porduct, the one that is being sent");
    console.log(product);
  };
  const handleBuyNow = () => {
    // this is where we will handle buying the product immediately
    //update cart
  };
  const handleCustomize = () => {
    // this is where we will handle customizing the selected product
    //update cart
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  return (
    <div>
      {rendering ? (
        <div>"is rendering"</div>
      ) : (
        <MainContainer>
          <ImgWrapper>
            <ImgContainer>
              <ImageDeck>
                {product.imgs.map((img, index) => (
                  <DeckImage
                    key={index}
                    onClick={() => changeImage(index)}
                    src={img}
                    selectedImg={selectedImg}
                    thisImg={index}
                  />
                ))}
              </ImageDeck>
              <div style={{ width: "100%", margin: "0px" }}>
                <SelectedImage
                  src={product.imgs[selectedImg]}
                  alt="product image"
                />
              </div>
            </ImgContainer>
          </ImgWrapper>
          <InfoContainer>
            <div
              style={{
                position: "sticky",
                top: "130px",
                width: "100%",
                backgroundColor: "white",
                zIndex: "3",
                borderBottom: "1px solid rgb(200,200,200)",
              }}
            >
              <Title>{product.title}</Title>
              <Paragraph>
                <b>Part ID: </b>
                {product.partId}
                <b
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  {product.inStock ? (
                    <b
                      style={{
                        backgroundColor: "rgb(0, 110, 255)",
                        color: "white",
                        padding: "0px 6px",
                        borderRadius: "10px",
                      }}
                    >
                      IN STOCK ✔
                    </b>
                  ) : (
                    <b
                      style={{
                        backgroundColor: "rgb(255, 51, 0)",
                        color: "white",
                        padding: "0px 6px",
                        borderRadius: "10px",
                      }}
                    >
                      OUT OF STOCK ✖
                    </b>
                  )}
                </b>
              </Paragraph>
              {product.rating ? (
                <Rating
                  size={100}
                  avgRating={product.rating.totalAvgRating}
                  numRatings={product.rating.totalNumRatings}
                  numAnsweredQuestions={product.rating.totalAnsweredQuestions}
                />
              ) : (
                <Rating
                  size={100}
                  avgRating={2.5}
                  numRatings={10}
                  numAnsweredQuestions={10}
                />
              )}
              <Price>
                ${packagePrice && numberWithCommas(packagePrice)} USD
              </Price>
            </div>
            <Paragraph paddingTop={"50px"} paddingBottom={"50px"}>
              {product.desc}
            </Paragraph>
            <InfoSection>
              <InfoSectionTitle paddingTop={"5px"} paddingBottom={"5px"}>
                Options
              </InfoSectionTitle>
              <OptionsWrapper>
                <ProductOptions product={product} changeProduct={setProduct} />
              </OptionsWrapper>
              <div style={{ height: "50px" }} />
            </InfoSection>
            <BulletDesc>
              <InfoSectionTitle paddingTop={"5px"} paddingBottom={"5px"}>
                Description
              </InfoSectionTitle>
              {product.bulletDesc.map((desc, i) => (
                <Paragraph key={i}>
                  <b style={{ fontSize: "30px" }}>• </b>
                  {desc}
                </Paragraph>
              ))}
              <div style={{ height: "50px" }} />
            </BulletDesc>
            <Specs>
              <InfoSectionTitle paddingTop={"5px"} paddingBottom={"5px"}>
                Product Specs
              </InfoSectionTitle>
              {product.specs.map((spec, i) => (
                <Paragraph key={i}>
                  <b style={{ fontSize: "30px" }}>• </b>
                  {spec}
                </Paragraph>
              ))}
            </Specs>
          </InfoContainer>
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
        </MainContainer>
      )}
      <button id="newsletter" />
    </div>
  );
};

export default ProductPage;
