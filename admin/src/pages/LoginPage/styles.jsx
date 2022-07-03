import styled from "styled-components";

const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: fixed;
  z-index: 8;
  width: 100%;
  height: 100;
  top: 0;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgb(0, 0, 0, 0.95);
  background-attachment: fixed;
  background-size: cover;

  z-index: 1;
`;

const Toggle = styled.div`
  display: flex;
  height: 8%;
  width: 20%;
  min-width: 320px;
  padding: 10px;
  justify-content: space-between;

  z-index: 2;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.isActive ? "white" : "rgb(255,255,255,0.2)"};
  border: none;
  border-radius: 20px;
  width: 49%;
  font-size: 32px;
  font-weight: 300;
`;

const Wrapper = styled.div`
  width: 20%;
  height: 50%;
  min-width: 320px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
`;

export { Container, Toggle, Button, Wrapper, Background };
