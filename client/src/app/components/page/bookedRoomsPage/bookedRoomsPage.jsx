import React from "react";
import { useSelector } from "react-redux";
import { getRooms } from "../../../store/rooms";

const BookedRoomsPage = () => {
  const rooms = useSelector(getRooms());

  return (
    <div className="mx-auto mt-6 max-w-2xl px-6 lg:grid lg:max-w-7xl">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {rooms.map((room) => (
          <div className="group relative" key={room._id}>
            <div className="max-h-64 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
              <img src={room.image} alt="Room Photo" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                      id={room.id}
                    ></span>
                    {room.name}
                    {room.isFree ? (
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 ml-3">
                        Free
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 ml-3">
                        Booked
                      </span>
                    )}
                  </a>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">{room.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedRoomsPage;
