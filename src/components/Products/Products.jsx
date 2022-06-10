import React from "react";
import { Container } from "./styles";
import { popularProducts } from "../../data";

import Product from "./Product/Product";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
