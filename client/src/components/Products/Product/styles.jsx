import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.2s ease;
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  display: flex;
  transition: all 0.2s ease;
`;

const Container = styled.div`
  // this is the item wrapper
  flex-grow: 1;
  min-width: 340px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(231, 241, 255);
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }

  &:hover ${Circle} {
    opacity: 0;
  }

  transition: all 0.2s ease;
  &:hover {
    background-color: rgb(193, 220, 255);
  }
`;

const Image = styled.img`
  height: 320px;
  object-fit: cover;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.2s ease;
  z-index: 5;

  &:hover {
    background-color: rgb(14, 14, 14);
    color: white;
    transform: scale(1.2);
  }
`;

export { Container, Circle, Image, Info, Icon };
