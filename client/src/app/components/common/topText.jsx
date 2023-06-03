import React from "react";

const TopText = ({ classes, children }) => {
  return (
    <h2 className={"text-2xl font-bold tracking-tight text-gray-900" + classes}>
      {children}
    </h2>
  );
};

export default TopText;
