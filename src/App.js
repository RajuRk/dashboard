import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Button from "./components/Button";
import Card from "./components/Card";
import Colors from "./components/Colors";
import Borders from "./components/Borders";
import Animation from "./components/Animation";
import Other from "./components/Other";
import Chart from "./components/Charts.js";
import Tables from "./components/Tables";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgotpassword from "./components/Forgotpassword";
import Error from "./components/Error";
import Blank from "./components/Blank";

function App() {
  return (
    <>
      <Router>
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buttons" element={<Button />} />
          <Route path="/card" element={<Card />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/borders" element={<Borders />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/other" element={<Other />} />
          <Route path="/charts" element={<Chart />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/error" element={<Error />} />
          <Route path="/blank" element={<Blank />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
