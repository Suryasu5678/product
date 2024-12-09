import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const product = products.find((pro) => pro.id.toString() === id);
    setProductDetail(product);
    setLoading(false);
  }, [id, products]);

  const handleAddToCart = () => {
    if (productDetail) {
      addToCart(productDetail);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          fontSize: "24px",
          color: "#555",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!productDetail) {
    return (
      <div
        style={{
          fontSize: "24px",
          color: "red",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Product not found
      </div>
    );
  }

  const { title, description, image, price } = productDetail;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#828EF9",
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            flex: "1 1 calc(25% - 30px)",
            maxWidth: "calc(25% - 30px)",
            alignItems: "center",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "80%",
              maxWidth: "380px",
              height: "600px",
              backgroundColor: "#828EF9",
            }}
          />
        </div>
        <div
          style={{
            flex: 2,
            padding: "40px",
            color: "#333",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#2D3748",
              marginBottom: "10px",
              wordWrap: "break-word",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#4A5568",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            {description}
          </p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#48BB78",
              marginBottom: "30px",
            }}
          >
            Price: ${price}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "50%",
            }}
          >
            <button
              onClick={handleAddToCart}
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "#828EF9",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
                width: "100%",
                maxWidth: "220px",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4A5568")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#828EF9")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
