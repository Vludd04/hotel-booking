import React from "react";
import { useSelector } from "react-redux";
import { getCities, getCitiesLoadingStatus } from "../../../store/cities";
import { Link } from "react-router-dom";
import ListWrapper from "../../common/listWrapper";
import ItemWrapper from "../../common/itemWrapper";
import CitiesListCols from "../../common/citiesListCols";
import TopText from "../../common/topText";
import SpinnerLoader from "../../icons/spinnerLoader";

const CitiesListPage = () => {
  const cities = useSelector(getCities());
  const citiesLoadingStatus = useSelector(getCitiesLoadingStatus());

  if (citiesLoadingStatus) {
    return (
      <div className="text-center mt-64">
        <SpinnerLoader />
      </div>
    );
  }

  return (
    <ListWrapper>
      <TopText classes={" text-center"}>Choose a city</TopText>
      <CitiesListCols>
        {cities.map((сity) => (
          <div
            key={сity._id}
            className="group relative hover:-translate-y-1 transition hover:scale-110 duration-300"
          >
            <img
              className="min-h-80 aspect-h-1 lg:aspect-w-1 lg:w-80 overflow-hidden rounded-md lg:bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
              src={сity.photo}
              alt="City Photo"
            />
            <ItemWrapper>
              <Link to={`/cities/${сity.link}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {сity.name}
              </Link>
            </ItemWrapper>
          </div>
        ))}
      </CitiesListCols>
    </ListWrapper>
  );
};

export default CitiesListPage;
