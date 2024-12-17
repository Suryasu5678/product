import React from "react";

const Spinner = () => {
  return (
    <div>
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div
        style={{
          border: "10px solid #f3f3f3",
          borderTop: "10px solid #3498db",
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          animation: "spin 1s linear infinite",
          display: "flex",
          justifySelf: "center",
          marginTop: "150px",
        }}
      />
      <div style={{textAlign:"center",marginTop:"15px"}}> PLEASE WAIT A SEC</div>
    </div>
  );
};

export default Spinner;
