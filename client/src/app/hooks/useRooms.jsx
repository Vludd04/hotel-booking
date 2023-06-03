import React, { useContext, useEffect, useState } from "react";
import roomsService from "../services/rooms.service";
import userService from "../services/user.service";

const RoomsContext = React.createContext();

export const useRooms = () => {
  return useContext(RoomsContext);
};

export const RoomsProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    getRooms();
  }, []);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  function getRoomById(roomId) {
    return rooms.find((r) => r.id === roomId);
  }

  function getRoomsListByHotelId(hotelId) {
    return rooms.filter((r) => r.hotelID === hotelId);
  }

  function getRoomByRoomId(roomId) {
    return rooms.filter((r) => r.id === roomId);
  }

  async function roomBooked(room, roomId, setModalActive) {
    const bookedRoom = {
      ...room,
      isFree: false,
    };
    const roomIdToFireBase = {
      id: roomId,
    };
    try {
      const { content } = await roomsService.update(bookedRoom);
      if (content.isFree === false) {
        setModalActive(false);
        setRooms(rooms.filter((r) => r.id !== content.id));
      }
      await userService.addRoom(roomIdToFireBase);
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function removeRoom(room, roomId) {
    const removedRoom = {
      ...room,
      isFree: true,
    };
    try {
      await roomsService.update(removedRoom);
      const { content } = await userService.removeRoom(roomId);
      console.log(content);
      if (content === null) {
        setRooms(rooms.filter((r) => r.id !== roomId));
      }
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function getRooms() {
    try {
      const { content } = await roomsService.get();
      setRooms(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        getRoomById,
        roomBooked,
        getRoomsListByHotelId,
        getRoomByRoomId,
        removeRoom,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
};
