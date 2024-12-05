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
  }, []);

  const handleAddToCart = () => {
    if (productDetail) {
      addToCart(productDetail);
    }
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

  if (!productDetail) {
    return (
      <div
        style={{
          fontSize: "1.5rem",
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
        textAlign: "center",
        marginTop: "50px",
        display: "inline-block",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1685495856559-5d96a0e51acb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "40px",
        borderRadius: "50px",
        boxShadow: "50 10px 50px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "auto",
       
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "white",
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "yellow",
          marginBottom: "20px",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>
      <div style={{ marginBottom: "20px" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "50px 10px ",
            boxShadow: "6 10px 50px rgba(5, 0, 0, 0.1)",
          }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <p
          style={{
            fontSize: "1.5rem",
            color: "lightgreen",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Price: ${price}
        </p>
        <button
          onClick={handleAddToCart}
          style={{
            backgroundColor: "darkgreen",
            color: "white",
            border: "none",
            padding: "12px 30px",
            fontSize: "1rem",
            borderRadius: "15px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
