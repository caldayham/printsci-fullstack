import React from "react";
import { Form, Input, Button, ActionWrapper, Link, Wrapper } from "./styles";

const Login = () => {
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
      </ActionWrapper>
    </Wrapper>
  );
};

export default Login;
