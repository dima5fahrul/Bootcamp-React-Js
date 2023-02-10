import React from "react";
import Tugas10 from "./tugas10/tugas10";
import Tugas7 from "./tugas7/tugas7";
import Tugas8 from "./tugas8/tugas8";
import Tugas9 from "./tugas9/tugas9";

function App() {
  return (
    <>
      <header className="App-header">
        <Tugas7 />
        <Tugas8
          name="Dimas Fahrul Putra Arismanto"
          email="dfahrul07@gmail.com"
          batch="42"
        />
        <Tugas9 />
        <Tugas10 />
      </header>
    </>
  );
}

export default App;
