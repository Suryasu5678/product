import React from "react";
import { useGlobalState, useGlobalDispatch } from "./GlobalStateContext";
import { actionTypes } from "./Reducer";

const Cart = () => {
  const { cart } = useGlobalState();
  const dispatch = useGlobalDispatch();

  const updateCartQuantity = (productId, newQuantity) => {
    dispatch({
      type: actionTypes.UPDATE_CART_QUANTITY,
      payload: { id: productId, quantity: newQuantity },
    });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: productId });
  };

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <button
            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
          >
            Increase
          </button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
