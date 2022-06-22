import React from "react";
import { Container, Circle, Image, Info, Icon } from "./styles";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.imgs[0]} />
      <Info>
        <Icon>
          <ShoppingBagOutlinedIcon />
        </Icon>
        <Icon>
          <Link
            to={`/product/${item._id}`}
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <YoutubeSearchedForIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
