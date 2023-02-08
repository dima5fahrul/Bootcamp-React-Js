import React from "react";
import "../App.css";

const Tugas8 = (props) => {
  return (
    <>
      <div className="container">
        <h1>Data diri peserta kelas Reactjs</h1>
        <hr />
        <ul>
          <li>Nama Lengkap : {props.name}</li>
          <li>Email : {props.email}</li>
          <li>Batch Pelatihan : {props.batch}</li>
        </ul>
      </div>
    </>
  );
};
export default Tugas8;
