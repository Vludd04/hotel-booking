import React, { useState, useContext, useEffect } from "react";
import citiesService from "../services/cities.service";
import SpinnerLoader from "../components/icons/spinnerLoader";

const CitiesContext = React.createContext();

export const useCities = () => {
  return useContext(CitiesContext);
};

export const CitiesProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    getCitiesList();
  }, []);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  function getCity(cityId) {
    return cities.find((c) => c.link === cityId);
  }

  async function getCitiesList() {
    try {
      const { content } = await citiesService.fetchAll();
      setCities(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, getCity, isLoading }}>
      {!isLoading ? (
        children
      ) : (
        <div className="text-center mt-64">
          <SpinnerLoader />
        </div>
      )}
    </CitiesContext.Provider>
  );
};
