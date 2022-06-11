import React from "react";
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
} from "../../globalStyles";

const ProductListPage = () => {
  return (
    <Container>
      <Announcement id="announcement" />
      <Navbar id="navbar" />
      <Title>Hardware</Title>
      <FilterContainer>
        <Filter>
          <FilterTitle>Filter Products</FilterTitle>
          <Select>
            <FilterOption disabled selected>
              Material
            </FilterOption>
            <FilterOption>PLA</FilterOption>
            <FilterOption>ABS</FilterOption>
            <FilterOption>PVC</FilterOption>
          </Select>
          <Select>
            <FilterOption disabled selected>
              Size
            </FilterOption>
            <FilterOption>XS</FilterOption>
            <FilterOption>S</FilterOption>
            <FilterOption>M</FilterOption>
            <FilterOption>L</FilterOption>
            <FilterOption>XL</FilterOption>
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Sort Products</FilterTitle>
          <Select>
            <FilterOption>Newest</FilterOption>
            <FilterOption>Price (asc)</FilterOption>
            <FilterOption>Price (desc)</FilterOption>
            <FilterOption>Rating</FilterOption>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductListPage;
