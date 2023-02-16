import React from "react";
import Tugas10 from "./tugas10/tugas10";
import Tugas7 from "./tugas7/tugas7";
import Tugas8 from "./tugas8/tugas8";
import Tugas9 from "./tugas9/tugas9";
import Tugas11 from "./tugas11/tugas11";
import Tugas12 from "./tugas12/tugas12";
import Tugas13 from "./tugas13/tugas13";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <header className="App-header">
        {/* <Tugas7 />
        <Tugas8
          name="Dimas Fahrul Putra Arismanto"
          email="dfahrul07@gmail.com"
          batch="42"
        />
        <Tugas9 />
        <Tugas10 /> */}
        {/* <Tugas11 /> */}
        {/* <Tugas12 /> */}
        <Tugas13 />
      </header>
    </GlobalProvider>
  );
}

export default App;
