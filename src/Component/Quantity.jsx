import React, { useState } from "react";

const Quantity = ({ productId, updateQuantityInCart }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    updateQuantityInCart(productId, count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      updateQuantityInCart(productId, count - 1);
    }
  };

  return (
    <div
      style={{
       
        display: "flex",
        alignItems: "center",
        gap: "1px",
      }}
    >
      <span style={{ fontSize: "18px" }}>{count}</span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={increment}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          ⬆️
        </button>
        <button
          onClick={decrement}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          ⬇️
        </button>
      </div>
    </div>
  );
};

export default Quantity;
