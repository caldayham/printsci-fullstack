import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Button,
  ActionWrapper,
  Link,
  Wrapper,
  Error,
} from "./styles";

import { login } from "../../redux/apiCalls";
import { changeOverlay } from "../../redux/overlayRedux";

const Login = () => {
  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState(""); // got to search with regex if the input is an email then set email or username based on that, for now it will just be username
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    dispatch(changeOverlay(false));
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
        <Button onClick={handleClick} disabled={isFetching}>
          Login
        </Button>
        {error && (
          <Error>There was an error, contact support for help...</Error>
        )}
      </ActionWrapper>
    </Wrapper>
  );
};

export default Login;
