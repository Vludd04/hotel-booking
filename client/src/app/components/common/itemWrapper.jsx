import React from "react";

const ItemWrapper = ({ children }) => {
  return (
    <div className="mt-4">
      <div>
        <h3 className="text-base font-medium text-gray-900">{children}</h3>
      </div>
    </div>
  );
};

export default ItemWrapper;
