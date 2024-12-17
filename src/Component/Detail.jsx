import React from "react";
import { useGlobalState } from "./GlobalStateContext";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
const Detail = () => {
  const { products, loading } = useGlobalState();
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/productdetail/${id}`);
  };

  if (loading) {
    return (
      <div className="pos-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
        background: "#71e7e0",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            textAlign: "center",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            backgroundColor: "black",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              cursor: "pointer",
              borderBottom: "2px solid #f1f1f1",
            }}
            onClick={() => handleImageClick(product.id)}
          />
          <h3
            style={{
              margin: "10px 0",
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {product.title}
          </h3>
          <p
            style={{
              color: "#28a745",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
};




export default Detail;
