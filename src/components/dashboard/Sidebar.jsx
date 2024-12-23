
import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdAddBusiness } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";


const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/products",
    title: "My Products",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    title: "Add Products",
    icon: <MdAddBusiness />,
  },
];

const adminRoutes = [
  {
    id: 1,
    route: "/dashboard/allproducts",
    title: "All Products",
    icon: <MdOutlineInventory2 />,
  },
  // {
  //   id: 2,
  //   route: "/dashboard/allusers",
  //   title: "All Users",
  //   icon: <MdAddBusiness />,
  // },
];


const buyerRoutes = [
  {
    id: 1,
    route: "/dashboard/wishlist",
    title: "My Wishlist",
    icon:<FaRegHeart />,
  },
  
];

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userData = useUserData();
  const { Logout } = useAuth();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {/* Close Button for Mobile */}
          {sidebarOpen && (
            <button
              onClick={closeSidebar}
              aria-label="Close sidebar"
              className="absolute top-4 right-4 p-2 text-white bg-gray-700 rounded-full hover:bg-gray-600 sm:hidden"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 7.586l4.293-4.293a1 1 0 111.414 1.414L11.414 9l4.293 4.293a1 1 0 11-1.414 1.414L10 10.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 9 4.293 4.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          )}

          {/* Sidebar Header */}
          <div className="p-4">
            <img src="https://i.ibb.co/2WxKrD6/ds.png" alt="" />
          </div>

          {/* User Info */}
          <div className="p-4 flex flex-col items-center justify-center w-full">
            <img
              src={userData?.image || "https://i.ibb.co/GTxLW9P/ff.png"}
              alt="User Profile"
              className="w-14 object-cover"
            />
            <div className="ml-4">
              <h3 className="text-sm font-bold text-center">
                {userData?.fullName}
              </h3>
              <h3 className="text-xl rounded-lg bg-emerald-800 text-white font-bold text-center">
                {userData?.role}
              </h3>
            </div>
          </div>

          {/* Sidebar Navigation Links */}
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/dashboard/overview"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={closeSidebar} // Close sidebar after clicking
              >
                <GrOverview />
                <span className="ms-3">Overview</span>
              </NavLink>
            </li>

            {userData.role === "seller" &&
              sellerRoutes.map((route) => (
                <li key={route.id}>
                  <NavLink
                    to={route.route}
                    className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    onClick={closeSidebar} // Close sidebar after clicking
                  >
                    {route.icon}
                    <span className="ms-3">{route.title}</span>
                  </NavLink>
                </li>
              ))}

            {userData.role === "admin" &&
              adminRoutes.map((route) => (
                <li key={route.id}>
                  <NavLink
                    to={route.route}
                    className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    onClick={closeSidebar}
                  >
                    {route.icon}
                    <span className="ms-3">{route.title}</span>
                  </NavLink>
                </li>
              ))}

            {userData.role === "buyer" &&
              buyerRoutes.map((route) => (
                <li key={route.id}>
                  <NavLink
                    to={route.route}
                    className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    onClick={closeSidebar}
                  >
                    {route.icon}
                    <span className="ms-3">{route.title}</span>
                  </NavLink>
                </li>
              ))}

            {/* Common Links */}
            <li>
              <NavLink
                to="/"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={closeSidebar}
              >
                <IoHomeOutline />
                <span className="ms-3">Home</span>
              </NavLink>
            </li>

            <li
              onClick={() => {
                Logout();
                closeSidebar();
              }}
              className="cursor-pointer"
            >
              <NavLink
                to="/dashboard/overview"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <LuLogOut />
                <span className="ms-3">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="p-4 sm:ml-64">{/* Content goes here */}</div>
    </div>
  );
};

export default Sidebar;
