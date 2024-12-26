import React from "react";
import "./css/Card.css";
function Card({ product, toggleWishlist, increaseCartCount, reduceCartCount }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 p-4">
      <div className="bg-white rounded-4 product-card shadow-lg">
        <img src={product.img} alt="product_image" />
        <div className="p-3 text-center fw-bold">
          <div className="product-title d-flex align-items-center justify-content-between">
            <h4>{product.title}</h4>
            <i
              className={`bi ${
                product.wishlist ? "bi-heart-fill" : "bi-heart"
              }`}
              onClick={() => {
                toggleWishlist(product.title);
              }}
              style={{ color: product.wishlist ? "red" : "black" }}
            ></i>
          </div>
          <div className="product-price d-flex justify-content-between mt-3 px-3">
            <b>Price :</b>
            <p>
              <i className="bi bi-currency-rupee"></i>
              {product.price}
            </p>
          </div>
          <div className="pb-0">
            {product.count === 0 ? (
              <button
                className="btn btn-outline-success w-100"
                onClick={() => increaseCartCount(product.title)}
              >
                Add Cart
                <i className="bi bi-cart-plus-fill ms-2"></i>
              </button>
            ) : (
              <>
                <button
                  className="btn btn-outline-success"
                  onClick={() => reduceCartCount(product.title)}
                >
                  <i className="bi bi-dash"></i>
                </button>
                <p className="d-inline-block mx-5 mb-0">{product.count}</p>
                <button
                  className="btn btn-outline-success"
                  onClick={() => increaseCartCount(product.title)}
                >
                  <i className="bi bi-plus"></i>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
