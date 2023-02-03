import React from "react";
import Home from "./components/Home";
import CountryPage from "./components/CountryPage";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<CountryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
