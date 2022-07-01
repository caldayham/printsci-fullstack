import React from "react";
import {
  Wrapper,
  Form,
  Input,
  Agreement,
  Button,
  ActionWrapper,
} from "./styles";

const Register = () => {
  return (
    <Wrapper>
      <Form>
        <Input placeholder="first & last name" />
        <Input placeholder="username" />
        <Input placeholder="organization" />
        <Input placeholder="email" />
        <Input placeholder="password" /> {/*have repeat password pop up after*/}
      </Form>
      <ActionWrapper>
        <Agreement>
          I consent to the <u>privacy policy</u>
        </Agreement>
        <Button>Register</Button>
      </ActionWrapper>
    </Wrapper>
  );
};

export default Register;
