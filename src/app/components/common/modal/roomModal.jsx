import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SpinnerLoader from "../../icons/spinnerLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { roomBooked, getRoomById } from "../../../store/rooms";
import { addRoomToUser, getUser } from "../../../store/users";

const RoomModal = ({ setModalActive, roomId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const room = useSelector(getRoomById(roomId));
  const user = useSelector(getUser());

  const handleBookedClick = (room, roomId, setModalActive) => {
    if (user) {
      return (
        dispatch(addRoomToUser(roomId)),
        dispatch(roomBooked(room, roomId, setModalActive))
      );
    } else {
      return navigate("/auth/login");
    }
  };

  if (!room) {
    return (
      <div className="text-center mt-40">
        <SpinnerLoader />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
        <div className="flex w-full transform text-left text-base transition">
          <div className="relative flex w-full items-center overflow-hidden bg-white px-4 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <button
              type="button"
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
              onClick={() => setModalActive(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
              <div className="max-h-64 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                <img src={room.photo} />
              </div>
              <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                  {room.name}
                </h2>

                <section aria-labelledby="information-heading" className="mt-2">
                  <p className="text-2xl text-gray-900">{room.price}$</p>
                </section>

                <section aria-labelledby="options-heading" className="mt-10">
                  <form>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        {room.facilities}
                      </h4>
                      <button
                        onClick={() =>
                          handleBookedClick(room, room.id, setModalActive)
                        }
                        type="button"
                        className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Reserve Now
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
