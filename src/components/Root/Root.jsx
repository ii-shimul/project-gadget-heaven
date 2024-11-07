import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
export const wishlistContext = createContext();

const Root = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const calculatedTotal = cart.reduce(
      (sum, product) => sum + product.price,
      0
    );
    setTotalPrice(calculatedTotal);
  }, [cart]);

  // dynamic titles
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home | Gadget Heaven";
        break;
      case "/dashboard":
        document.title = "Dashboard | Gadget Heaven";
        break;
      case "/dashboard/cart":
        document.title = "Cart | Dashboard | Gadget Heaven";
        break;
      case "/dashboard/wishlist":
        document.title = "Wishlist | Dashboard | Gadget Heaven";
        break;
      case "/statistics":
        document.title = "Statistics | Gadget Heaven";
        break;
      case "/reviews":
        document.title = "Reviews | Gadget Heaven";
        break;
      default:
        document.title = "Gadget Heaven";
    }
  }, [location]);
  return (
    <div className="">
      <wishlistContext.Provider value={{ wishlist, setWishlist }}>
        <cartContext.Provider
          value={{ cart, setCart, totalPrice, setTotalPrice }}
        >
          <ScrollRestoration></ScrollRestoration>
          <NavBar cart={cart} wishlist={wishlist}></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </cartContext.Provider>
      </wishlistContext.Provider>
    </div>
  );
};

export default Root;
