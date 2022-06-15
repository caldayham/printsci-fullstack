import React from "react";
import { Container, Circle, Image, Info, Icon } from "./styles";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Circle />
      <Image src={item.mainImg} />
      <Info>
        <Icon>
          <ShoppingBagOutlinedIcon />
        </Icon>
        <Icon>
          <YoutubeSearchedForIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
