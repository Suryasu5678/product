import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const bgColors = ["#FFDEE9", "#B5FFFC", "#D4FC79", "#C471ED", "#FBC2EB"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Poppins', Arial, sans-serif",
        padding: "20px",
        backgroundColor: bgColors[currentBgIndex],
        transition: "background-color 1s ease-in-out",
        color: "#333",
      }}
    >
      <section style={{ marginBottom: "40px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "50px",
              color: "#222",
              background: "linear-gradient(to right, #FF7E5F, #FEB47B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome to Our Shop 💼
          </h2>
          <p style={{ fontSize: "20px", color: "#666" }}>
            Discover exclusive collections and limited-time offers
          </p>
        </div>
      </section>

      <section style={{ marginBottom: "40px", textAlign: "center" }}>
        <div>
          <h3
            style={{
              paddingBottom:"20px",
              fontSize: "30px",
              color: "#222",
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            Shop Now 🛒🛍️✨
          </h3>
          <Link to="/productdetails">
            <button
              style={{
                padding: "12px 30px",
                fontSize: "18px",
                cursor: "pointer",
                background: "linear-gradient(to right, #F37335, #FDC830)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      <section style={{ marginBottom: "40px", textAlign: "center" }}>
        <div>
          <h3
            style={{
              fontSize: "30px",
              color: "#222",
              
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            Don’t Miss Out!
          </h3>
          <p style={{ fontSize: "20px", color: "#666"         ,     paddingBottom:"20px",
 }}>
            Sign up to be the first to know about our latest offers.
          </p>
          <Link to="/signup">
            <button
              style={{
                padding: "12px 30px",
                fontSize: "18px",
                cursor: "pointer",
                background: "linear-gradient(to right, #F37335, #FDC830)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </section>

      <section style={{ marginBottom: "40px", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "40px",
              color: "#222",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "30px",
            }}
          >
            Our Collections
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{
                  flex: "1",
                  padding: "20px",
                  background:
                    "linear-gradient(to bottom,rgb(141, 14, 251),rgb(26, 189, 94))",
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
                  borderRadius: "20px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <h4
                  style={{
                    fontSize: "24px",
                    marginBottom: "35px",
                    color: "black",
                    border: "2px dashed black",
                  }}
                >
                  Collection {item}
                </h4>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakRSrH-Xq9bFNrAkyy9P5PM0BtTHHWq4H2g&s"
                  alt={`Collection ${item}`}
                  style={{
                    width: "100%",
                    height: "50%",
                    objectFit: "fill",
                    borderRadius: "50px 10px",
                    marginBottom: "30px",
                  }}
                />
                <p
                  style={{
                    fontSize: "16px",
                    marginBottom: "100px",
                    color: "black",
                    fontFamily: "italic",
                  }}
                >
                  stylish wear...High Discount
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
