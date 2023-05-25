import React from "react";
import { Link } from "react-router-dom";
import ListWrapper from "../../common/listWrapper";
import TopText from "../../common/topText";
import CitiesListCols from "../../common/citiesListCols";
import ItemWrapper from "../../common/itemWrapper";
import { useSelector } from "react-redux";
import { getCities } from "../../../store/cities";
import { getCitiesLoadingStatus } from "../../../store/cities";

const CitiesListPage = () => {
  const cities = useSelector(getCities());
  const citiesLoadingStatus = useSelector(getCitiesLoadingStatus());

  if (citiesLoadingStatus) {
    return <h1>Loading...</h1>;
  }

  return (
    <ListWrapper>
      <TopText classes={" text-center"}>Choose city</TopText>
      <CitiesListCols>
        {cities.map((сity) => (
          <div key={сity.id} className="group relative">
            <img
              className="min-h-80 aspect-h-1 aspect-w-1 w-80 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
              src={сity.photo}
              alt=""
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
