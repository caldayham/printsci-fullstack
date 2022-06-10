import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Container, Title, FilterContainer, Filter } from "./styles";

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Hardware</Title>
      <FilterContainer>
        <Filter></Filter>
      </FilterContainer>
      <Footer />
    </Container>
  );
};

export default ProductList;
