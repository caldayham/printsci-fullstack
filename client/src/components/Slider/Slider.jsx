import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  InfoContainer,
  Image,
  Title,
  Desc,
} from "./styles";
import { CustomLink, ShopNowButton } from "../../tools/globalStyles";
import { useState } from "react";

import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

import { sliderItems } from "../../Data/sliderData";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardDoubleArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={`${process.env.REACT_APP_IMGURL + item.img}`} />
            </ImgContainer>
            <InfoContainer>
              <Title>
                {item.title[0]}
                <br />
                {item.title[1]}
              </Title>
              <Desc>{item.desc}</Desc>
              <CustomLink to={`/catalog/all`}>
                <ShopNowButton>SHOP NOW</ShopNowButton>
              </CustomLink>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardDoubleArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
