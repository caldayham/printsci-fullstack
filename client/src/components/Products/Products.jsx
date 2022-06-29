import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import Product from "./Product/Product";
import axios from "axios";

const Products = ({ category, filters, sort, num, paddingSides }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      console.log("category was changed and now we refetch data");
      try {
        console.log("this is category: " + category);
        const res = await axios.get(
          category == null
            ? `http://localhost:5000/api/products?num=${num ? num : 12}`
            : `http://localhost:5000/api/products?category=${category}&num=${
                num ? num : 12
              }`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category, num]); // when the category (category) changes, run this function

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    console.log("next is filters");
    console.log(filters);
  }, [category, filters, products]);

  console.log("next is filteredProducts");
  console.log(filteredProducts);

  useEffect(() => {
    console.log("this is sort: " + sort);
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else if (sort === "rating") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    }
  }, [sort]);

  return (
    <Container paddingSides={paddingSides}>
      {category == null
        ? products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)
        : filteredProducts.map((item) => (
            <Product item={item} key={item._id} />
          ))}
    </Container>
  );
};

export default Products;
