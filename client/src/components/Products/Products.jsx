import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { popularProducts } from "../../data";

import Product from "./Product/Product";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products?category=${cat}&num=${8}`
        );
        console.log(res);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]); // when the cat (category) changes, run this function

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  console.log(filters);
  console.log(filteredProducts);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
  }, [sort]);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
