import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, loadUsersList } from "../../../store/users";
import SpinnerLoader from "../../icons/spinnerLoader";

const UsersLoader = ({ children }) => {
  const dispatch = useDispatch();
  const dataStatus = useSelector(getDataStatus());
  useEffect(() => {
    if (!dataStatus) dispatch(loadUsersList());
  }, []);
  if (!dataStatus)
    return (
      <div className="text-center mt-40">
        <SpinnerLoader />
      </div>
    );
  return children;
};

export default UsersLoader;
