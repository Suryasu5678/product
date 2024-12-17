import React from "react";

const Quantity = ({ productId, updateQuantityInCart, currentQuantity }) => {
  const handleIncrease = () => {
    updateQuantityInCart(productId, currentQuantity + 1);
  };

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      updateQuantityInCart(productId, currentQuantity - 1);
    }
  };

  return (
    <div style={styles.quantityContainer}>
      <button onClick={handleDecrease} style={styles.quantityButton}>
        🔽
      </button>
      <span style={styles.quantityText}>{currentQuantity}</span>
      <button onClick={handleIncrease} style={styles.quantityButton}>
        🔼
      </button>
    </div>
  );
};

const styles = {
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  quantityButton: {
    background: "rgb(30, 107, 90)",
    border: "1px solid black",
    borderRadius: "50px  ",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "15px",
  },
  quantityText: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#333",
  },
};

export default Quantity;
