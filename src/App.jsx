import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./pages/Hello/Hello";
import Aboutus from "./pages/Projects/Projects";
import Projects from "./pages/Projects/Projects";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contactme" element={<Projects />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
