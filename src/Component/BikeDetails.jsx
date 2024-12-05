import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function BikeDetails({ bikes }) {
  const { id } = useParams();
  const location = useLocation();

  const [bikeDetail, setBikeDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("test")
    setLoading(true);
    const bike = bikes.find((bike) => bike.id.toString() === id);
    setBikeDetail(bike);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bikeDetail) {
    return <div>Bike not found</div>;
  }

  const { name, description, image } = bikeDetail;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={image} alt={name} style={{ width: "300px", height: "auto" }} />
    </div>
  );
}

export default BikeDetails;
