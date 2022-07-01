import styled from "styled-components";

const Form = styled.form`
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  margin: 2% 0% 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  margin: 5% 0% 0% 0%;
  font-size: 18px;
  font-weight: 200;
`;

const Button = styled.button`
  margin: 5% 0% 0% 0%;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  background-color: rgb(14, 14, 14);
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgb(0, 0, 0);
  }

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.p`
  text-decoration: underline;
  font-size: 18px;
  font-weight: 200;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Error = styled.span`
  color: red;
  font-weight: 200;
`;

export {
  Form,
  Title,
  Input,
  Agreement,
  Button,
  ActionWrapper,
  Link,
  Wrapper,
  Error,
};
