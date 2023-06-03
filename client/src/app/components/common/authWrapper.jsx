import React from "react";

const AuthWrapper = ({ children }) => {
  return (
    <div className="flex min-h-[450px] mt-6 flex-col">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
