import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductAmount from "../../components/SubComponents/ProductAmount/ProductAmount";

import {
  TopTexts,
  TopText,
  CartItems,
  Product,
  ProductDetail,
  Image,
  Details,
  PriceDetail,
  ProductPrice,
  SummaryItem,
  SummaryItemText,
  SummaryTitle,
  SummaryItemPrice,
  ProductCheckout,
  CartContent,
  CartCheckout,
  EditOptions,
  Icon,
} from "./styles";
import {
  CheckoutButton,
  MainContainer,
  ShopNowButton,
  Title,
  Subtitle,
  Paragraph,
  CustomLink,
} from "../../tools/globalStyles";

import numberWithCommas from "../../tools/stylingTools";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../tools/requestMethods";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../redux/cartRedux";

const KEY = process.env.REACT_APP_STRIPE_PRINTSCI_TEST_PUB;

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  console.log("next is the cart");
  console.log(cart);
  const history = useNavigate();

  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        console.log(res);
        history("/checkout/success", { state: { data: res.data } });
      } catch (err) {
        console.log("A ERROR WAS ENCOUNTERED! LOL");
        return err;
      }
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, history]);

  const updateQuantity = () => {
    console.log("new quantity");
    return 2;
  };

  function calculatePrice(product) {
    console.log(product);

    var packagePrice = product.basePrice;

    var currentPackagePriceMultiplier = 1;
    product.options.map((option) => {
      // getting the total multiples over the base price
      currentPackagePriceMultiplier *=
        option.optionSelections[option.selectedOption].selectionPriceMultiplier;
      return currentPackagePriceMultiplier;
    });

    packagePrice = (
      packagePrice *
      currentPackagePriceMultiplier *
      product.quantity
    ).toFixed(2);

    return packagePrice;
  }

  const dispatch = useDispatch();
  const removeCartItem = (productIndex) => {
    console.log("remove cart item clicked! ID: " + productIndex);

    // show a popup asking if the user meant to delete the item

    // calculate the new cart totalPrice
    var newTotalPrice = 0;
    var newQuantity = 0;
    cart.products.map((item, i) => {
      if (i === productIndex) {
        return null;
      } else {
        newTotalPrice += item.totalPrice;
        newQuantity += item.quantity;
      }
      return null;
    });

    console.log(newTotalPrice);
    console.log(newQuantity);

    // pass the of the index of the cart item in the cart products array to the deleteProduct slice. The ID isn't good enough becuase there could be multiple items with the ID but with different options.
    dispatch(deleteProduct({ productIndex, newQuantity, newTotalPrice }));
  };

  return (
    <MainContainer>
      {/*here is the left side content for the cart content*/}
      <CartContent>
        <TopTexts>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Title>Your Cart</Title>
            <CustomLink to={`/catalog/all`}>
              <ShopNowButton style={{ marginTop: "10px" }}>
                Continue Shopping
              </ShopNowButton>
            </CustomLink>
          </div>
          <div style={{ display: "flex" }}>
            <TopText>Cart ({cart.quantity})</TopText>
            <TopText>Saved (0)</TopText>
          </div>
        </TopTexts>
        <CartItems>
          {cart.products.map((product, i) => (
            <Product key={i}>
              <EditOptions>
                <Icon>
                  <CustomLink to={`/product/${product._id}`}>
                    <EditOutlinedIcon />
                  </CustomLink>
                </Icon>
                <Icon>
                  <CustomLink to={`/mycart`}>
                    <SaveAltOutlinedIcon />
                  </CustomLink>
                </Icon>
                <Icon onClick={() => removeCartItem(i)}>
                  <DeleteOutlinedIcon />
                </Icon>
              </EditOptions>
              <Image src={process.env.REACT_APP_IMGURL + product.imgs[0]} />
              <ProductDetail>
                <Details>
                  <div>
                    <Subtitle>{product.title}</Subtitle>
                    <Paragraph>
                      <b>Part ID:</b> {product.partId}
                    </Paragraph>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      columnGap: "10px",
                      rowGap: "4px",
                      paddingTop: "20px",
                    }}
                  >
                    {product.options.map((option, i) => (
                      <Paragraph key={i}>
                        <span style={{ fontSize: "14px" }}>
                          {option.optionTitle + ": "}
                        </span>
                        <b style={{ fontSize: "16px" }}>
                          {
                            option.optionSelections[option.selectedOption]
                              .selection
                          }
                        </b>
                      </Paragraph>
                    ))}
                  </div>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>
                  ${numberWithCommas(calculatePrice(product))}
                </ProductPrice>
                <ProductAmount
                  quantity={product.quantity}
                  change={updateQuantity}
                />
              </PriceDetail>
            </Product>
          ))}
        </CartItems>
      </CartContent>
      {/*here is the right side content for the checkout*/}
      <CartCheckout>
        <ProductCheckout>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>${numberWithCommas(cart.total)}</SummaryItemPrice>
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
            <SummaryItemPrice>${numberWithCommas(cart.total)}</SummaryItemPrice>
          </SummaryItem>
          <StripeCheckout
            name="Print Scientific"
            image="/images/favicon.png"
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <CheckoutButton style={{ width: "100%" }}>Checkout</CheckoutButton>
          </StripeCheckout>
        </ProductCheckout>
      </CartCheckout>
    </MainContainer>
  );
};

export default CartPage;
