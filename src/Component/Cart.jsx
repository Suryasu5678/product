import React from "react";
import Quantity from "./Quantity";

const Cart = ({ cart, updateCartQuantity, removeFromCart }) => {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const updateQuantityInCart = (productId, newQuantity) => {
    updateCartQuantity(productId, newQuantity);
  };
  
  

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ background: "black", color: "white" }}>Cart Details</h1>
      {cart.length === 0 ? (
        <p style={{ marginTop: "200px", fontSize: "30px", color: "red" }}>
          Your cart is empty
        </p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #ccc",
                background: "grey",
                marginBottom: "20px",
              }}
            >
              <div style={{ flex: 1, textAlign: "center" }}>
                <h3>{item.title}</h3>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <Quantity
                  productId={item.id}
                  updateQuantityInCart={updateQuantityInCart}
                />
              </div>
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100px",
                    height: "auto",
                    objectFit: "contain",
                    marginBottom: "10px",
                    border: "3px solid black",
                    borderRadius: "50%",
                  }}
                />
                <p>
                  Price: ${item.price} x {item.quantity}
                </p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
