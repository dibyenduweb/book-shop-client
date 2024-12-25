import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react"; // Importing useEffect for scroll event
import useAuth from "../hooks/useAuth";
import UserDropdown from "./UserDropdown";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar container mx-auto fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white "
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
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

          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/product">Books</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>

              <li>
                <Link to="/cart" className="flex items-center gap-2">
                  <FaShoppingCart /> <span>Cart</span>
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="w-44">
          <img src="https://i.ibb.co/2WxKrD6/ds.png" alt="Logo" />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product">Books</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <Link to="/cart" className="hidden lg:flex">
          <button className="btn btn-ghost text-xl flex items-center gap-2">
            <FaShoppingCart />
            <span>Cart</span>
          </button>
        </Link>

        {user ? (
          <UserDropdown />
        ) : (
          <div className="flex gap-2 items-center">
            <Link to="/login">
              <button className="btn btn-warning text-black px-4 py-2 rounded-md">
                Sign In
              </button>
            </Link>
            <Link to="/registar">
              <button className="btn btn-warning  text-black px-4 py-2 rounded-md">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
