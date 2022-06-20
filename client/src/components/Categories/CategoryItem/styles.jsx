import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 20px;
  height: 70vh;
  background-color: #e0e0e0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
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

export { Container, Image, Info, Title };
