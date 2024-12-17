import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalState, useGlobalDispatch } from "./GlobalStateContext";
import { actionTypes } from "./Reducer";
import Spinner from "./Spinner";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, cart, loading } = useGlobalState();
  const dispatch = useGlobalDispatch();
  const [productDetail, setProductDetail] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(""); 
  const [severity, setSeverity] = useState("success");

  useEffect(() => {
    if (!loading && products.length > 0 && id) {
      const product = products.find((pro) => pro.id.toString() === id);
      setProductDetail(product || null);
    }
  }, [id, products, loading]);

  const handleAddToCart = () => {
    if (productDetail) {
      const existingProduct = cart.find((item) => item.id === productDetail.id);
      if (!existingProduct) {
    
        dispatch({
          type: actionTypes.ADD_TO_CART,
          payload: productDetail,
        });
        setSnackbarMessage("Your Product Is Added To Cart");
        setSeverity("success"); 
        handleSnackbarOpen();
      } else {
        
        setSnackbarMessage("This product is already in the cart.");
        setSeverity("error");
        handleSnackbarOpen();
      }
    }
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleButtonClick = () => {
    handleAddToCart();
  };

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!productDetail) {
    return (
      <div style={styles.errorContainer}>
        <span>Product not found</span>
      </div>
    );
  }

  const { title, description, image, price } = productDetail;

  return (
    <div style={styles.productDetails}>
      <h1 style={styles.productTitle}>{title}</h1>
      <img src={image} alt={title} style={styles.productImage} />
      <p style={styles.productDescription}>{description}</p>
      <p style={styles.productPrice}>Price: ${price}</p>
      <button onClick={handleButtonClick} style={styles.addToCartButton}>
        Add to Cart
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

const styles = {
  errorContainer: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "24px",
    color: "#ff5733",
    fontWeight: "bold",
  },
  productDetails: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "20px auto",
  },
  productTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  productImage: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  productDescription: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  productPrice: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "20px",
  },
  addToCartButton: {
    padding: "12px 25px",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default ProductDetails;
