import React from "react";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col cursor-pointer pl-4" onClick={handleClick}>
      <img
        className="hidden h-14 w-auto lg:block"
        src={require("../../../assets/Hotel24.jpg")}
        alt="Hotel 24 Logo"
      />
    </div>
  );
};

export default Logo;
