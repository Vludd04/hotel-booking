import React from "react";

const TextWithLogo = ({ text }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src={require("../../../assets/Hotel24White.jpg")}
        alt="Hotel 24 Logo"
      />
      <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {text}
      </h2>
    </div>
  );
};

export default TextWithLogo;
