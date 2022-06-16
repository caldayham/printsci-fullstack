import React from "react";
import {
  Wrapper,
  Form,
  Input,
  Agreement,
  Button,
  ActionWrapper,
  BackButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let history = useNavigate();

  return (
    <Wrapper>
      <Form>
        <Input placeholder="first & last name" />
        <Input placeholder="organization" />
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Input placeholder="repeat password" />
      </Form>
      <ActionWrapper>
        <Agreement>
          I consent to the <u>privacy policy</u>
        </Agreement>
        <Button>Register</Button>
        <BackButton onClick={() => history(-1)}>go back</BackButton>
      </ActionWrapper>
    </Wrapper>
  );
};

export default Register;
