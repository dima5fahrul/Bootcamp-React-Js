import React from "react";
import Tugas7 from "./tugas7/tugas7";
import Tugas15List from "./tugas15/Tugas15List";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tugas15Form from "./tugas15/Tugas15Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Tugas7 />} />
              <Route path="/tugas15" element={<Tugas15List />} />
              <Route path="/create" element={<Tugas15Form />} />
              <Route path="/edit/:variableIdData" element={<Tugas15Form />} />
            </Routes>
          </header>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
