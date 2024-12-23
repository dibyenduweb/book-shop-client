import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Registar from "../pages/Registar";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Overview from "../components/dashboard/Overview";
import MyProducts from "../components/dashboard/MyProducts";
import AddProducts from "../components/dashboard/AddProducts";
import SellerRoutes from "./SellerRoutes";
import Cart from "../pages/Cart";
import AdminRoutes from "./AdminRoutes";
import AllUsers from "../components/dashboard/AllUsers";
import AllProduct from "../components/dashboard/AllProduct";
import Wishlist from "../components/dashboard/buyer/Wishlist";
import BuyerRoutes from "./BuyerRoutes";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
      },
      {
        path:"/product",
        element:<Products/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
     
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/registar",
        element:<Registar/>,
      }
    ]
    },

    {
      path:'/dashboard',
      element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
      children:[
        {
          path:'/dashboard/overview',
          element:<Overview/>
        },
        //admin routes
        {
          path:'/dashboard/allusers',
          element:<AdminRoutes><AllUsers/></AdminRoutes>
        },
        {
          path:'/dashboard/allproducts',
          element:<AdminRoutes><AllProduct/></AdminRoutes>,
          loader: () => fetch(`https://bookshop-server-theta.vercel.app/allproducts`)
        },
        //selller routes
        {
          path:'/dashboard/products',
          element:<SellerRoutes><MyProducts/></SellerRoutes>
        },
        {
          path:'/dashboard/add-products',
          element:<SellerRoutes><AddProducts/></SellerRoutes>
        },
         //buyer route
      {
        path:"/dashboard/wishlist",
        element:<BuyerRoutes><Wishlist/></BuyerRoutes>,
      },
      ]
    }
  ]);