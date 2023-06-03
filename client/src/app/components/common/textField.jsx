import React, { useState } from "react";
import Eye from "../icons/eye";
import EyeSlash from "../icons/eye-slash";

const TextField = ({ label, id, name, type, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputClasses = () => {
    return error
      ? "border border-red-500 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:border-red-400"
      : "block w-full rounded-lg border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-lg font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 relative">
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          className={getInputClasses()}
        />
        {type === "password" && (
          <button
            onClick={toggleShowPassword}
            type="button"
            className="absolute top-0 right-0 p-2.5"
          >
            {showPassword ? <EyeSlash /> : <Eye />}
          </button>
        )}
        {error && (
          <div className="t-2 text-sm text-red-600 dark:text-red-500">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextField;
