// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStateProvider } from "./Component/GlobalStateContext";

import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Bike from "./Component/Bike";
import BikeDetails from "./Component/BikeDetails";
import ProductDetails from "./Component/ProductDetails";
import Cart from "./Component/Cart";
// import Footer from "./Component/Footer";
import NotFoundPage from "./Component/NotFound";

function App() {
  return (
    <SnackBarProvider>
      <GlobalStateProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/bike" element={<Bike />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bikedetail/:id" element={<BikeDetails />} />
            <Route path="/productdetail/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <SnackBar /> {/* Display the snackbar at the bottom */}
        </Router>
      </GlobalStateProvider>
    </SnackBarProvider>
  );
}

export default App;
