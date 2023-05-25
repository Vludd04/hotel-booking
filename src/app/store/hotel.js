import { createSlice } from "@reduxjs/toolkit";
import hotelService from "../services/hotel.service";

const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    hotelRequested: (state) => {
      state.isLoading = true;
    },
    hotelReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    hotelRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: hotelReducer, actions } = hotelSlice;
const { hotelRequested, hotelReceived, hotelRequestFailed } = actions;

export const loadHotel = () => async (dispatch) => {
  dispatch(hotelRequested());
  try {
    const { content } = await hotelService.fetchAll();
    dispatch(hotelReceived(content));
  } catch (error) {
    dispatch(hotelRequestFailed(error.message));
  }
};

export const getHotelById = (id) => (state) => {
  if (state.hotel.entities) {
    return state.hotel.entities.find((h) => h.hotelID === id);
  }
};
export const getHotelLoadingStatus = () => (state) => state.hotel.isLoading;

export default hotelReducer;
