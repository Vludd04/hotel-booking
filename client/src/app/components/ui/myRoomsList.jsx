import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, removeRoom } from "../../store/users";
import { getRoomsDataStatus, changeRoomStatus } from "../../store/rooms";

const MyRoomsList = ({ rooms, currentUser }) => {
  const dispatch = useDispatch();
  const dataStatus = useSelector(getDataStatus());
  const roomsDataStatus = useSelector(getRoomsDataStatus());

  const handleRemoveRoom = (room, id) => {
    dispatch(removeRoom(room, id));
    dispatch(changeRoomStatus(id));
  };

  if (dataStatus && roomsDataStatus && currentUser.rooms) {
    const isEmpty = Object.keys(currentUser.rooms).length === 0;
    if (isEmpty) {
      return (
        <h1 className="text-center text-3xl font-semibold text-gray-900 mt-40">
          You don't have any rooms booked
        </h1>
      );
    }
  }

  return dataStatus && roomsDataStatus && currentUser.rooms ? (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <ul role="list" className="divide-y divide-black-100">
        {rooms.map((room) => (
          <li key={room.name} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <img
                className="h-24 w-24 flex-none rounded-xl bg-gray-50"
                src={room.image}
                alt="Room Photo"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-base font-semibold leading-6 text-gray-900">
                  {room.name}
                </p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                  {room.hotelName}
                </p>
              </div>
            </div>
            <div>
              <p className="text-base font-medium text-gray-900">
                Price: {room.price}$
              </p>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                {room.city}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => handleRemoveRoom(room, room._id)}
                  className="inline-flex transition hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 items-center rounded-md bg-red-50 px-2 py-1 text-base font-medium text-red-700 ring-1 ring-inset ring-red-700/10"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h1 className="text-center text-3xl font-semibold text-gray-900 mt-40">
      You don't have any rooms booked
    </h1>
  );
};

export default MyRoomsList;
