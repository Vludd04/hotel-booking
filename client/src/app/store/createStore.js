import { combineReducers, configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./cities";
import hotelsReducer from "./hotels";
import roomsReducer from "./rooms";
import usersReducer from "./users";

const rootReducer = combineReducers({
  cities: citiesReducer,
  hotels: hotelsReducer,
  rooms: roomsReducer,
  users: usersReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
