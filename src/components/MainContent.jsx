import React from "react";
import "./css/MainContent.css";
import Card from "./Card";
function MainContent({
  products,
  toggleWishlist,
  increaseCartCount,
  reduceCartCount,
}) {
  return (
    <section className="main">
      <div className="container">
        <div className="col-lg-8 text-white mx-auto main-title">
          <h2>Fresh Grocery</h2>
          <h1 className="display-2 fw-semibold my-3">
            There's you can buy <br /> your all of Grocery <br /> Products.
          </h1>
          <button className="btn btn-warning py-2 px-4">
            Shop Now <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="container-fluid mt-5 p-3 pb-5 bg-light">
        <h2 className="container mb-4 display-6 mt-3 fw-semibold">
          Top Selling Products
        </h2>
        <div className="container products-container p-5">
          <div className="row">
            {products.map((value, index) => (
              <Card
                product={value}
                key={index}
                toggleWishlist={toggleWishlist}
                increaseCartCount={increaseCartCount}
                reduceCartCount={reduceCartCount}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
