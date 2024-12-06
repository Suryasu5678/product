import React, { useState } from "react";

const Quantity = ({ productId, updateQuantityInCart }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
    updateQuantityInCart(productId, count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      updateQuantityInCart(productId, count - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Quantity;
