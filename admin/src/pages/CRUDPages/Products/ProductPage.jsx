import React from "react";
import {
  ComponentContainer,
  ContentContainer,
  MainContainer,
  MainTitle,
  SubTitle,
} from "../../../tools/globalStyles";

import { useDispatch, useSelector } from "react-redux";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deleteProduct } from "../../../redux/apiCalls";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
  const assetBaseURL = process.env.REACT_APP_ASSET_CDN_BASE_URL;

  const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split("/")[3]
    ? location.pathname.split("/")[3]
    : null;

  const product = useSelector(
    (state) =>
      state.product.products[
        state.product.products.findIndex((item) => item._id === id)
      ]
  );

  console.log(product);

  const handleDelete = () => {
    console.log("handle delete called");
    deleteProduct(id, dispatch);
  };

  return (
    <MainContainer>
      <MainTitle>{product.title}</MainTitle>
      <ContentContainer>
        <div style={{ display: "flex", gap: "20px" }}>
          <ComponentContainer style={{ flex: 1 }}>
            <SubTitle>Sales Performance</SubTitle>
          </ComponentContainer>
          <ComponentContainer style={{ flex: 1 }}>
            <SubTitle>{product.title}</SubTitle>
            <p>
              Id: <b>{product._id}</b>
            </p>
            <p>Base Price: {product.basePrice}</p>
            <p>In Stock: {product.inStock ? "true" : "false"}</p>
            <p>
              Sales: <b>239</b>
            </p>
            <img
              src={`${assetBaseURL + product.imgs[0]}`}
              alt=""
              style={{ width: "100px" }}
            />
          </ComponentContainer>
        </div>
        <ComponentContainer>
          <SubTitle>Edit Product</SubTitle>
          <button onClick={() => handleDelete()}>
            <DeleteOutlineIcon />
          </button>
        </ComponentContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default ProductPage;
