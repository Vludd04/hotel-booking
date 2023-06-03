import React, { useContext, useEffect, useState } from "react";
import hotelService from "../services/hotel.service";
import SpinnerLoader from "../components/icons/spinnerLoader";

const HotelContext = React.createContext();

export const useHotel = () => {
  return useContext(HotelContext);
};

export const HotelProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [hotel, setHotel] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    getHotel();
  }, []);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  function getHotelById(id) {
    return hotel.find((h) => h.hotelID === id);
  }

  async function getHotel() {
    try {
      const { content } = await hotelService.fetchAll();
      setHotel(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  return (
    <HotelContext.Provider value={{ hotel, getHotelById }}>
      {!isLoading ? (
        children
      ) : (
        <div className="text-center mt-64">
          <SpinnerLoader />
        </div>
      )}
    </HotelContext.Provider>
  );
};
