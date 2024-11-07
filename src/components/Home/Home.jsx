import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState("All Products");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch products
  useEffect(() => {
    setIsLoading(true);
    fetch(`${currentCategory}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data[currentCategory]);
        setIsLoading(false);
      });
  }, [currentCategory]);

  // fetch categories
  useEffect(() => {
    fetch("productCategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  // set products by category
  function loadCategoryProducts(categoryName) {
    setCurrentCategory(categoryName);
  }

  if (isLoading) {
    return (
      <div
        style={{ minHeight: "calc(100vh - 460px)" }}
        className="max-w-[80%] mx-auto max-sm:max-w-[90%]"
      >
        <h3 className="text-center font-bold text-3xl mb-10 max-sm:text-2xl">
          Explore Cutting-Edge Gadgets
        </h3>
        <div className="flex gap-6 max-sm:flex-col">
          <div className="flex flex-col p-6 border rounded-xl w-fit h-fit gap-3 max-sm:grid max-sm:grid-cols-2 max-sm:w-full">
            {categories.map((category) => {
              return (
                <div
                  onClick={() => loadCategoryProducts(category)}
                  className="rounded-full btn bg-black bg-opacity-5 text-nowrap max-sm:text-sm md:py-3 md:px-4 max-sm:btn-sm"
                >
                  <p className="opacity-60">{category}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center w-full">
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        </div>
      </div>
    );
  } else if (products.length === 0) {
    return (
      <div
        style={{ minHeight: "calc(100vh - 460px)" }}
        className="max-w-[80%] mx-auto max-sm:max-w-[90%]"
      >
        <h3 className="text-center font-bold text-3xl mb-10">
          Explore Cutting-Edge Gadgets
        </h3>
        <div className="flex gap-6 max-sm:flex-col">
          <div className="flex flex-col p-6 border rounded-xl w-fit h-fit gap-3 max-sm:grid max-sm:grid-cols-2 max-sm:w-full">
            {categories.map((category) => {
              return (
                <div
                  onClick={() => loadCategoryProducts(category)}
                  className="rounded-full btn bg-black bg-opacity-5 text-nowrap max-sm:text-sm md:py-3 md:px-4 max-sm:btn-sm"
                >
                  <p className="opacity-60">{category}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center flex-col gap-4 w-full py-6">
            <h1 className="text-5xl">Oops!</h1>
            <p className="text-2xl opacity-80">No products in this category.</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{ minHeight: "calc(100vh - 460px)" }}
        className="max-w-[80%] mx-auto max-sm:max-w-[90%]"
      >
        <h3 className="text-center font-bold text-3xl mb-10 max-sm:text-2xl">
          Explore Cutting-Edge Gadgets
        </h3>
        <div className="flex gap-6 max-sm:flex-col">
          <div className="flex flex-col p-6 border rounded-xl w-fit h-fit gap-3 max-sm:grid max-sm:grid-cols-2 max-sm:w-full">
            {categories.map((category) => {
              return (
                <div
                  onClick={() => loadCategoryProducts(category)}
                  className="rounded-full btn bg-black bg-opacity-5 text-nowrap max-sm:text-sm md:py-3 md:px-4 max-sm:btn-sm"
                >
                  <p className="opacity-60">{category}</p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-5 flex-grow max-sm:grid-cols-2">
            {products.map((product) => {
              const { product_title, price, product_image, product_id } =
                product;
              return (
                <div className="rounded-2xl p-5 border h-full flex flex-col">
                  <div className="rounded-2xl mb-5 h-60 max-sm:h-40 flex justify-center items-center">
                    <img
                      className="object-contain h-full w-fit"
                      src={product_image}
                      alt=""
                    />
                  </div>
                  <h1 className="text-2xl max-sm:text-lg font-bold mb-2">
                    {product_title}
                  </h1>
                  <p className="opacity-60 mb-2 flex-grow max-sm:text-sm">
                    Price: {price} $
                  </p>
                  <Link to={`product/${product_id}`} state={{ product }}>
                    <button className="btn btn-outline text-purple-600 rounded-full max-sm:btn-sm max-sm:w-full">
                      View Details
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
