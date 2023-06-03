import httpService from "./http.service";

const citiesEndpoint = "cities/";

const citiesService = {
  fetchAll: async () => {
    const { data } = await httpService.get(citiesEndpoint);
    return data;
  },
};

export default citiesService;
