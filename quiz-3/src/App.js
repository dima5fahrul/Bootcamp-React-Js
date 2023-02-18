import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ManageData from "./components/ManageData";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-data" element={<ManageData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
