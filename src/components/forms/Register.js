import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = (e) => {

  //   e.preventDefault();
  //   // console.log({ email, username, tel, password, confirmPassword });
  //   // setEmail("");
  //   // setTel("");
  //   // setUsername("");
  //   // setPassword("");
  //   // setConfirmPassword("");

  //   fetch("http://localhost:9292/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: username,
  //       email: email,
  //       password: password,
  //       phone_number: tel,
  //     }),
  //   }).then((res) => res.json());
    
  //   alert("saved")

  //   navigate("/");
  // };
  const gotoLoginPage = () => {
    navigate("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9292/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
        tel: tel,
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
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Registration failed. Please try again.");
      });
  };

  return (
    <div className="signup__container form">
      <h2>Sign up </h2>
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
