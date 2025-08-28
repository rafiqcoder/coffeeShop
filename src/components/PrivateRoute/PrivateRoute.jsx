import React from "react";
import ContextApi, { DataContext } from "../../contextApi/contextApi";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { userData, loading, currentUser } = ContextApi(DataContext);
  const location = useLocation();

  if (loading) {
    console.log("Loading state in PrivateRoute:", loading);
    return <div>Loading...</div>;
  }

  if (currentUser && currentUser?.uid) {
    console.log("user from private route", currentUser);
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
