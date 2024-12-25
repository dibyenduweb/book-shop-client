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
import { FiMenu, FiX } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

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
  {
    id: 2,
    route: "/dashboard/allusers",
    title: "Users List",
    icon: <FaRegUser />
    ,
  },
];

const buyerRoutes = [
  {
    id: 1,
    route: "/dashboard/wishlist",
    title: "My Wishlist",
    icon: <FaRegHeart />,
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
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className={`inline-flex items-center bg-black p-2 mt-2 ms-3 text-sm text-white rounded-lg sm:hidden hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 fixed top-4 left-4 z-50 ${sidebarOpen ? 'bg-yellow-500' : ''}`}
      >
        <span className="sr-only">Open sidebar</span>
        {sidebarOpen ? (
          <FiX className="w-6 h-6 text-white" />
        ) : (
          <FiMenu className="w-6 h-6 text-white" />
        )}
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
          {/* Sidebar Header */}
          <div className="p-4">
            <img src="https://i.ibb.co/2WxKrD6/ds.png" alt="Logo" />
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
