import { Outlet } from "react-router-dom";

const BookedRoomsLayout = ({ children }) => {
  return (
    <>
      <Outlet />
      {children}
    </>
  );
};

export default BookedRoomsLayout;
