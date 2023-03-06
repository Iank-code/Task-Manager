import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // For checking if password && confirmPassword matches
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const gotoLoginPage = () => {
    navigate("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");

      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      console.log({ email, username, tel, password, confirmPassword });


      fetch("https://sinatra-web-app.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          phone_number: tel,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then((data) => {
          console.log(data);
          alert("Registration successful.");
          navigate("/home");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Registration failed. Please try again.");
        });
  
    }
  };

  return (
    <div
      style={{
        marginBottom: "3rem",
      }}
      className="signup__container form"
    >
      <h2>Sign up </h2>
      <img
        style={{
          width: "350px",
        }}
        src={require("../../assets/up-amico.png")}
      />
      <form className="signup__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="tel">Phone Number</label>
        <input
          type="tel"
          name="tel"
          id="tel"
          value={tel}
          required
          onChange={(e) => setTel(e.target.value)}
        />
        <label htmlFor="tel">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          minLength={8}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="tel">Confirm Password</label>
        <input
          type="password"
          name="confirm password"
          id="confirmpassword"
          minLength={8}
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button>SIGN UP</button>
        <p>
          Already have an account?{" "}
          <span
            className="link"
            onClick={gotoLoginPage}
            style={{ color: "red", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
