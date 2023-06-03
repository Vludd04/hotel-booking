import React from "react";

const ListCols = ({ children }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {children}
    </div>
  );
};

export default ListCols;
