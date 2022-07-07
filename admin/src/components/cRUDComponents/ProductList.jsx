import React, { useEffect } from "react";
import { ComponentContainer } from "../../tools/globalStyles";

import { DataGrid } from "@mui/x-data-grid";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/apiCalls";
import { Link } from "react-router-dom";
import {
  ProductListProduct,
  ProductImg,
  ProductListEditButton,
} from "./styles";

const ProductList = () => {
  const assetBaseURL = process.env.REACT_APP_ASSET_CDN_BASE_URL;

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <ProductListProduct>
            <ProductImg src={`${assetBaseURL + params.row.imgs[0]}`} alt="" />
            {params.row.title}
          </ProductListProduct>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 100 },
    {
      field: "rating.totalAvgRating",
      headerName: "Rating",
      width: 120,
      renderCell: (params) => {
        return (
          <p>
            {params.row.rating.totalAvgRating +
              " x " +
              params.row.rating.totalNumRatings}
          </p>
        );
      },
    },
    {
      field: "basePrice",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/crud/products/" + params.row._id}>
              <ProductListEditButton>Edit</ProductListEditButton>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <ComponentContainer>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </ComponentContainer>
  );
};

export default ProductList;
