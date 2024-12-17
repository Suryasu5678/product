import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "./GlobalStateContext"; // Import global state

const Header = () => {
  const { cart } = useGlobalState(); // Get the cart from global state

  // Calculate the total number of items in the cart
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header
      style={{
        backgroundColor: "rgb(33, 80, 127)",
        color: "black",
        padding: "30px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        minHeight: "auto",
      }}
    >
      <nav
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/productdetails" style={linkStyle}>
          Products
        </Link>
        <Link to="/bike" style={linkStyle}>
          Bag
        </Link>
        <Link to="/cart" style={linkStyle}>
          Cart {cartItemCount > 0 && `(${cartItemCount})`}
        </Link>
        <Link to="/signup" style={linkStyle}>
          SignUp
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "28px",
};

export default Header;
