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

const Login = ({ setIsShowLoginOverlay }) => {
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
        <BackButton onClick={() => setIsShowLoginOverlay(false)}>
          go back
        </BackButton>
      </ActionWrapper>
    </Wrapper>
  );
};

export default Login;
