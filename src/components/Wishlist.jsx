import React from "react";
function Wishlist({ wishlistItems, wishlistOpen, toggleWishlist }) {
  return (
    <section className="wishlist pt-5">
      <div className="bg-light container rounded-3 p-4">
        <button
          className="btn-close float-end"
          onClick={() => wishlistOpen(false)}
        ></button>
        <h3>Wishlists : </h3>
        <hr />
        <div className="d-flex flex-column gap-2">
          {wishlistItems.length !== 0 ? (
            wishlistItems.map((value, index) => {
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
                    <p>
                      <b className="me-5">Price : </b>
                      <i className="bi bi-currency-rupee me-2"></i>
                      {value.price}
                    </p>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => toggleWishlist(value.title)}
                    >
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="fs-5 text-center fw-bold">Wishlist is empty :(</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Wishlist;
