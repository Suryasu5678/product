import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Bike from "./Component/Bike";
import BikeDetails from "./Component/BikeDetails";
import Detail from "./Component/Detail";
import NotFoundPage from "./Component/NotFound";
import ProductDetails from "./Component/ProductDetails";
import Cart from "./Component/Cart";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const bikes = [
    {
      id: 1,
      name: "Himalaya",
      description: "Off Road",
      image:
        "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_640.jpg",
      gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFsKVlSG6OCFgkb0fklTsho1-BbaxSpiMhgZt8mbjiJUtURZWSY7H1vUiUvsHwwHwgFrnB&s",
    },
    {
      id: 2,
      name: "Duke 390",
      description: "Sport Bike",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWVTc9egJurrtgx1rFx3fgbWe2PxNHgjTeLBAD6w2TCmu1wHnBRkAg6ZW5oQofmuuPMac&usqp=CAU",
      gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JWYFEKc0eQd7C7-NNGNxVDF_b-stBlRmYtcPMrUi2WjZlCLezUFJ7uw&s",
    },
    {
      id: 3,
      name: "GT 650",
      description: "Cruiser Bike",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwIXBrbDTr6djJD4hFskNV8G3goFnwa1-zL0_6kotOYTT8A6bVwoNNunVSTOrWk3h0ro&usqp=CAU",
      gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDtGbRHcbQrexQusaPt1Z0ZbIGLs6zbAklubf6thhSZu1qcCqxCbCIXY&s",
    },
  ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
   const updateCartQuantity = (productId, newQuantity) => {
     setCart(
       cart.map((item) =>
         item.id === productId ? { ...item, quantity: newQuantity } : item
       )
     );
   };

   const removeFromCart = (productId) => {
     setCart(cart.filter((item) => item.id !== productId));
   };

  return (
    <div>
      <nav
        style={{
          position: "sticky",
          top: "0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(45deg, red, yellow)",
          height: "60px",
          paddingTop: "15px",
          zIndex: "100",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "29px",
            listStyleType: "none",
            margin: 0,
            padding: 0,
            color: "white",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "90%",
          }}
        >
          <li style={{ margin: "0 20px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li style={{ margin: "0 20px" }}>
            <Link to="/bike" style={{ textDecoration: "none", color: "white" }}>
              Bike
            </Link>
          </li>
          <li style={{ margin: "0 20px" }}>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact
            </Link>
          </li>
          <li style={{ margin: "0 20px" }}>
            <Link
              to="/detail"
              style={{ textDecoration: "none", color: "white" }}
            >
              Products
            </Link>
          </li>
          <li style={{ margin: "0 20px" }}>
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bike" element={<Bike bikes={bikes} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bikedetail/:id" element={<BikeDetails bikes={bikes} />} />
        <Route path="/detail" element={<Detail products={products} />} />
        <Route
          path="/productdetail/:id"
          element={<ProductDetails products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
