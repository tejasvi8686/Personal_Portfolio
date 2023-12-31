import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
