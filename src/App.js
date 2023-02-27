import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/forms/Register";
import Login from "./components/forms/Login";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
