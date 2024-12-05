import React,  {useState} from "react";
import { Link ,useNavigate} from "react-router-dom";

const Bike = ({ bikes }) => {
  const[gif,setGif]=useState(null )
  const navigate = useNavigate()
   const handleNavigate = (bike) => {
    
    navigate(`/bikeDetail/${bike.id}`,{
       state: {
         name: bike.name,
         description: bike.description,
         image: bike.image,
         gif:bike.gif
       },
     });
   };
  return (
    <div
      style={{
        display: "flex",
        gap: "120px",
        justifyContent: "center",
        flexWrap: "wrap",
        background: "linear-gradient(45deg, #6A5ACD, #00BFFF)",
        position: "relative",
        boxShadow: "5 10px 18px rgba(19, 9, 5, 4.9)",

        backgroundPosition: "center",
        backgroundSize: "cover",
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
            boxShadow: "5 10px 18px rgba(19, 9, 5, 4.9)",
            maxWidth: "250px",
            width: "100%",
          }}
        >
          <div>
            <div>
              <div
                onClick={() => handleNavigate(bike)}
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  boxShadow: "1 6px 8px rgba(19, 9, 5, 0.9)",
                  background: "green",
                  borderRadius: "50px",
                  padding: "20px 20px",
                  display: "block",
                  marginTop: "10px",
                }}
              >
                <img
                  src={gif === bike.id ? bike.gif : bike.image}
                  alt={bike.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",

                    transition: " transform 0.5s ease, opacity 0.5s ease",
                  }}
                  onMouseEnter={() => setGif(bike.id)}
                  onMouseLeave={() => setGif(null)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bike;
