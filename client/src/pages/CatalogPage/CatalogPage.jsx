import React, { useEffect, useState } from "react";
import Products from "../../components/Products/Products";

import {
  CategoriesWrapper,
  CategoryDesc,
  CategoryWrapper,
  CategoryImage,
  CategoryText,
  CategoryTitle,
  FiltersWrapper,
} from "./styles";
import {
  FilterContainer,
  Filter,
  FilterTitle,
  FilterOption,
  Select,
  MainContainer,
  CustomLink,
} from "../../tools/globalStyles";

import { useLocation } from "react-router-dom";
import { categories } from "../../tools/data";

import { useDispatch } from "react-redux";
import { changePage } from "../../redux/currentPageRedux";

const CatalogPage = () => {
  const location = useLocation();
  const [category, setCategory] = useState(
    location.pathname.split("/")[2] ? location.pathname.split("/")[2] : "all"
  );
  console.log(category);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    setFilters({});
    // const value = e.target.value;
    // setFilters({
    //   ...filters,
    //   [e.target.name]: value,
    // });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const getCategory = () => {
      setCategory(
        location.pathname.split("/")[2]
          ? location.pathname.split("/")[2]
          : "all"
      );
      dispatch(changePage("catalog"));
    };
    getCategory();
  });

  return (
    <MainContainer flexDirection={"column"}>
      <FiltersWrapper>
        <CategoriesWrapper>
          {categories.map((item) => (
            <CustomLink
              to={`/catalog/${item.cat}`}
              style={{
                flex: "1",
              }}
              key={item.id}
              id={item.id}
            >
              <CategoryWrapper selectedCat={category} thisCat={item.cat}>
                <CategoryText>
                  <CategoryTitle>{item.title}</CategoryTitle>
                  <CategoryDesc>{item.desc}</CategoryDesc>
                </CategoryText>
                <CategoryImage src={item.img} />
              </CategoryWrapper>
            </CustomLink>
          ))}
        </CategoriesWrapper>
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
      </FiltersWrapper>
      <Products category={category} filters={filters} sort={sort} />
    </MainContainer>
  );
};

export default CatalogPage;
