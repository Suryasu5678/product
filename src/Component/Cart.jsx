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
    <div style={{ marginTop: "50px", padding: "20px" }}>
      <div style={
        {
          display:"flex",
          justifyContent:"center"
        }
      }>
        <div
          style={{
            backgroundColor: "#828EF9",
            color: "black",
            padding: "10px",
          }}
        >
          Cart Details
        </div>
      </div>

      {cart.length === 0 ? (
        <p
          style={{
            marginTop: "200px",
            fontSize: "30px",
            color: "red",
            textAlign: "center",
          }}
        >
          Your cart is empty
        </p>
      ) : (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px 20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                background: "#fff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",

                  flex: "1 1 calc(25% - 30px)",
                  maxWidth: "calc(25% - 30px)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <div>
                  <Quantity
                    productId={item.id}
                    updateQuantityInCart={updateQuantityInCart}
                  />
                </div>

                <p
                  style={{
                    marginRight: "30px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  ${item.price.toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: "white",
                    border: "none",
                    color: "red",
                    cursor: "pointer",
                    fontSize: "26px",
                    Width: "auto%",
                    Height: "auto%",
                    padding: "0px",
                    margin: "0px",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "blue")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#333",
              marginTop: "20px",
            }}
          >
            Total Price: ${totalPrice.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
