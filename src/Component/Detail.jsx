import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Detail = ({ products }) => {
  const [loading, setLoading] = useState(true);
  const [clickedImageId, setClickedImageId] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (products.length) setLoading(false);
  }, [products]);

  const handleImageClick = (id) => {
    setClickedImageId((prevId) => (prevId === id ? null : id));
    navigate(`/productdetail/${id}`);
  };

  if (loading) {
    return (
      <div
        style={{
          fontSize: "1.5rem",
          color: "#555",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    
    <div style={{ background: "grey" }}>
      <div
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "10px",
          background: "black",
          padding: "13px",
        }}
      >
        CHOOSE YOUR FIT
      </div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          background: "lightblue",
          listStyleType: "none",
          padding: "0",
          margin: "0",
        }}
      >
        {products.map((product) => (
          <li key={product.id} style={{ margin: "10px" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "150px",
                height: "150px",
                gap: "5px",
                borderRadius: "50%",
                boxShadow: "0px 5px 30px 1px rgba(29, 18, 9, 1)",
                transition: "transform 0.7s ease",
                cursor: "pointer",
                transform:
                  clickedImageId === product.id ? "scale(1.1)" : "scale(1)",
              }}
              onClick={() => handleImageClick(product.id)}
            />
            <div
              style={{
                width: "100px",
                marginTop: "5px",
                padding: "8px",
                textAlign: "center",
                color: "brown",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              {product.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Detail;
