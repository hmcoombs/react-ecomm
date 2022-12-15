import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import ProductMainPage from "./components/ProductMainPage";
import ProductDetailPage from "./components/ProductDetailPage";
import Checkout from "./components/Checkout";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const storeApi = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <Router>
      <div className="nav1">
        <NavBar />
      </div>

      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              exact
              path="/"
              element={<ProductMainPage products={products} />}
            />
            <Route exact path="/Products/:id" element={<ProductDetailPage />} />
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/Checkout" element={<Checkout />} />
          </Routes>
        </header>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
