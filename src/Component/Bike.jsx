import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState, useGlobalDispatch } from "./GlobalStateContext";
import { actionTypes } from "./Reducer";

const Bike = () => {
  const [gif, setGif] = useState(null);
  const navigate = useNavigate();
  const { bikes } = useGlobalState();
  const dispatch = useGlobalDispatch();

  const handleNavigate = (bike) => {
    navigate(`/bikedetail/${bike.id}`, {
      state: {
        name: bike.name,
        description: bike.description,
        image: bike.image,
        gif: bike.gif,
      },
    });
  };

  return (
    <div>
      {bikes.map((bike) => (
        <div key={bike.id}>
          <img
            src={gif === bike.id ? bike.gif : bike.image}
            alt={bike.name}
            onMouseEnter={() => setGif(bike.id)}
            onMouseLeave={() => setGif(null)}
          />
          <button onClick={() => handleNavigate(bike)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default Bike;
