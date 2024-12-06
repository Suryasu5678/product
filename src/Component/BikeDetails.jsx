import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function BikeDetails({ bikes }) {
  const { id } = useParams();
  const location = useLocation();

  const [bikeDetail, setBikeDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setLoading(true);
    const bike = bikes.find((bike) => bike.id.toString() === id);
    setBikeDetail(bike);
    setLoading(false);
  }, [id, bikes]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bikeDetail) {
    return <div>Bike not found</div>;
  }

  const { name, description, image } = bikeDetail;

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        padding: windowWidth < 768 ? "20px" : "50px", // Adjust padding based on screen size
      }}
    >
      <h1 style={{ fontSize: windowWidth < 768 ? "24px" : "36px" }}>{name}</h1>
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
        alt={name}
        style={{
          width: windowWidth < 768 ? "80%" : "300px",
          height: "auto",
          borderRadius: "10px",
          transition: "transform 0.3s ease",
        }}
      />
    </div>
  );
}

export default BikeDetails;
