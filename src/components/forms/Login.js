import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fetch from "../hooks/Fetch.js";

function Login() {
  const { data, isLoading, error, setData } = Fetch(
    "https://sinatra-web-app.onrender.com/credentials"
  );

  const navigate = useNavigate();

  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    data.map((item) => {
      if (email === item.email && password === item.password) {
        alert("Success!");
        setLoginEmail("");
        setLoginPassword("");

        navigate("/home");
      }
      return null;
    });
  };

  const gotoSignUpPage = () => navigate("/");
  return (
    <div className="form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <img
        style={{
          width: "350px",
        }}
        src={require("../../assets/login-cuate.png")}
      />
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
