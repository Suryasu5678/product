import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto";


const Detail = ({ products }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length) setLoading(false);
  }, [products]);

  const handleImageClick = (id) => {
    navigate(`/productdetail/${id}`);
  };

  if (loading) {
    return (
      <div
        style={{
          fontSize: "24px",
          color: "dimgray",
          textAlign: "center",
          marginTop: "50px",
        }}
      >  
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px 0px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "15px",
          fontSize: "20px",
          fontWeight: "bold",
          backgroundColor: "black",
          color: "white",
          marginBottom: "20px",
          width: "100%",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        CHOOSE YOUR FIT
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          maxWidth: "1124px",
          width: "100%",
          padding: "0 15px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              fontFamily: "'Roboto', sans-serif",
              color: "gray",
              padding: "10px",
              flex: "1 1 calc(25% - 30px)",
              maxWidth: "calc(25% - 30px)",
              boxSizing: "border-box",
              backgroundColor: "transparent",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "250px",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "lightgray",
                border: "1px solid gainsboro",
                boxSizing: "border-box",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
                onClick={() => handleImageClick(product.id)}
              />
            </div>
            <div className="product-title-container" title={product.title}>
              {product.title}
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "green",
                marginTop: "5px",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              ${product.price}
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          .product-title-container {
            font-size: 14px;
            font-weight: bold;
            color: black;
            margin-top: 10px;
            max-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: wrap;
            position: relative;
            cursor: pointer;
            transition: max-height 0.3s ease-in-out;
          }

          .product-title-container:hover {
            max-height: 100px;
            white-space: normal;
            overflow: visible;
          }
        `}
      </style>
    </div>
  );
};

export default Detail;
