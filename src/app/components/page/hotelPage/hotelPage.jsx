import { useParams } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { handleClickScroll } from "../../../utils/handleClickScroll";
import Star from "../../icons/star";
import Modal from "../../common/modal/modal";
import RoomModal from "../../common/modal/roomModal";
import { useSelector } from "react-redux";
import { getHotelById, getHotelLoadingStatus } from "../../../store/hotel";
import {
  getRoomsListByHotelId,
  getRoomsLoadingStatus,
} from "../../../store/rooms";
import SpinnerLoader from "../../icons/spinnerLoader";

const HotelPage = () => {
  const params = useParams();
  const { hotelId } = params;
  const [roomId, setRoomId] = useState();
  const [modalActive, setModalActive] = useState(false);
  const hotel = useSelector(getHotelById(hotelId));
  const hotelLoading = useSelector(getHotelLoadingStatus());
  const rooms = useSelector(getRoomsListByHotelId(hotelId));
  const roomsLoading = useSelector(getRoomsLoadingStatus());

  if (hotelLoading || roomsLoading) {
    return (
      <div className="text-center mt-64">
        <SpinnerLoader />
      </div>
    );
  }

  const getRoomId = (id) => {
    setRoomId(id);
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <NavLink
                  to="/cities"
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  Cities
                </NavLink>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <NavLink
                  to={`/cities/${hotel.cityName}`}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  Hotels
                </NavLink>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <p className="mr-2 text-sm font-medium text-gray-900">
                {hotel.name}
              </p>
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          {hotel.photos.map((photo) => (
            <div className="flex justify-center overflow-hidden rounded-lg ">
              <img src={photo} />
            </div>
          ))}
        </div>
        {/* Name & Address */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8  lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {hotel.name}
            </h1>
            <p className="text-2xl tracking-tight text-gray-900 mt-4">
              {hotel.address}
            </p>
          </div>

          {/* Reserve Button */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <button
              class="scroll-button"
              onClick={handleClickScroll}
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Reserve
            </button>

            {/* Hotel Stars */}
            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex items-center text-base font-medium text-gray-900">
                  {hotel.stars}
                  <Star />
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{hotel.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {hotel.highlights.map((h) => (
                    <li>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Availability
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {rooms.map((room) =>
              room.isFree ? (
                <div className="group relative">
                  <div
                    key={room.id}
                    className="max-h-64 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50"
                  >
                    <img src={room.photo} alt="" />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3
                        className="text-sm text-gray-700"
                        onClick={() => setModalActive(true)}
                      >
                        <a>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                            id={room.id}
                            onClick={() => getRoomId(room.id)}
                          ></span>
                          {room.isFree === true ? room.name : "Was Booked"}
                        </a>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {room.price}$
                    </p>
                  </div>
                  <Modal active={modalActive} setActive={setModalActive}>
                    <RoomModal
                      setModalActive={setModalActive}
                      roomId={roomId}
                    />
                  </Modal>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
