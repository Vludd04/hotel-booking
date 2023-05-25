import React from "react";
import MyRoomsList from "../../ui/myRoomsList";
import { useSelector } from "react-redux";
import { getRoomByRoomId } from "../../../store/rooms";
import SpinnerLoader from "../../icons/spinnerLoader";
import { getCurrentUserData, getDataStatus } from "../../../store/users";
import UsersLoader from "../../ui/hoc/usersLoader";

const MyRoomsPage = () => {
  const currentUser = useSelector(getCurrentUserData());
  const dataStatus = useSelector(getDataStatus());
  const rooms =
    dataStatus && currentUser.rooms ? Object.keys(currentUser.rooms) : "";
  const getRoom = useSelector(getRoomByRoomId(rooms[0], rooms[1], rooms[2]));

  return (
    <UsersLoader>
      {dataStatus ? (
        <MyRoomsList rooms={getRoom} currentUser={currentUser} />
      ) : (
        <div className="text-center mt-40">
          <SpinnerLoader />
        </div>
      )}
    </UsersLoader>
  );
};

export default MyRoomsPage;
