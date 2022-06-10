import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 20px;
  height: 70vh;
  background-color: #eeeeee;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  color: rgb(10, 10, 10);
  cursor: pointer;
`;

export { Container, Image, Info, Title, Button };
