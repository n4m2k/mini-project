import React, { useState, useEffect } from "react";
import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    fetch("https://633ae702471b8c395577e317.mockapi.io/api/v1/product")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListProduct(data);
      }, []);
  });
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-detail" element={<ProductDetails />}>
            <Route path=":id" element={<ProductDetails />}></Route>
          </Route>
          <Route path="/" element={<Homepage></Homepage>} exact="true" />
        </Routes>
      </Sidebar>
      <Footer />
    </div>
  );
};

export default App;
