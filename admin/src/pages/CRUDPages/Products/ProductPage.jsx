import React from "react";
import {
  ContentContainer,
  MainContainer,
  MainTitle,
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
        <img
          src={`${assetBaseURL + product.imgs[0]}`}
          alt=""
          style={{ width: "100px" }}
        />
        <button onClick={() => handleDelete()}>
          <DeleteOutlineIcon />
        </button>
      </ContentContainer>
    </MainContainer>
  );
};

export default ProductPage;
