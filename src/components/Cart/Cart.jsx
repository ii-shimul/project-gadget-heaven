import React, { useContext } from "react";
import { cartContext } from "../Root/Root";
import successImg from "../../assets/Group.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, totalPrice, setTotalPrice } = useContext(cartContext);

  const handleRemoveFromCart = (delProduct) => {
    const index = cart.findIndex(
      (product) => product.product_id === delProduct.product_id
    );

    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
      setTotalPrice((prevPrice) => prevPrice - delProduct.price);
    }
  };
  const navigate = useNavigate();

  const handleEmptyCart = () => {
    setTotalPrice(0);
    setCart([]);
    navigate("/");
  };

  // sorting the cart in descending order of price
  const sortDescending = () => {
    const sortedCart = [...cart];
    sortedCart.sort(function (a, b) {
      return b.price - a.price;
    });
    setCart(sortedCart);
  };

  return (
    <div>
      <div className="flex justify-between items-center py-8 max-sm:py-5">
        <h3 className="text-2xl font-bold ">Cart</h3>
        <div className="flex gap-3 max-sm:gap-1.5 items-center text-xl max-sm:flex-col font-bold max-sm:text-base">
          <p>Total Cost: {totalPrice}</p>
          <button
            onClickCapture={sortDescending}
            className="btn rounded-full btn-outline max-sm:btn-sm text-purple-600 hover:bg-purple-600 "
          >
            Sort by Price
          </button>
          <button
            onClick={() =>
              totalPrice > 0
                ? document.getElementById("purchase").showModal()
                : console.log("hokir")
            }
            className={
              totalPrice
                ? "btn rounded-full max-sm:btn-sm bg-purple-600 text-white"
                : "btn btn-disabled max-sm:btn-sm rounded-full bg-purple-600 text-white"
            }
          >
            Purchase
          </button>
        </div>
      </div>
      {cart.length ? (
        <div className="grid grid-cols-1 gap-4">
          {cart.map((product) => {
            const { product_title, price, description, product_image } =
              product;
            return (
              <div className="flex max-sm:flex-col rounded-3xl shadow-lg p-5 gap-7">
                <div className="rounded-3xl overflow-hidden h-[120px] md:w-[15%] flex justify-center items-center">
                  <img
                    className="object-contain h-full w-full"
                    src={product_image}
                    alt=""
                  />
                </div>
                <div className="space-y-3 max-sm:space-y-2 flex-grow">
                  <h1 className="text-2xl max-sm:text-xl font-bold">{product_title}</h1>
                  <p className="text-lg font-bold max-sm:text-sm opacity-60">{description}</p>
                  <p className="font-bold text-xl max-sm:text-base opacity-80">
                    Price: {price} $
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product)}
                  className="btn btn-circle btn-outline text-red-500 hover:bg-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center text-center h-28">
          <h1 className="font-bold text-3xl max-sm:text-2xl">Cart is empty!</h1>
        </div>
      )}
      {/* modal */}
      <dialog id="purchase" className="modal">
        <div className="modal-box flex flex-col justify-center items-center">
          <img className="mb-5" src={successImg} alt="" />
          <h3 className="font-bold text-2xl">Payment Successful</h3>
          <p className="py-4 text-center text-lg opacity-70">
            Thanks for purchasing. <br />
            Total Price: {totalPrice}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button onClick={handleEmptyCart} className="btn rounded-full">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
