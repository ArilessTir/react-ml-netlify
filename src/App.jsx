import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Prediction from "./pages/Prediction";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/prediction" element={<Prediction />} />
    </Routes>
  </BrowserRouter>
);

export default App;
