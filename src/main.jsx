import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Statistics from "./components/Statistics/Statistics";
import Reviews from "./components/Reviews/Reviews";
import Error from "./components/Error/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/product/:product_id",
        element: <Details></Details>,
        loader: () => fetch("All Products.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("All Products.json"),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
