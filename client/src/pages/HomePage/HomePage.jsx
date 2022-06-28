import React from "react";
import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";
import Products from "../../components/Products/Products";

import { Container } from "./styles";

const HomePage = () => {
  return (
    <Container>
      <Slider />
      <Categories paddingSides={"4vw"} id={"categories"} />
      <Products category={"all"} filters={{}} num={8} paddingSides={"4vw"} />
    </Container>
  );
};

export default HomePage;
