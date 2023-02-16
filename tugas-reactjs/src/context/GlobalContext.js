import React, { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [words, setWords] = useState("Hello World!");
  const [number, setNumber] = useState("testing");

  return (
    <GlobalContext.Provider
      value={{
        words,
        setWords,
        number,
        setNumber,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
