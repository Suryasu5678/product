import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const BikeDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [bikeDetail, setBikeDetail] = useState(location.state || null);
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!bikeDetail) {
      setLoading(true);
      const fetchBikeDetail = async () => {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );
          const data = await response.json();
          setBikeDetail(data);
        } catch (error) {
          console.error("Error fetching bike detail:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchBikeDetail();
    }
  }, [id, bikeDetail]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bikeDetail) {
    return <div>Bike not found</div>;
  }

  const { title, description, image, gif } = bikeDetail;

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        padding: windowWidth < 768 ? "20px" : "50px",
      }}
    >
      <h1 style={{ fontSize: windowWidth < 768 ? "24px" : "36px" }}>{title}</h1>
      <p
        style={{
          fontSize: windowWidth < 768 ? "14px" : "18px",
          marginBottom: "20px",
        }}
      >
        {description}
      </p>
      <img
        src={image}
        alt={title}
        style={{
          width: windowWidth < 768 ? "80%" : "300px",
          height: "auto",
          borderRadius: "10px",
          transition: "transform 0.3s ease",
        }}
      />
      <div style={{ marginTop: "20px" }}>
        <h2>GIF Preview</h2>
        <img
          src={gif}
          alt={`${title} GIF`}
          style={{
            width: windowWidth < 768 ? "80%" : "300px",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default BikeDetails;
