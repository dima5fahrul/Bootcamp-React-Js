import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  // Navigasi
  const navigate = useNavigate();

  // Menampung data dari API
  const [data, setData] = useState(null);

  // Realtime fetch data
  const [fetchStatus, setFetchStatus] = useState(true);

  // Menampung id data yang akan diedit
  const [currentId, setCurrentId] = useState(-1);

  // Menambahkan data ke API
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: "",
  });

  // Function -------------------------------------------------------
  // handleDelete function
  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);

    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
      )
      .then((res) => {
        setFetchStatus(true);
      })
      .catch((err) => {
        alert(err);
      });
  };

  // handleEdit function
  const handleEdit = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentId(idData);
    navigate(`/edit/${idData}`);

    // axios
    //   .get(
    //     `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
    //   )
    //   .then((res) => {
    //     let data = res.data;

    //     setInput({
    //       name: data.name,
    //       course: data.course,
    //       score: data.score,
    //     });
    //     navigate("/edit/:variableIdData");
    //   });
  };

  // function untuk menghandle index nilai
  const handleIndexScore = (param) => {
    if (param >= 80) return "A";
    else if (param >= 70 && param < 80) return "B";
    else if (param >= 60 && param < 70) return "C";
    else if (param >= 50 && param < 60) return "D";
    else if (param < 50) return "E";
  };

  // handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();

    let { name, course, score } = input;

    if (currentId === -1) {
      axios
        .post("https://backendexample.sanbercloud.com/api/student-scores", {
          name,
          course,
          score,
        })
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
          navigate("/Tugas15");
        });
    } else {
      // Update data
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
          { name, course, score }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/Tugas15");
        });
    }
    // Reset input
    setCurrentId(-1);

    setInput({ name: "", course: "", score: "" });
  };

  // handleInput function
  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: value });
  };

  // let untuk function
  let handleFunction = {
    handleDelete,
    handleEdit,
    handleIndexScore,
    handleSubmit,
    handleInput,
  };

  // let untuk context
  let state = {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    input,
    setInput,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
