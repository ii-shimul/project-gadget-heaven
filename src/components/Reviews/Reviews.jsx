import React from 'react';
import me from "../../assets/me.jpg";
import einstein from "../../assets/Albert-Einstein.webp";
import newton from "../../assets/newton.avif";
import elon from "../../assets/elon-musk.jpg";
import mark from "../../assets/mark-zuckerberg.jpg";
import sam from "../../assets/Sam-Altman.webp";


const Reviews = () => {
  return (
    <div className="container mx-auto max-sm:w-[90%] pb-16 pt-10 max-sm:py-8">
      <div className="flex justify-center items-center">
        <a className="btn rounded-full bg-purple-600 text-white  text-base font-bold w-fit">
          Our Clients
        </a>
      </div>
      <div className="mb-8">
        <h1 className="font-black text-4xl leading-[50px] mt-4 mb-6 max-sm:text-2xl text-center">
          Meet Our Happy Clients
        </h1>
        <p className="text-base font-medium opacity-90 max-sm:text-sm text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={me} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">II Shimul</p>
              <p className="text-sm opacity-70 mt-1 mb-3">CEO, Bax Corp.</p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "GadgetHeaven is a game-changer! It's super easy to find the
                  gadgets I want, and the wishlist feature makes planning my
                  buys even easier. Love the attention to detail!"
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={einstein} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">Albert Einstein</p>
              <p className="text-sm opacity-70 mt-1 mb-3">
                Representative, Physics
              </p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "Impressive! The structure is logically crafted, and
                  navigating through categories feels natural. I particularly
                  enjoyed the efficient sorting by price. It's relativity simple
                  to use and brilliantly executed!"
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={newton} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">Issac Newton</p>
              <p className="text-sm opacity-70 mt-1 mb-3">CEO, Calculus</p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "A well-constructed platform with some gravity! The flow from
                  one category to another is seamless, and I appreciate the
                  'push' notifications when adding to cart or wishlist. Keep up
                  the momentum!"
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={elon} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">Elon Musk</p>
              <p className="text-sm opacity-70 mt-1 mb-3">CEO, Tesla</p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "Exceptional platform with a futuristic vibe. I admire the
                  functionality and the sleek design. The attention to detail,
                  especially in handling edge cases, is impressive. Truly
                  next-level!"
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={mark} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">Mark Zuckerberg</p>
              <p className="text-sm opacity-70 mt-1 mb-3">CEO, Meta</p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "A thoughtful and well-designed site! The data management with
                  Context API and LocalStorage shows clear mastery of tech. It's
                  smooth, responsive, and simply a joy to use."
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={sam} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">Sam Altman</p>
              <p className="text-sm opacity-70 mt-1 mb-3">CEO, OpenAI</p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "Very well executed! Clean, efficient, and user-centric. The
                  product filtering and chart feature on the dashboard adds a
                  lot of value. Highly recommend for all gadget enthusiasts."
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;