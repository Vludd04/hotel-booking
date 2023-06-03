import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";

const ProtectedRoute = ({ redirectTo = "/auth/login", children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(getIsLoggedIn());

  if (!isLoggedIn)
    return <Navigate to={redirectTo} state={{ referrer: location }} />;
  return children;
};

export default ProtectedRoute;
