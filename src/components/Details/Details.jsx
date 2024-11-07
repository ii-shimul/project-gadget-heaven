import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { cartContext, wishlistContext } from "../Root/Root";
import { Rating } from "@mui/material";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  // receive the product
  const location = useLocation();
  const product = location.state.product || {};
  const {
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;

  const { cart, setCart } = useContext(cartContext);
  const { wishlist, setWishlist } = useContext(wishlistContext);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  };
  const handleAddToWishlist = (product) => {
    if (!wishlist.includes(product)) {
      setWishlist([...wishlist, product]);
      toast.success("Added to wishlist successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    } else {
      toast.error("Already exist in wishlist", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    }
  };

  // wishlist button disable
  const [isClicked, setIsClicked] = useState(false);
  const handleWishlistBtn = () => {
    setIsClicked(true);
  }
  return (
    <div className="mb-96 max-sm:mb-[650px]">
      <div className="bg-[#9538e2] text-white relative pt-10 pb-36 text-center">
        <h1 className="text-4xl max-sm:text-2xl font-bold  mb-4">Product Details</h1>
        <p className="font-extralight opacity-70 max-sm:text-sm">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div
        style={{ transform: "translateX(-50%)" }}
        className="rounded-3xl border p-6 flex max-sm:flex-col gap-5 w-[70%] max-xl:w-[90%] absolute max-sm:top-[29%] top-[25%] left-[50%] bg-white shadow-lg "
      >
        <div className="rounded-3xl flex justify-center items-center max-h-[400px] md:w-[50%] overflow-hidden">
          <img
            className="object-contain h-full w-auto"
            src={product_image}
            alt=""
          />
        </div>
        <div className="space-y-3 max-sm:space-y-2">
          <h1 className="text-2xl max-sm:text-xl font-bold">{product_title}</h1>
          <p className="text-lg font-bold max-sm:text-base opacity-70">Price: {price} $</p>
          <button
            className={
              availability
                ? "btn btn-outline btn-sm text-green-600 rounded-full"
                : "btn btn-outline btn-sm text-red-600 rounded-full"
            }
          >
            {availability ? "In Stock" : "Out of Stock"}
          </button>
          <p className="font-bold opacity-80 text-lg max-sm:text-sm">{description}</p>
          <p className="font-bold">Specification:</p>
          <div className="opacity-60 max-sm:text-sm">
            {Specification.map((spec, idx) => {
              return (
                <p>
                  {idx + 1}. {spec}
                </p>
              );
            })}
          </div>
          <p className="max-sm:flex max-sm:gap-3">
            Rating:{" "}
            <div className="flex gap-4 items-center">
              <Rating
                name="half-rating-read"
                defaultValue={rating}
                precision={0.1}
                readOnly
              />{" "}
              <span className="px-2 text-sm rounded-full bg-black bg-opacity-5">
                {rating}
              </span>
            </div>
          </p>
          <div className="flex gap-3 max-sm:justify-center max-sm:items-center">
            <button
              onClick={() => handleAddToCart(product)}
              className="btn rounded-full bg-[#9538e2] text-white"
            >
              Add to Cart <BsCart3 className="text-lg"></BsCart3>{" "}
            </button>
            <button
              id={product_title}
              onClick={() => {handleAddToWishlist(product); handleWishlistBtn();}}
              className={
                isClicked
                  ? "btn btn-circle btn-disabled text-xl bg-white"
                  : "btn btn-circle text-xl bg-white"
              }
            >
              <FaRegHeart></FaRegHeart>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
