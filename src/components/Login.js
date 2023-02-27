import React, { useState } from "react";

function Login() {
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    setLoginEmail("");
    setLoginPassword("");
  };
  return (
    <div className="form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          required
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <button>LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
