import httpService from "./http.service";

const hotelEndpoint = "hotel/";

const hotelService = {
  fetchAll: async () => {
    const { data } = await httpService.get(hotelEndpoint);
    return data;
  },
};

export default hotelService;
