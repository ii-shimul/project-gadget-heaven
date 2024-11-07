import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div>
      <div className="bg-purple-600 text-center py-10 max-sm:py-6 text-white">
        <h1 className="text-3xl font-bold max-sm:text-2xl">Dashboard</h1>
        <p className="max-w-[50%] max-sm:max-w-[85%] max-sm:text-sm mx-auto opacity-70 mt-4 mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-4 justify-center items-center">
          <Link to={"/dashboard/cart"}>
            <button
              className={
                location.pathname === "/dashboard/cart"
                  ? "btn btn-outline rounded-full px-7 bg-white text-purple-600"
                  : "btn btn-outline text-white rounded-full px-7 hover:bg-white hover:text-purple-600"
              }
            >
              Cart
            </button>
          </Link>
          <Link to={"/dashboard/wishlist"}>
            <button
              className={
                location.pathname === "/dashboard/wishlist"
                  ? "btn btn-outline rounded-full px-7 bg-white text-purple-600"
                  : "btn btn-outline text-white rounded-full px-7 hover:bg-white hover:text-purple-600"
              }
            >
              Wishlist
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-[85%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
