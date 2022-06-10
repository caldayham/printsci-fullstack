import styled from "styled-components";

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(10, 10, 10);
  transition: all 0.2s ease;
`;

const Button = styled.button`
  border: none;
  flex: 1;
  background-color: rgb(20, 20, 20);
  color: white;
`;

const Container = styled.div`
  height: 60vh;
  background-color: #d9ebfc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover ${InputContainer} {
    width: 60%;
    height: 50px;
  }
  &:hover ${Button} {
  }
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

const Input = styled.input`
  padding-left: 20px;
  border: none;
  flex: 8;
`;

export { Container, Title, InputContainer, Input, Desc, Button };
