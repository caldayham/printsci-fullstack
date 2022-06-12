import React from "react";
import { Container } from "./styles";
import CategoryItem from "./CategoryItem/CategoryItem";
import { categories } from "../../data";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
