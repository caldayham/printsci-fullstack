import React, { useEffect, useState } from "react";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";

import { Container, Title } from "./styles";
import {
  FilterContainer,
  Filter,
  FilterTitle,
  FilterOption,
  Select,
} from "../../tools/globalStyles";

import { useLocation } from "react-router-dom";

const CatalogPage = () => {
  const location = useLocation();
  const [category, setCategory] = useState(
    location.pathname.split("/")[2] ? location.pathname.split("/")[2] : "all"
  );
  console.log(category);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    const getCategory = () => {
      setCategory(
        location.pathname.split("/")[2]
          ? location.pathname.split("/")[2]
          : "all"
      );
    };
    getCategory();
  });

  return (
    <Container>
      <Announcement id="announcement" />
      <Navbar id="navbar" />
      <Title>
        Category:{" "}
        {category === !null
          ? "none"
          : category.charAt(0).toUpperCase() + category.slice(1)}
      </Title>
      <FilterContainer>
        <Filter>
          <FilterTitle>Filter Products</FilterTitle>
          <Select name="material" onChange={handleFilters}>
            <FilterOption>material</FilterOption>
            <FilterOption>PLA</FilterOption>
            <FilterOption>ABS</FilterOption>
            <FilterOption>PVC</FilterOption>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <FilterOption>size</FilterOption>
            <FilterOption>XS</FilterOption>
            <FilterOption>S</FilterOption>
            <FilterOption>M</FilterOption>
            <FilterOption>L</FilterOption>
            <FilterOption>XL</FilterOption>
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Sort Products</FilterTitle>
          <Select onChange={(e) => setSort(e.target.value)}>
            <FilterOption value="newest">Newest</FilterOption>
            <FilterOption value="asc">Price (asc)</FilterOption>
            <FilterOption value="desc">Price (desc)</FilterOption>
            <FilterOption value="rating">Rating</FilterOption>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default CatalogPage;
