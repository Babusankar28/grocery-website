import React from "react";
import "./css/Header.css";
import logo from "../images/shop.png";
import { Link } from "react-router-dom";
function Header({ wishlistCount, wishlistOpen, cartOpen, cartCount }) {
  return (
    <header className="header py-3 shadow">
      <div className="container d-flex justify-content-between  flex-wrap">
        <Link to="/" className="title">
          <img src={logo} alt="logo" height={"30px"} className="me-2 mb-2" />
          <span>Eco</span> Shop
        </Link>
        <div className=" order-lg-0 order-1  mx-auto">
          <div className="header-inputs ">
            <input
              type="text"
              placeholder="Search Products......"
              className="me-3"
            />
            <select name="category">
              <option>All Categories</option>
              <option value="vegitables">Vegitables</option>
              <option value="fruits">Fruits</option>
              <option value="juice">Juice</option>
              <option value="meats">Meats</option>
            </select>
            <button type="button">Search</button>
          </div>
        </div>
        <div className="header-buttons">
          <button onClick={() => wishlistOpen(true)}>
            <i className="bi bi-heart"></i>
            <span>{wishlistCount}</span>
          </button>
          <button onClick={() => cartOpen(true)}>
            <i className="bi bi-bag"></i>
            <span>{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
