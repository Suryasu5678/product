import React from "react";
import "../app.css";


const SignUp = () => {
  const keyframes = `
    @keyframes fadeInOut {
      0% {
        opacity: 0;
        color:yellow;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        color:yellow;
      }
    }
  `;

  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "'Arial', sans-serif",
          background: "#189ab4",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            textDecoration: "underline",
            color: "#eeede7",
            margin: "20px 0",
            animation: "fadeInOut 3s infinite",
          }}
        >
          Sign Up
        </h1>
        <div
          style={{
            width: "100%",
            maxWidth: "450px",
            margin: "10px 0",
            padding: "20px",
            textAlign: "center",
            background: "#d4f1f4",
            borderRadius: "8px",
          }}
        >
          <input
            type="text"
            placeholder="Username"
            style={{
              width: "100%",
              padding: "12px",
              margin: "15px 0",
              fontSize: "16px",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "12px",
              margin: "15px 0",
              fontSize: "16px",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "12px",
              margin: "15px 0",
              fontSize: "16px",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            style={{
              width: "100%",
              padding: "12px",
              margin: "15px 0",
              fontSize: "16px",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "15px 0",
            }}
          >
            <input type="radio" style={{ marginRight: "10px" }} />
            <h6 style={{ fontSize: "14px", margin: "0" }}>
              I Agree To The Terms & Conditions
            </h6>
          </div>
          <span>
            <style>{keyframes}</style>
            <button
              style={{
                backgroundColor: "#145da0",
                color: "#fff",
                padding: "12px 20px",
                fontSize: "18px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              SIGN UP
            </button>
          </span>
          <h6
            style={{
              fontSize: "14px",
              margin: "20px 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            DON'T HAVE AN ACCOUNT?
            <span
              style={{
                marginLeft: "5px",
                color: "#0e86d4",
                cursor: "pointer",
              }}
            >
              LOGIN NOW!
            </span>
          </h6>
        </div>
        <div style={{ fontSize: "12px", color: "#c3e0e5", marginTop: "10px" }}>
          Ⓒ 2024 SignUp Form . All rights reserved ! Design By Surya
        </div>
      </div>
    </div>
  );
};

export default SignUp;
