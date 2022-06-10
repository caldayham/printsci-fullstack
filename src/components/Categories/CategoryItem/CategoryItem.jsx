import React from "react";
import { Container, Image, Info, Title } from "./styles";
import { ShopNowButton } from "../../../styles";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <ShopNowButton>SHOP NOW</ShopNowButton>
      </Info>
    </Container>
  );
};

export default CategoryItem;
