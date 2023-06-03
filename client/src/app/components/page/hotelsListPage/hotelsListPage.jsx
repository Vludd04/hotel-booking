import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCity } from "../../../store/cities";
import { getHotelsLoadingStatus, getHotelsByCity } from "../../../store/hotels";
import ListCols from "../../common/listCols";
import ListWrapper from "../../common/listWrapper";
import ItemWrapper from "../../common/itemWrapper";
import TopText from "../../common/topText";
import Star from "../../icons/star";
import MapPin from "../../icons/map-pin";
import SpinnerLoader from "../../icons/spinnerLoader";

const HotelsListPage = () => {
  const params = useParams();
  const { cityId } = params;
  const city = useSelector(getCity(cityId));
  const hotels = useSelector(getHotelsByCity(cityId));
  const hotelsLoadingStatus = useSelector(getHotelsLoadingStatus());

  if (hotelsLoadingStatus) {
    return (
      <div className="text-center mt-64">
        <SpinnerLoader />
      </div>
    );
  }

  return (
    <ListWrapper>
      <TopText classes={" flex justify-center"}>
        {city.name}
        <MapPin />
      </TopText>
      <ListCols>
        {hotels.map((hotel) => (
          <div
            key={hotel._id}
            className="group relative hover:-translate-y-1 transition hover:scale-100 duration-300"
          >
            <div className="max-h-64 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
              <img src={hotel.images[0]} alt="Hotel Photo" />
            </div>
            <ItemWrapper>
              <Link to={`/cities/${city.link}/${hotel._id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                <div className="flex">
                  {hotel.name}
                  <div className="pl-5 flex">
                    {hotel.stars}
                    <Star />
                  </div>
                </div>
              </Link>
            </ItemWrapper>
          </div>
        ))}
      </ListCols>
    </ListWrapper>
  );
};

export default HotelsListPage;
