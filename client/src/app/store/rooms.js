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
        r._id === deletedRoomId ? { ...r, isFree: false } : r
      );
      state.entities = filteredArr;
    },
    roomBookFailed: (state, action) => {
      state.error = action.payload;
    },
    changedRoomStatusSuccess: (state, action) => {
      const deletedRoomId = action.payload;
      const filteredArr = state.entities.map((r) =>
        r._id === deletedRoomId ? { ...r, isFree: true } : r
      );
      state.entities = filteredArr;
    },
    changeRoomStatusFailed: (state, action) => {
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
  roomBookFailed,
  changedRoomStatusSuccess,
  changeRoomStatusFailed,
} = actions;

const roomBookRequested = createAction("rooms/roomBookRequested");
const changeRoomStatusRequested = createAction(
  "rooms/changeRoomStatusRequested"
);

export const loadRoomsList = () => async (dispatch) => {
  dispatch(roomsRequested());
  try {
    const { content } = await roomsService.fetchAll();
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
    const roomIdToDataBase = [roomId];
    dispatch(roomBookRequested());
    try {
      const { content } = await roomsService.update(bookedRoom);
      if (content.isFree === false) {
        dispatch(roomBookedSuccess(content._id));
        setModalActive(false);
      }
      await userService.addRoom(roomIdToDataBase);
    } catch (error) {
      dispatch(roomBookFailed(error.message));
    }
  };

export const changeRoomStatus = (roomId) => (dispatch) => {
  dispatch(changeRoomStatusRequested());
  try {
    dispatch(changedRoomStatusSuccess(roomId));
  } catch (error) {
    dispatch(changeRoomStatusFailed(error.message));
  }
};

export const getRoomsListByHotelId = (hotelId) => (state) => {
  if (state.rooms.entities) {
    return state.rooms.entities.filter((r) => r.hotelID === hotelId);
  }
};

export const getRoomById = (roomId) => (state) => {
  if (state.rooms.entities) {
    return state.rooms.entities.find((r) => r._id === roomId);
  }
};

export const getRoomByRoomId =
  (...roomId) =>
  (state) => {
    if (state.rooms.entities) {
      return state.rooms.entities.filter(
        (rooms) => rooms._id === roomId.find((room) => room === rooms._id)
      );
    }
  };

export const getRooms = () => (state) => state.rooms.entities;
export const getRoomsDataStatus = () => (state) => state.rooms.dataLoaded;
export const getRoomsLoadingStatus = () => (state) => state.rooms.isLoading;

export default roomsReducer;
