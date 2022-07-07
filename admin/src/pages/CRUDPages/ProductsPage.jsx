import React from "react";
import ProductList from "../../components/cRUDComponents/ProductList";
import {
  ContentContainer,
  MainContainer,
  MainTitle,
} from "../../tools/globalStyles";

const ProductsPage = () => {
  return (
    <MainContainer>
      <MainTitle>Products Page</MainTitle>
      <ContentContainer>
        <ProductList />
      </ContentContainer>
    </MainContainer>
  );
};

export default ProductsPage;
