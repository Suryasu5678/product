import React  from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();

   const handleClick = () => {
     
     navigate("/home");
   };
   return (
     <div
       style={{ fontSize: "130px", marginLeft: "200px", marginTop: "100px" }}
       onClick={handleClick}
     >
       Home
     </div>
   );
}

export default Home