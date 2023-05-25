import httpService from "./http.service";

const hotelsEndpoint = "hotels/";

const hotelsService = {
  fetchAll: async () => {
    const { data } = await httpService.get(hotelsEndpoint);
    return data;
  },
};

export default hotelsService;
