import { createAction, createSlice } from "@reduxjs/toolkit";
import roomsService from "../services/rooms.service";
import userService from "../services/user.service";

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    dataLoaded: false,
  },
  reducers: {
    roomsRequested: (state) => {
      state.isLoading = true;
    },
    roomsReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    roomsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    roomBookedSuccess: (state, action) => {
      const deletedRoomId = action.payload;
      const filteredArr = state.entities.map((r) =>
        r.id === deletedRoomId ? { ...r, isFree: false } : r
      );
      state.entities = filteredArr;
    },
    roomBookedFailed: (state, action) => {
      state.error = action.payload;
    },
    removeRoomFromUserSuccess: (state, action) => {
      const deletedRoomId = action.payload;
      const filteredArr = state.entities.map((r) =>
        r.id === deletedRoomId ? { ...r, isFree: true } : r
      );
      state.entities = filteredArr;
    },
    removeRoomFromUserFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

const { reducer: roomsReducer, actions } = roomsSlice;
const {
  roomsRequested,
  roomsReceived,
  roomsRequestFailed,
  roomBookedSuccess,
  roomBookedFailed,
  removeRoomFromUserFailed,
  removeRoomFromUserSuccess,
} = actions;

const roomBookedRequested = createAction("rooms/roomBookedRequested");
const removeRoomFromUserRequested = createAction(
  "rooms/removeRoomFromUserRequested"
);

export const loadRoomsList = () => async (dispatch) => {
  dispatch(roomsRequested());
  try {
    const { content } = await roomsService.get();
    dispatch(roomsReceived(content));
  } catch (error) {
    dispatch(roomsRequestFailed(error.message));
  }
};

export const roomBooked =
  (room, roomId, setModalActive) => async (dispatch) => {
    const bookedRoom = {
      ...room,
      isFree: false,
    };
    const roomIdToFireBase = {
      id: roomId,
    };
    dispatch(roomBookedRequested());
    try {
      const { content } = await roomsService.update(bookedRoom);
      if (content.isFree === false) {
        dispatch(roomBookedSuccess(content.id));
        setModalActive(false);
      }
      await userService.addRoom(roomIdToFireBase);
    } catch (error) {
      dispatch(roomBookedFailed(error.message));
    }
  };

export const removeRoomFromUser = (roomId) => (dispatch) => {
  dispatch(removeRoomFromUserRequested());
  try {
    dispatch(removeRoomFromUserSuccess(roomId));
  } catch (error) {
    dispatch(removeRoomFromUserFailed(error.message));
  }
};

export const getRoomsLoadingStatus = () => (state) => state.rooms.isLoading;
export const getRoomsListByHotelId = (hotelId) => (state) => {
  if (state.rooms.entities) {
    return state.rooms.entities.filter((r) => r.hotelID === hotelId);
  }
};
export const getRoomById = (roomId) => (state) => {
  if (state.rooms.entities) {
    return state.rooms.entities.find((r) => r.id === roomId);
  }
};
export const getRoomByRoomId = (roomId, roomId2, roomId3) => (state) => {
  if (state.rooms.entities) {
    return state.rooms.entities.filter(
      (r) => r.id === roomId || r.id === roomId2 || r.id === roomId3
    );
  }
};
export const getRooms = () => (state) => state.rooms.entities;
export const getRoomsDataStatus = () => (state) => state.rooms.dataLoaded;

export default roomsReducer;
