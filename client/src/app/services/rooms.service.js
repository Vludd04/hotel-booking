import httpService from "./http.service";

const roomsEndpoint = "rooms/";

const roomsService = {
  fetchAll: async () => {
    const { data } = await httpService.get(roomsEndpoint);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.put(
      roomsEndpoint + payload._id,
      payload
    );
    return data;
  },
};

export default roomsService;
