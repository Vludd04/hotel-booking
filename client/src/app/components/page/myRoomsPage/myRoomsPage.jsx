import React from "react";
import { useSelector } from "react-redux";
import { getRoomByRoomId } from "../../../store/rooms";
import { getCurrentUserData, getDataStatus } from "../../../store/users";
import MyRoomsList from "../../ui/myRoomsList";
import SpinnerLoader from "../../icons/spinnerLoader";
import UsersLoader from "../../ui/hoc/usersLoader";

const MyRoomsPage = () => {
  const currentUser = useSelector(getCurrentUserData());
  const dataStatus = useSelector(getDataStatus());
  const rooms = dataStatus && currentUser.rooms ? currentUser.rooms : "";
  const getRooms = useSelector(getRoomByRoomId(...rooms));

  return (
    <UsersLoader>
      {dataStatus ? (
        <MyRoomsList rooms={getRooms} currentUser={currentUser} />
      ) : (
        <div className="text-center mt-40">
          <SpinnerLoader />
        </div>
      )}
    </UsersLoader>
  );
};

export default MyRoomsPage;
