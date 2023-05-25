import { Link, useParams } from "react-router-dom";
import Star from "../../icons/star";
import MapPin from "../../icons/map-pin";
import ListWrapper from "../../common/listWrapper";
import TopText from "../../common/topText";
import ListCols from "../../common/listCols";
import ItemWrapper from "../../common/itemWrapper";
import { useSelector } from "react-redux";
import { getCity } from "../../../store/cities";
import { getHotelsByCity } from "../../../store/hotels";

const HotelsListPage = () => {
  const params = useParams();
  const { cityId } = params;
  const city = useSelector(getCity(cityId));
  const hotels = useSelector(getHotelsByCity(cityId));

  return (
    <ListWrapper>
      <TopText classes={" flex justify-center"}>
        {city.name}
        <MapPin />
      </TopText>
      <ListCols>
        {hotels.map((hotel) => (
          <div key={hotel.hotelID} className="group relative">
            <div className="max-h-64 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
              <img src={hotel.mainPhoto} alt="Hotel Photo" />
            </div>
            <ItemWrapper>
              <Link to={`/cities/${city.link}/${hotel.hotelID}`}>
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
