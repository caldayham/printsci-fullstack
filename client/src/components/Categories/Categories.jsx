import React from "react";
import { Container } from "./styles";
import CategoryItem from "./CategoryItem/CategoryItem";
import { categories } from "../../Data/categoryData";

const Categories = ({ paddingSides }) => {
  const subCategories = categories.slice(1);

  return (
    <Container paddingSides={paddingSides}>
      {subCategories.map((item) => (
        <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
