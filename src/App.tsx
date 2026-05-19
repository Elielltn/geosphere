import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import CountryDetail from "./pages/CountryDetail/CountryDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/country/:code" element={<CountryDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
