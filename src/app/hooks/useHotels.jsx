import React, { useContext, useEffect, useState } from "react";
import hotelsService from "../services/hotels.service";

const HotelsContext = React.createContext();

export const useHotels = () => {
  return useContext(HotelsContext);
};

export const HotelsProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    getHotelsList();
  }, []);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  function getHotelsByCity(id) {
    return hotels.filter((h) => h.cityName === id);
  }

  async function getHotelsList() {
    try {
      const { content } = await hotelsService.fetchAll();
      setHotels(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  return (
    <HotelsContext.Provider value={{ hotels, getHotelsByCity }}>
      {children}
    </HotelsContext.Provider>
  );
};
