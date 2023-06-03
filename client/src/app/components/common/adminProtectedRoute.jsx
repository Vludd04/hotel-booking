import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";

const AdminProtectedRoute = ({ redirectTo = "/cities", children }) => {
  const location = useLocation();
  const currentUser = useSelector(getCurrentUserData());
  const isAdmin =
    currentUser.name === "admin" && currentUser.email === "admin@mail.com";

  if (!isAdmin)
    return <Navigate to={redirectTo} state={{ referrer: location }} />;
  return children;
};

export default AdminProtectedRoute;
