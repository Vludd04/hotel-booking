import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/users";
import SpinnerLoader from "../icons/spinnerLoader";

const LogOut = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logOut());
  }, []);
  return (
    <div className="text-center mt-40">
      <SpinnerLoader />
    </div>
  );
};

export default LogOut;
