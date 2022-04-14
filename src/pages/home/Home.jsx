import React, { useState } from "react";
import "./home.css";
import AddContainer from "../../containers/AddContainer";
import CartContainer from "../../containers/CartContainer";
import ProductsContainer from "../../containers/ProductsContainer";
import CommentsContainer from "../../containers/CommentsContainer";
import SellersContainer from "../../containers/SellersContainer";
import UsersContainer from "../../containers/UsersContainer";

import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home__wrapper">
        <div className="sidebar__wrapper">
          <nav>
            <Link to="/" className="sidebar__item">
              Add
            </Link>
            <Link to="/sellers" className="sidebar__item">
              Sellers
            </Link>
            <Link to="/products" className="sidebar__item">
              Products
            </Link>
            <Link to="/comments" className="sidebar__item">
              Comments
            </Link>
            <Link to="/cart" className="sidebar__item">
              Shopping cart
            </Link>
            <Link to="/users" className="sidebar__item">
              Users
            </Link>
          </nav>
        </div>
        <div className="content__wrapper">
          <Routes>
            <Route path="/" element={<AddContainer />} />
            <Route path="/sellers" element={<SellersContainer />} />
            <Route path="/products" element={<ProductsContainer />} />
            <Route path="/comments" element={<CommentsContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
