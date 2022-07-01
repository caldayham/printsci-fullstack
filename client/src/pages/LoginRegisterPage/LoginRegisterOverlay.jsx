import React, { useState } from "react";
import { Container, Toggle, Button, Wrapper, Background } from "./styles";
import Login from "../../components/Login/Login";
import Register from "../../components/Login/Register";

const LoginRegisterOverlay = ({ setIsShowLoginOverlay }) => {
  const [isRegister, setIsRegister] = useState(false);
  const setRegister = () => {
    setIsRegister(true);
  };
  const setLogin = () => {
    setIsRegister(false);
  };

  return (
    <Container>
      <Background onClick={() => setIsShowLoginOverlay(false)} />
      <Toggle>
        <Button onClick={setLogin} isActive={!isRegister}>
          Login
        </Button>
        <Button onClick={setRegister} isActive={isRegister}>
          Register
        </Button>
      </Toggle>
      <Wrapper>
        {isRegister && <Register />}
        {!isRegister && <Login />}
      </Wrapper>
    </Container>
  );
};

export default LoginRegisterOverlay;
