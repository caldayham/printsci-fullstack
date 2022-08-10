import React from "react";
import { Container, Circle, Image, Info, Icon } from "./styles";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { CustomLink } from "../../../tools/globalStyles";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={process.env.REACT_APP_IMGURL + item.imgs[0]} />
      <Info>
        <CustomLink
          to={`/product/${item._id}`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "4",
          }}
        />
        <Icon>
          <CustomLink to={`/mycart`}>
            <ShoppingBagOutlinedIcon />
          </CustomLink>
        </Icon>
        <Icon>
          <CustomLink to={`/product/${item._id}`}>
            <YoutubeSearchedForIcon />
          </CustomLink>
        </Icon>
        <Icon>
          <CustomLink to={`/home`}>
            <FavoriteBorderIcon />
          </CustomLink>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
