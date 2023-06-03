import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRoomsList } from "../../../store/rooms";
import { loadCitiesList } from "../../../store/cities";
import { loadHotelsList } from "../../../store/hotels";
import {
  getIsLoggedIn,
  getUsersLoadingStatus,
  loadUsersList,
} from "../../../store/users";
import SpinnerLoader from "../../icons/spinnerLoader";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const usersStatusLoading = useSelector(getUsersLoadingStatus());

  useEffect(() => {
    dispatch(loadCitiesList());
    dispatch(loadHotelsList());
    dispatch(loadRoomsList());
    if (isLoggedIn) {
      dispatch(loadUsersList());
    }
  }, [isLoggedIn]);
  if (usersStatusLoading)
    return (
      <div className="text-center mt-40">
        <SpinnerLoader />
      </div>
    );
  return children;
};

export default AppLoader;
