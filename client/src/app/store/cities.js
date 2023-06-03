import { createSlice } from "@reduxjs/toolkit";
import citiesService from "../services/cities.service";

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    citiesRequested: (state) => {
      state.isLoading = true;
    },
    citiesReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    citiesRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: citiesReducer, actions } = citiesSlice;
const { citiesRequested, citiesReceived, citiesRequestFailed } = actions;

export const loadCitiesList = () => async (dispatch) => {
  dispatch(citiesRequested());
  try {
    const { content } = await citiesService.fetchAll();
    dispatch(citiesReceived(content));
  } catch (error) {
    dispatch(citiesRequestFailed(error.message));
  }
};

export const getCities = () => (state) => state.cities.entities;
export const getCitiesLoadingStatus = () => (state) => state.cities.isLoading;
export const getCity = (cityId) => (state) => {
  if (state.cities.entities) {
    return state.cities.entities.find((c) => c.link === cityId);
  }
};

export default citiesReducer;
