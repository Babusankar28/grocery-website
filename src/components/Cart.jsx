import React from "react";

function Cart({ increaseCartCount, reduceCartCount, cartItems, cartOpen }) {
  return (
    <section className="cart pt-5">
      <div className="bg-light container rounded-3 p-4">
        <button
          className="btn-close float-end"
          onClick={() => cartOpen(false)}
        ></button>
        <h3>Cart Items : </h3>
        <hr />
        {cartItems.length !== 0 ? (
          cartItems.map((value, index) => {
            return (
              <div
                className="d-flex justify-content-between p-2 px-3 align-items-center border-2 border"
                key={index}
              >
                <div>
                  <img
                    src={value.img}
                    alt="product "
                    height={"130px"}
                    style={{ objectFit: "contain" }}
                  />
                  <h4 className="text-center">{value.title}</h4>
                </div>
                <div>
                  <p className="d-flex justify-content-between my-2">
                    <b className="me-5">Price : </b>
                    <span>
                      <i className="bi bi-currency-rupee"></i>
                      {value.price}
                    </span>
                  </p>
                  <p className="d-flex justify-content-between my-2">
                    <b className="me-5">Count : </b>
                    {value.count}
                  </p>
                  <p className="d-flex justify-content-between my-2">
                    <b className="me-5">Total Price : </b>
                    <span>
                      <i className="bi bi-currency-rupee"></i>
                      {value.count * value.price}
                    </span>
                  </p>
                  <div>
                    <button
                      className="btn btn-primary"
                      onClick={() => reduceCartCount(value.title)}
                    >
                      <i className="bi bi-dash"></i>
                    </button>
                    <p className="d-inline-block mx-5">{value.count}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => increaseCartCount(value.title)}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="fs-5 text-center fw-bold">Your cart is empty:(</p>
        )}
      </div>
    </section>
  );
}

export default Cart;
