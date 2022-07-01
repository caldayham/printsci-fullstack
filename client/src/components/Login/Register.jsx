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

const Register = ({ setIsShowLoginOverlay }) => {
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
        <BackButton onClick={() => setIsShowLoginOverlay(false)}>
          go back
        </BackButton>
      </ActionWrapper>
    </Wrapper>
  );
};

export default Register;
