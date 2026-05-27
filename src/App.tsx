import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import CountryDetail from "./pages/CountryDetail/CountryDetail";
import { useState } from "react";

function App() {
  const [region, setRegion] = useState("");
  const [subregion, setSubregion] = useState("");
  const [independent, setIndependency] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              region={region}
              subregion={subregion}
              independent={independent}
              onRegionChange={setRegion}
              onSubregionChange={setSubregion}
              onIndependencyChange={setIndependency}
            />
          }
        ></Route>
        <Route path="/country/:code" element={<CountryDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
