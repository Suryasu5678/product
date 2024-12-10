// src/Component/SnackBarContext.jsx
import React, { createContext, useState, useContext } from "react";
export const SnackBarContext = createContext(); 
const SnackBarContext = createContext();

export const useSnackBar = () => useContext(SnackBarContext);

export const SnackBarProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState("success");

  const showSnackbar = (msg, type = "success") => {
    setMessage(msg);
    setType(type);

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <SnackBarContext.Provider value={{ message, type, showSnackbar }}>
      {children}
    </SnackBarContext.Provider>
  );
};
