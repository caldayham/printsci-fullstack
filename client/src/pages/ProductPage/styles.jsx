import styled from "styled-components";

const Container = styled.div`
  margin-top: 14vh;
  display: flex;
  min-height: 86vh;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex: 5;
`;

const ImgContainer = styled.div`
  width: 100%;
  flex: 1;
`;

const SelectedImage = styled.img`
  width: 100%;
  object-fit: cover;
  background-color: rgb(238, 238, 238);
  transition: all 0.1s ease;

  &:hover {
    background-color: rgb(14, 14, 14, 1);
  }
`;
const DeckImage = styled.img`
  width: 100%;
  object-fit: cover;
  transition: all 0.1s ease;
  background-color: ${(props) =>
    props.selectedImg === props.thisImg ? "rgb(14,14,14)" : "rgb(238,238,238)"};

  &:hover {
    background-color: rgb(14, 14, 14, 1);
  }
`;

const DeckImageButton = styled.button`
  width: 20%;
  display: flex;
  justify-content: left;
  overflow: hidden;
  margin-top: 10px;
  border: none;
  background-color: transparent;
`;

const ImageDeck = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  overflow: hidden;
  gap: 10px;
  margin-top: 10px;
`;

const InfoContainer = styled.div`
  width: 100%;
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 18px;
  font-weight: 300;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterSize = styled.option``;

const FilterMaterial = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  margin-right: 10px;

  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const ProductCheckoutWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex: 1;
  background-color: rgb(0, 0, 0, 0);
`;

const ProductCheckout = styled.div`
  padding: 50px;
  height: 50%;
  width: 10%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
`;

// Styled components for quantity incrementor widget

const SetupBin = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActionBin = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  width: 100%;
`;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  height: 40px;
  width: 100%;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  width: 100%;
  border-bottom: 1px solid rgb(200, 200, 200);
`;

export {
  OptionsWrapper,
  Container,
  Wrapper,
  ImgContainer,
  SelectedImage,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterSize,
  ProductCheckoutWrapper,
  FilterMaterial,
  ProductCheckout,
  ActionBin,
  SetupBin,
  AddContainer,
  ImageDeck,
  DeckImage,
  DeckImageButton,
};
