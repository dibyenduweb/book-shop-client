import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserDropdown from "./UserDropdown";

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="navbar container mx-auto">
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
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <h2 className="btn btn-ghost text-xl">Gadget Shop</h2>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <UserDropdown />
        </div>
      ) : (
        <div className="navbar-end">
          <div className="flex gap-2 items-center">
            <Link to="/login">
              <button className="btn bg-black text-white px-4 py-2 reande-md">
                Sign In
              </button>
            </Link>
            <Link to="/registar">
              <button className="btn bg-black text-white px-4 py-2 reande-md">
                Registar
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
