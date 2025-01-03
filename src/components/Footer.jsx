import React from "react";
import "./css/Footer.css";
import logo from "../images/shop.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer p-4 px-5 bg-dark text-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 px-4 col-md-6 col-sm-12">
            <a href="/" className="title">
              <img
                src={logo}
                alt="logo"
                height={"30px"}
                className="me-2 mb-2"
              />
              <span>Eco</span> Shop
            </a>
            <div className="d-flex flex-column gap-2 ps-3 mt-3">
              <a href="/">Track Order</a>
              <a href="/">Delivery & Returns</a>
              <a href="/">Warranty</a>
              <div className="social-icons d-flex gap-3">
                <a href="/">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="/">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="/">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 px-4 col-md-6 col-sm-12">
            <h5>About Us</h5>
            <div className="d-flex flex-column gap-2 ps-3 mt-3">
              <a href="/">Work With Us</a>
              <a href="/">Corporate News</a>
              <a href="/">Investors</a>
            </div>
          </div>
          <div className="col-lg-3 px-4 col-md-6 col-sm-12">
            <h5>Useful Links</h5>
            <div className="d-flex flex-column gap-2 ps-3 mt-3">
              <a href="/">Secure Payments</a>
              <Link to="/terms&conditions">Terms and Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <a href="/">Archeived Products</a>
            </div>
          </div>
          <div className="col-lg-3 px-4 col-md-6 col-sm-12">
            <h5>Contact Info</h5>
            <div className="d-flex flex-column gap-2 mt-3">
              <div className="d-flex gap-4 align-items-center">
                <div className="icon-container">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <b>Address : </b>
                  <p>
                    Madurai -625017.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 mt-3">
              <div className="d-flex gap-4 align-items-center">
                <div className="icon-container">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <b>Phone : </b>
                  <p>+91 9876543210</p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 mt-3">
              <div className="d-flex gap-4 align-items-center">
                <div className="icon-container">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <b>Email : </b>
                  <p>sbsankar.80701@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center  text-secondary px-5">
          <div className="copy-rights">©2024 EcoShop All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
