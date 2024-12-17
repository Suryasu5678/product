import React from "react";
import { useGlobalState, useGlobalDispatch } from "./GlobalStateContext";
import { actionTypes } from "./Reducer";
import { FaTrashAlt } from "react-icons/fa";
import Quantity from "./Quantity";


const Cart = () => {
  const { cart } = useGlobalState();
  const dispatch = useGlobalDispatch();

  const handleRemove = (id) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
  };
const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const updateQuantityInCart = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch({
      type: actionTypes.UPDATE_QUANTITY,
      payload: { productId, newQuantity },
    });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div style={styles.emptyCartContainer}>
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div style={styles.cartContainer}>
      {cart.map((item) => (
        <div key={item.id} style={styles.cartItem}>
          <div style={styles.itemDetails}>
            <img src={item.image} alt={item.title} style={styles.itemImage} />
            <span style={styles.itemTitle}>{item.title}</span>
          </div>
          <div style={styles.cartActions}>
            <Quantity
              productId={item.id}
              updateQuantityInCart={updateQuantityInCart}
              currentQuantity={item.quantity}
            />
            <span style={styles.itemPrice}>${item.price.toFixed(2)}</span>
            <span style={styles.itemTotalPrice}>
              Total: ${(item.price * item.quantity).toFixed(2)}
            </span>
            <button
              onClick={() => handleRemove(item.id)}
              style={styles.removeButton}
            >
              <FaTrashAlt style={styles.removeIcon} />
            </button>
          </div>
        </div>
      ))}

      <div style={styles.cartTotal}>
        <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
      </div>
    </div>
  );
};

const styles = {
  cartContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    background:"lightblue",
    height: "100vh",
  },

  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "lightgray",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(30, 21, 21, 0.1)",
  },
  itemDetails: {
    display: "flex",
    alignItems: "center",
    gap: "100px",
  },
  itemImage: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  itemTitle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
  },
  cartActions: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  removeButton: {
    backgroundColor: "#ff0000",
    border: "none",
    borderRadius: "50%",
    padding: "8px",
    cursor: "pointer",
    transition: "background-color 5s",
  },
  removeIcon: {
    fontSize: "18px",
    color: "#fff",
  },
  itemPrice: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
  },
  itemTotalPrice: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#2e8b57",
  },
  cartTotal: {
    marginTop: "20px",
    textAlign: "right",
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  quantityButton: {
    background: "#f4f4f4",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  quantityText: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#333",
  },
  emptyCartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    background: "lightblue",
    fontSize: "100px",
    backgroundImage: "brightness(2.5)",
  },
  emptyCartTitle: {
    fontSize: "50px",
    fontWeight: "100",
    color: "#870a30",
  },
};

export default Cart;
