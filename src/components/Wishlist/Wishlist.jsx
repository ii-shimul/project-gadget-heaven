import React, { useContext } from 'react';
import { wishlistContext } from '../Root/Root';

const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(wishlistContext);

  const handleRemoveFromWishlist = (id) => {
    const newWishlist = wishlist.filter((product) => product.product_id !== id);
    setWishlist(newWishlist);
  };

  if (!wishlist.length) {
    return (
      <div className="flex justify-center items-center text-center h-28">
        <h1 className="font-bold text-3xl">Wishlist is empty!</h1>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mt-12">
        {wishlist.map((product) => {
          const {
            product_title,
            price,
            description,
            product_id,
            product_image,
          } = product;
          return (
            <div className="flex rounded-3xl max-sm:flex-col shadow-lg p-5 gap-7">
              <div className="rounded-3xl overflow-hidden h-[120px] md:w-[15%] flex justify-center items-center">
                <img
                  className="object-contain h-full w-full"
                  src={product_image}
                  alt=""
                />
              </div>
              <div className="space-y-3 flex-grow">
                <h1 className="text-2xl max-sm:text-xl font-bold">{product_title}</h1>
                <p className="text-lg font-bold max-sm:text-sm opacity-60">{description}</p>
                <p className="font-bold text-xl opacity-80">Price: {price} $</p>
              </div>
              <button
                onClick={() => handleRemoveFromWishlist(product_id)}
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
    </>
  );
};

export default Wishlist;