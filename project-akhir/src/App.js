import React from "react";
import { GlobalProvider } from "./components/context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage";
import Detail from "./components/detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/" element={<LandingPage />}></Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
