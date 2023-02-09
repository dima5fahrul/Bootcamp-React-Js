import React from "react";
import "../App.css";
import { useState } from "react";

const Tugas9 = () => {
  const [tambahAngka, setTambahAngka] = useState(0);
  return (
    <>
      <div className="container" style={{ textAlign: "center" }}>
        <h1>{tambahAngka}</h1>
        <div style={{ margin: "0 0 20px" }}>
          <button
            style={{ margin: "0px 10px" }}
            onClick={() => setTambahAngka(tambahAngka + 1)}
          >
            +
          </button>
          <button
            style={{ margin: "0px 10px" }}
            onClick={() => setTambahAngka(tambahAngka - 1)}
          >
            -
          </button>
        </div>
        <div className="buttonTambah">
          <button onClick={() => setTambahAngka(tambahAngka + 1)}>
            <h2>Tambah</h2>
          </button>
        </div>
      </div>
    </>
  );
};
export default Tugas9;
