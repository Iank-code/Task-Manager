import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    setLoginEmail("");
    setLoginPassword("");

    
    navigate("/");
  };

  const gotoSignUpPage = () => navigate("/register");
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
        <p>
          Don't have an account?{" "}
          <span
            className="link"
            onClick={gotoSignUpPage}
            style={{ color: "red", cursor: "pointer" }}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;