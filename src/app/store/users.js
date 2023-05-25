import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import userService from "../services/user.service";
import history from "../utils/history";
import { generateAuthError } from "../utils/generateAuthError";
import roomsService from "../services/rooms.service";

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true,
      dataLoaded: false,
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false,
    };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersRequested: (state) => {
      state.isLoading = true;
    },
    userReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    userRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }
      state.entities.push(action.payload);
    },
    authRequested: (state) => {
      state.error = null;
    },
    roomRemovedSuccess: (state, action) => {
      const user = state.entities.find((u) => u.id === state.auth.userId);
      const roomsArray = Object.keys(user.rooms);

      const obj = {};

      for (let i = 0; i < roomsArray.length; i++) {
        if (roomsArray[i] !== action.payload) {
          obj[roomsArray[i]] = { id: roomsArray[i] };
        }
      }
      user.rooms = obj;
    },
    removeRoomFailed: (state, action) => {
      state.error = action.payload;
    },
    addedRoomRequestedFailed: (state, action) => {
      state.error = action.payload;
    },
    roomAddedToUserSuccess: (state, action) => {
      const user = state.entities.find((u) => u.id === state.auth.userId);
      const roomId = action.payload;
      user.rooms = {
        ...user.rooms,
        [roomId]: action.payload,
      };
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    },
    userUpdateSuccess: (state, action) => {
      state.entities[
        state.entities.findIndex((u) => u.id === action.payload.id)
      ] = action.payload;
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  usersRequested,
  userReceived,
  userRequestFailed,
  authRequestSuccess,
  authRequestFailed,
  userCreated,
  roomRemovedSuccess,
  removeRoomFailed,
  addedRoomRequestedFailed,
  roomAddedToUserSuccess,
  userLoggedOut,
  authRequested,
  userUpdateSuccess,
} = actions;

const userCreateRequested = createAction("users/userCreateRequested");
const createUserFailed = createAction("users/createUserFailed");
const bookedRequested = createAction("rooms/bookedRequested");
const removeRoomRequested = createAction("users/removeRoomRequested");
const addedRoomRequested = createAction("users/addedRoomRequested");
const userUpdateFailed = createAction("users/userUpdateFailed");
const userUpdateRequested = createAction("users/userUpdateRequested");

export const loadUsersList = () => async (dispatch) => {
  dispatch(usersRequested());
  try {
    const { content } = await userService.get();
    dispatch(userReceived(content));
  } catch (error) {
    dispatch(userRequestFailed(error.message));
  }
};

export const signUp =
  ({ email, password, rooms, ...rest }) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.register({ email, password });
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess({ userId: data.localId }));
      dispatch(
        createUser({
          id: data.localId,
          email,
          rooms,
          image: `https://avatars.dicebear.com/api/avataaars/${(
            Math.random() + 1
          )
            .toString(36)
            .substring(7)}.svg`,
          ...rest,
        })
      );
    } catch (error) {
      const { code, message } = error.response.data.error;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(error.message));
      }
    }
  };

export const logIn =
  ({ payload, redirect }) =>
  async (dispatch) => {
    const { email, password } = payload;
    dispatch(authRequested());
    try {
      const data = await authService.logIn({ email, password });
      dispatch(authRequestSuccess({ userId: data.localId }));
      localStorageService.setTokens(data);
      history.push(redirect);
    } catch (error) {
      const { code, message } = error.response.data.error;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(error.message));
      }
    }
  };

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
  history.push("/");
};

function createUser(payload) {
  return async function (dispatch) {
    dispatch(userCreateRequested());
    try {
      const { content } = await userService.create(payload);
      dispatch(userCreated(content));
      history.push("/cities");
    } catch (error) {
      dispatch(createUserFailed(error.message));
    }
  };
}

export const getCurrentUserData = () => (state) => {
  return state.users.entities
    ? state.users.entities.find((u) => u.id === state.users.auth.userId)
    : null;
};

export const removeRoom = (room, roomId) => async (dispatch) => {
  const removedRoom = {
    ...room,
    isFree: true,
  };
  dispatch(removeRoomRequested());
  try {
    await roomsService.update(removedRoom);
    const { content } = await userService.removeRoom(roomId);
    if (content === null) {
      dispatch(roomRemovedSuccess(roomId));
    }
  } catch (error) {
    dispatch(removeRoomFailed(error.message));
  }
};

export const addRoomToUser = (roomId) => async (dispatch) => {
  dispatch(addedRoomRequested());
  try {
    dispatch(roomAddedToUserSuccess(roomId));
  } catch (error) {
    dispatch(addedRoomRequestedFailed(error.message));
  }
};

export const updateUser = (payload) => async (dispatch) => {
  dispatch(userUpdateRequested());
  try {
    const { content } = await userService.update(payload);
    dispatch(userUpdateSuccess(content));
  } catch (error) {
    dispatch(userUpdateFailed());
  }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getAuthErrors = () => (state) => state.users.error;
export const getUser = () => (state) => state.users.auth;
export const getDataStatus = () => (state) => state.users.dataLoaded;

export const getUserImage = () => (state) => state.users.auth;

export const getUsersEntities = () => (state) => state.users.entities;

export default usersReducer;
