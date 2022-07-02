import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");

  return (
    <div>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Login</button>
    </div>
  );
};

export default Login;
