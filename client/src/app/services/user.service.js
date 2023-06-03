import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userEndpoint = "user/";
const roomsEndpoint = "/rooms/";

const userService = {
  get: async () => {
    const { data } = await httpService.get(userEndpoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(userEndpoint + payload.id, payload);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      userEndpoint + localStorageService.getUserId(),
      payload
    );
    return data;
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(
      userEndpoint + localStorageService.getUserId()
    );
    return data;
  },
  addRoom: async (payload) => {
    const { data } = await httpService.put(
      userEndpoint +
        localStorageService.getUserId() +
        roomsEndpoint +
        payload.id,
      payload
    );
    return data;
  },
  removeRoom: async (roomId) => {
    const { data } = await httpService.delete(
      userEndpoint + localStorageService.getUserId() + roomsEndpoint + roomId
    );
    return data;
  },
};

export default userService;
