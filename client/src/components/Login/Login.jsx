import React from "react";
import {
  Form,
  Input,
  Button,
  ActionWrapper,
  Link,
  Wrapper,
  BackButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let history = useNavigate();

  return (
    <Wrapper>
      <Form>
        <Input placeholder="organization" />
        <Input placeholder="email" />
        <Input placeholder="password" />
      </Form>
      <ActionWrapper>
        <Link>Forgot some credentials?</Link>
        <Button>Login</Button>
        <BackButton onClick={() => history(-1)}>go back</BackButton>
      </ActionWrapper>
    </Wrapper>
  );
};

export default Login;
