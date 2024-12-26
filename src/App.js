import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import mainProducts from "./assets/product.json";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  const [products, setProducts] = useState(mainProducts);
  const [wishlistItems, setWishListItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishList] = useState(false);
  const [cart, setCart] = useState(false);

  const toggleWishlist = (productTitle) => {
    setProducts((prev) => {
      return prev.map((value) => {
        if (value.title === productTitle) {
          return { ...value, wishlist: value.wishlist ? false : true };
        } else return value;
      });
    });
  };

  const increaseCartCount = (productTitle) => {
    setProducts((prev) => {
      return prev.map((value) => {
        if (value.title === productTitle) {
          return { ...value, count: value.count + 1 };
        } else return value;
      });
    });
  };
  const reduceCartCount = (productTitle) => {
    setProducts((prev) => {
      return prev.map((value) => {
        if (value.title === productTitle && value.count > 0) {
          return { ...value, count: value.count - 1 };
        } else return value;
      });
    });
  };

  useEffect(() => {
    setWishListItems(() => products.filter((value) => value.wishlist));
    setCartItems(() => products.filter((value) => value.count !== 0));
    console.log(products);
  }, [products]);

  return (
    <div style={{ height: "100vh", overflowY: wishlist ? "hidden" : "scroll" }}>
      <Header
        wishlistCount={wishlistItems.length}
        wishlistOpen={setWishList}
        cartOpen={setCart}
        cartCount={cartItems.length}
      />

      {wishlist && (
        <Wishlist
          wishlistItems={wishlistItems}
          wishlistOpen={setWishList}
          toggleWishlist={toggleWishlist}
        />
      )}
      {cart && (
        <Cart
          cartItems={cartItems}
          increaseCartCount={increaseCartCount}
          reduceCartCount={reduceCartCount}
          cartOpen={setCart}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <MainContent
              products={products}
              toggleWishlist={toggleWishlist}
              increaseCartCount={increaseCartCount}
              reduceCartCount={reduceCartCount}
            />
          }
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
