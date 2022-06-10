import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 255, 0.05);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 400px;
  display: flex;
  align-items: center;

  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  display: flex;
  right: 20%;
`;

const Image = styled.img`
  height: 75%;
  width: 100%;
  object-fit: cover;
  z-index: 2;
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

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
  }
`;

export { Container, Circle, Image, Info, Icon };
