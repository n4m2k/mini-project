import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Homepage = () => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://633ae702471b8c395577e317.mockapi.io/api/v1/product")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListProduct(data);
        setLoading(false);
      }, []);
  });
  return (
    <div className="products-catagories-area clearfix">
      <div className="amado-pro-catagory clearfix">
        {/* Single Catagory */}
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          listProduct.map((item) => {
            return (
              <div className="single-products-catagory clearfix">
                <NavLink to={`/product-detail/${item.id}`}>
                  <img src={item.image} alt="" />
                  {/* Hover Content */}
                  <div className="hover-content">
                    <div className="line" />
                    <p>From ${item.price}</p>
                    <h4>{item.productname}</h4>
                  </div>
                </NavLink>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Homepage;
