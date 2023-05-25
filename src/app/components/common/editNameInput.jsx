import React from "react";
import Check from "../icons/check";
import XMark from "../icons/x-mark";

const EditNameInput = ({
  value,
  onChange,
  handleSubmit,
  handleShowInput,
  error,
}) => {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-900 sm:text-sm">Name:</span>
        </div>
        <input
          type="text"
          value={value}
          name="name"
          id="name"
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 pl-14 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter your name"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button onClick={handleSubmit}>
            <Check />
          </button>
          <button onClick={handleShowInput}>
            <XMark />
          </button>
        </div>
      </div>
      {error && (
        <div className="text-sm text-red-600 dark:text-red-500">{error}</div>
      )}
    </div>
  );
};

export default EditNameInput;
