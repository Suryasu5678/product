import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const Bike = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setBikes(data);
      } catch (error) {
        console.error("Error fetching bikes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  const handleNavigate = (bike) => {
    navigate(`/bikedetail/${bike.id}`, {
      state: {
        name: bike.title,
        description: bike.description,
        image: bike.image,
        gif: bike.image,
      },
    });
  };

  if (loading) {
    return <div ><Spinner/></div>;
  }

  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px - 200px)",
      }}
    >
      {loading ? (
        <div style={loadingStyle}>Loading...</div>
      ) : (
        <div style={containerStyle}>
          {bikes.map((bike) => (
            <div key={bike.id} style={cardStyle}>
              <img
                src={bike.image}
                alt={bike.title}
                style={imageStyle}
                onClick={() => handleNavigate(bike)}
              />
              <button onClick={() => handleNavigate(bike)} style={buttonStyle}>
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  padding: "20px",
  background: "grey",
  minHeight: "calc(100vh - 100px - 200px)",
};

const cardStyle = {
  width: "320px",
  textAlign: "center",
  padding: "10px",
  borderRadius: " 10px",
  background: "peachpuff",
};

const imageStyle = {
  width: "100%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "20px",
  cursor: "pointer",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const loadingStyle = {
  fontSize: "20px",
  color: "#007bff",
  textAlign: "center",
  marginTop: "50px",
  minHeight: "calc(100vh - 100px - 200px)",
};

export default Bike;
