import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import bannerImg from "../../assets/banner.jpg";
import Badge from "@mui/material/Badge";
import "../../index.css";

const NavBar = ({ cart, wishlist }) => {
  const location = useLocation().pathname;
  if (location === "/") {
    return (
      <>
        <div className="max-w-[97%] mx-auto mt-7 max-sm:mt-3 rounded-3xl p-2 border relative mb-[400px] max-sm:mb-[155px]">
          <div className="bg-[#9538e2] text-white rounded-3xl">
            <div className="navbar bg-base-100 max-w-[85%] max-sm:max-w-[95%] max-sm:rounded-3xl mx-auto bg-inherit text-white pt-4">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
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
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow max-sm:text-black"
                  >
                    <li>
                      <NavLink
                        to={"/"}
                        style={({ isActive }) =>
                          isActive
                            ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                            : undefined
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/statistics"}
                        style={({ isActive }) =>
                          isActive
                            ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                            : undefined
                        }
                      >
                        Statistics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/dashboard"}
                        style={({ isActive }) =>
                          isActive
                            ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                            : undefined
                        }
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/reviews"}
                        style={({ isActive }) =>
                          isActive
                            ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                            : undefined
                        }
                      >
                        Reviews
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl max-sm:text-lg">
                  Gadget Heaven
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-1">
                  <li>
                    <NavLink
                      to={"/"}
                      style={({ isActive }) =>
                        isActive
                          ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                          : undefined
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/statistics"}
                      style={({ isActive }) =>
                        isActive
                          ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                          : undefined
                      }
                    >
                      Statistics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard"}
                      style={({ isActive }) =>
                        isActive
                          ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                          : undefined
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/reviews"}
                      style={({ isActive }) =>
                        isActive
                          ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                          : undefined
                      }
                    >
                      Reviews
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="navbar-end">
                <Link className="rounded-full" to={"/dashboard/cart"}>
                  <Badge
                    badgeContent={cart.length}
                    overlap="circular"
                    color="primary"
                  >
                    <button className="btn btn-circle bg-white text-xl max-sm:text-lg max-sm:btn-sm mr-2">
                      <BsCart3></BsCart3>
                    </button>
                  </Badge>
                </Link>
                <Link to={"/dashboard/wishlist"}>
                  <Badge
                    badgeContent={wishlist.length}
                    overlap="circular"
                    color="primary"
                  >
                    <button className="btn btn-circle text-xl max-sm:text-lg max-sm:btn-sm bg-white">
                      <FaRegHeart></FaRegHeart>
                    </button>
                  </Badge>
                </Link>
              </div>
            </div>
            {/* Banner */}
            <div className="text-center mt-8 max-sm:mt-4  space-y-5 max-sm:space-y-3 pb-[270px] max-sm:pb-[140px]">
              <h1 className="text-5xl max-sm:text-2xl max-sm:max-w-[85%] max-sm:mx-auto font-bold leading-normal">
                Upgrade Your Tech Accessorize with
                <br />
                Gadget Heaven Accessories
              </h1>
              <p className="font-bold opacity-50 max-sm:text-sm max-sm:max-w-[80%] max-sm:mx-auto">
                Explore the latest gadgets that will take your experience to the
                next level.
                <br className="max-sm:hidden" />
                From smart devices to the coolest accessories, we have it all!
              </p>
              <Link
                to={"/dashboard"}
                className="btn bg-white text-purple-700 rounded-full"
              >
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Banner Image */}
        <div
          style={{ transform: "translateX(-50%)" }}
          className="absolute w-[60%] max-xl:w-[70%] max-lg:w-[80%] left-[50%] max-sm:top-[400px] max-xl:top-[50%] top-[54%] rounded-3xl border p-4 bg-white bg-opacity-30 overflow-hidden shadow-lg"
        >
          <div className="rounded-3xl overflow-hidden h-[500px] max-sm:h-fit w-full flex justify-center items-center">
            <img src={bannerImg} className="object-contain h-fit w-fit " />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="navbar bg-base-100 max-w-[85%] max-sm:max-w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to={"/"}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                      : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/statistics"}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                      : undefined
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard"}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                      : undefined
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/reviews"}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                      : undefined
                  }
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl max-sm:text-lg">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            <li>
              <NavLink
                to={"/"}
                style={({ isActive }) =>
                  isActive
                    ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                    : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/statistics"}
                style={({ isActive }) =>
                  isActive
                    ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                    : undefined
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard"}
                style={({ isActive }) =>
                  isActive
                    ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                    : undefined
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/reviews"}
                style={({ isActive }) =>
                  isActive
                    ? { fontWeight: "bold", backgroundColor: "#8728d5" }
                    : undefined
                }
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="rounded-full" to={"/dashboard/cart"}>
            <Badge
              badgeContent={cart.length}
              overlap="circular"
              color="primary"
            >
              <button className="btn btn-circle bg-white max-sm:text-lg max-sm:btn-sm text-xl mr-2">
                <BsCart3></BsCart3>
              </button>
            </Badge>
          </Link>
          <Link to={"/dashboard/wishlist"}>
            <Badge
              badgeContent={wishlist.length}
              overlap="circular"
              color="primary"
            >
              <button className="btn btn-circle text-xl max-sm:text-lg max-sm:btn-sm bg-white">
                <FaRegHeart></FaRegHeart>
              </button>
            </Badge>
          </Link>
        </div>
      </div>
    );
  }
};

export default NavBar;
