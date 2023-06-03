import { createSlice } from "@reduxjs/toolkit";
import hotelsService from "../services/hotels.service";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    hotelsRequested: (state) => {
      state.isLoading = true;
    },
    hotelsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    hotelsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: hotelsReducer, actions } = hotelsSlice;
const { hotelsRequested, hotelsReceived, hotelsRequestFailed } = actions;

export const loadHotelsList = () => async (dispatch) => {
  dispatch(hotelsRequested());
  try {
    const { content } = await hotelsService.fetchAll();
    dispatch(hotelsReceived(content));
  } catch (error) {
    dispatch(hotelsRequestFailed(error.message));
  }
};

export const getHotelById = (id) => (state) => {
  if (state.hotels.entities) {
    return state.hotels.entities.find((h) => h._id === id);
  }
};
export const getHotelsByCity = (cityName) => (state) => {
  if (state.hotels.entities) {
    return state.hotels.entities.filter((h) => h.cityName === cityName);
  }
};
export const getHotelsLoadingStatus = () => (state) => state.hotels.isLoading;

export default hotelsReducer;
