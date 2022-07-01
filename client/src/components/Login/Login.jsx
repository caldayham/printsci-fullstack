import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  Input,
  Button,
  ActionWrapper,
  Link,
  Wrapper,
  BackButton,
} from "./styles";

import { login } from "../../redux/apiCalls";

const Login = ({ setIsShowLoginOverlay }) => {
  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState(""); // got to search with regex if the input is an email then set email or username based on that, for now it will just be username
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Wrapper>
      <Form>
        <Input
          placeholder="username or email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form>
      <ActionWrapper>
        <Link>Forgot some credentials?</Link>
        <Button onClick={handleClick}>Login</Button>
        <BackButton onClick={() => setIsShowLoginOverlay(false)}>
          go back
        </BackButton>
      </ActionWrapper>
    </Wrapper>
  );
};

export default Login;
