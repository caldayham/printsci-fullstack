import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  background-color: rgb(200, 200, 200);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;

  overflow: hidden;
`;

const Image = styled.img`
  width: 400px;
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
