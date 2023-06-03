import React from "react";

const Button = ({ isValid, children }) => {
  return (
    <button
      type="submit"
      disabled={isValid}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;
