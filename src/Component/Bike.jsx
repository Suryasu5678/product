import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Bike = ({ bikes }) => {
  const [gif, setGif] = useState(null);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (bike) => {
    navigate(`/bikeDetail/${bike.id}`, {
      state: {
        name: bike.name,
        description: bike.description,
        image: bike.image,
        gif: bike.gif,
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        gap: windowWidth < 768 ? "20px" : "120px",
        justifyContent: "center",
        flexWrap: "wrap",
        background: "linear-gradient(45deg, #6A5ACD, #00BFFF)",
        position: "relative",
        boxShadow: "5px 10px 18px rgba(19, 9, 5, 0.49)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "20px",
      }}
    >
      {bikes.map((bike) => (
        <div
          key={bike.id}
          style={{
            textAlign: "center",
            backgroundColor: "lightgreen",
            borderRadius: "19px",
            padding: "40px",
            marginTop: "10px",
            marginBottom: "10px",
            paddingTop: "30px",
            boxShadow: "5px 10px 18px rgba(19, 9, 5, 0.49)",
            maxWidth: windowWidth < 768 ? "100%" : "250px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div>
            <div
              onClick={() => handleNavigate(bike)}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                boxShadow: "1px 6px 8px rgba(19, 9, 5, 0.9)",
                background: "green",
                borderRadius: "50px",
                padding: "20px",
                display: "block",
                marginTop: "10px",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={gif === bike.id ? bike.gif : bike.image}
                alt={bike.name}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                }}
                onMouseEnter={() => setGif(bike.id)}
                onMouseLeave={() => setGif(null)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bike;
