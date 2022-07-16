import React from "react";
import { Container, Image, Info, Title } from "./styles";
import { ShopNowButton } from "../../../tools/globalStyles";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/catalog/${item.cat}`}>
        <Image src={process.env.REACT_APP_IMGURL + item.img} />
        <Info>
          <Title>{item.title}</Title>
          <ShopNowButton>SHOP NOW</ShopNowButton>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
