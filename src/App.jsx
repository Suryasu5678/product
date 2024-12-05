import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Bike from "./Component/Bike";
import BikeDetails from "./Component/BikeDetails";
import Detail from "./Component/Detail";
import NotFoundPage from "./Component/NotFound";
import ProductDetails from "./Component/ProductDetails";

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
      image: "https://link-to-image1.jpg",
    },
    {
      id: 2,
      name: "Duke 390",
      description: "Sport Bike",
      image: "https://link-to-image2.jpg",
    },
    {
      id: 3,
      name: "GT 650",
      description: "Cruiser Bike",
      image: "https://link-to-image3.jpg",
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
 
console.log(cart)

  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "70px",
            background: "linear-gradient(45deg, red, yellow)",
            height: "50px",
            paddingLeft: "240px",
            paddingTop: "15px",
            listStyleType: "none",
            color: "white",
          }}
        >
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/bike" style={{ textDecoration: "none", color: "white" }}>
              Bike
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/detail"
              style={{ textDecoration: "none", color: "white" }}
            >
              Products
            </Link>
          </li>
          <li>
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
