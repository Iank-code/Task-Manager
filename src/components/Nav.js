import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="Navbar">
      <NavLink exact="true" to="/">
        {" "}
        Home
      </NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}

export default Nav;
