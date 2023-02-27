import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
