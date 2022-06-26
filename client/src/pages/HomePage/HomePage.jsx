import React from "react";
import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Container } from "./styles";

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Slider />
        <Categories />
        <Products category={"all"} filters={{}} num={8} />
        <Newsletter />
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
