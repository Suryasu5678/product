// src/Component/SnackBar.jsx
import React from "react";
import { useSnackBar } from "./SnackBarContext";

const SnackBar = () => {
  const { message, type } = useSnackBar();

  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: type === "success" ? "#48BB78" : "#F56565",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  );
};

export default SnackBar;
