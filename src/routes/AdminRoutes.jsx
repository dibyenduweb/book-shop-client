/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const userData = useUserData(); 
  const location = useLocation(); 

  if (loading || !userData.role) {
    return <Loading />;
  }

  if (user && userData.role === "admin") {
    return children;
  }


  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;
