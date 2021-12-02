import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Card from "./components/Card";
import Colors from "./components/Colors";
import Borders from "./components/Borders";
import Animation from "./components/Animation";
import Other from "./components/Other";
import Chart from "./components/Charts.js";
import Tables from "./components/Tables";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Navbar />
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/buttons" element={<Button />} />
                <Route path="/card" element={<Card />} />
                <Route path="/colors" element={<Colors />} />
                <Route path="/borders" element={<Borders />} />
                <Route path="/animation" element={<Animation />} />
                <Route path="/other" element={<Other />} />
                <Route path="/charts" element={<Chart />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
      <Router>
        <body class="bg-gradient-primary">
          {/* <Routes>
            <Route path="/login" element={<Login />} />
          </Routes> */}
        </body>
      </Router>
    </>
  );
}

export default App;
