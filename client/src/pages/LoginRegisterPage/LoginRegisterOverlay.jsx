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
    <Container
      style={{
        position: "fixed",
        zIndex: "8",
        width: "100%",
        height: "100",
        top: "0",
      }}
    >
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
        {isRegister && (
          <Register setIsShowLoginOverlay={setIsShowLoginOverlay} />
        )}
        {!isRegister && <Login setIsShowLoginOverlay={setIsShowLoginOverlay} />}
      </Wrapper>
    </Container>
  );
};

export default LoginRegisterOverlay;
