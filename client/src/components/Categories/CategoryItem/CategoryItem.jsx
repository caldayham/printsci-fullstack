import React from "react";
import { Container, Image, Info, Title } from "./styles";
import { ShopNowButton } from "../../../globalStyles";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/product/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <ShopNowButton>SHOP NOW</ShopNowButton>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
