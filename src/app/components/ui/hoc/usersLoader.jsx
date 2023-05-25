import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, loadUsersList } from "../../../store/users";
import { useEffect } from "react";
import SpinnerLoader from "../../icons/spinnerLoader";

const UsersLoader = ({ children }) => {
  const dataStatus = useSelector(getDataStatus());
  const dispatch = useDispatch();
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
