// src/Component/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSnackBar } from "./SnackBarContext"; // Import the useSnackBar hook

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  const { showSnackbar } = useSnackBar(); // Get the showSnackbar function
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
      showSnackbar("Product added to cart!", "success"); // Show snackbar
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!productDetail) {
    return <div>Product not found</div>;
  }

  const { title, description, image, price } = productDetail;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
