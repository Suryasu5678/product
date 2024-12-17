import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStateProvider } from "./Component/GlobalStateContext";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Bike from "./Component/Bike";
import BikeDetails from "./Component/BikeDetails";
import ProductDetails from "./Component/ProductDetails";
import Detail from "./Component/Detail";
import Cart from "./Component/Cart";
import NotFoundPage from "./Component/NotFound";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import SignUp from "./Component/SignUp";
import "./app.css";

function App() {
  return (
    <GlobalStateProvider>
      <div style={appStyles.wrapper}>
        <Header />
        <div style={appStyles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/bike" element={<Bike />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bikedetail/:id" element={<BikeDetails />} />
            <Route path="/productdetail/:id" element={<ProductDetails />} />
            <Route path="/productdetails" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </GlobalStateProvider>
  );
}

const appStyles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainContent: {
    flex: 1,
  },
};

export default App;
