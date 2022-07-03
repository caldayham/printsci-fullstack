import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../redux/apiCalls";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLoginClick = (e) => {
    e.preventDefault();
    console.log(username, password);
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", marginBottom: "20px" }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", marginBottom: "60px" }}
        />
        <button
          onClick={handleLoginClick}
          style={{ padding: "5px", width: "100%" }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
