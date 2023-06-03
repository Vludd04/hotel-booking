import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData, updateUser } from "../../../store/users";
import EditNameInput from "../../common/editNameInput";
import Pencil from "../../icons/pencil";
import * as yup from "yup";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserData());
  const [data, setData] = useState({ name: "", ...currentUser });
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState(false);

  useEffect(() => {
    validate();
  }, [data]);

  const handleShowInput = () => {
    setInput((prevState) => !prevState);
  };

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const editUserSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
  });

  const validate = () => {
    editUserSchema
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    const isValid = validate();
    if (!isValid) return;
    dispatch(updateUser({ ...data }));
    setInput((prevState) => !prevState);
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="border-2 h-full rounded h-full border-gray-300 p-6 text-center">
            <img src={currentUser.image} className="w-full h-48" width="180" />
            <div>
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"></blockquote>
              <figcaption className="mt-5">
                <div className="mt-4 text-center text-2xl">
                  <div className="font-semibold text-gray-900 mb-2 flex justify-center scale-110">
                    {input ? (
                      <EditNameInput
                        value={data.name}
                        onChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleShowInput={handleShowInput}
                        error={errors.name}
                      />
                    ) : (
                      <h2>Name: {currentUser.name}</h2>
                    )}
                    {input ? (
                      ""
                    ) : (
                      <button className="ml-1" onClick={handleShowInput}>
                        <Pencil />
                      </button>
                    )}
                  </div>
                  <h2 className="font-semibold text-gray-900 mb-2">
                    Email: {currentUser.email}
                  </h2>
                  <Link
                    to="/myrooms"
                    className="transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-base font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >
                    My Rooms
                  </Link>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
