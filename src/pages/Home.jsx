import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Categories from "../components/Categories/Categories";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
