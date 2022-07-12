import React from "react";
import ProductList from "../../../components/cRUDComponents/ProductList";
import {
  ContentContainer,
  CustomLink,
  MainContainer,
  MainTitle,
} from "../../../tools/globalStyles";

import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const ProductsPage = () => {
  return (
    <MainContainer>
      <MainTitle>Products Page</MainTitle>
      <ContentContainer>
        <ProductList />
        <button>
          <CustomLink to={"/crud/products/create"}>
            <AddBoxOutlinedIcon />
          </CustomLink>
        </button>
      </ContentContainer>
    </MainContainer>
  );
};

export default ProductsPage;
