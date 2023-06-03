import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, signUp } from "../../store/users";
import { registerSchema } from "../../utils/registerSchema";
import FormWrapper from "../common/formWrapper";
import TextField from "../common/textField";
import Button from "../common/button";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const registerError = useSelector(getAuthErrors());
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    rooms: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validate = () => {
    registerSchema
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    validate();
  }, [data]);

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    dispatch(signUp(data));
  };

  return (
    <>
      <FormWrapper>
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Name"
            id="name"
            name="name"
            type="text"
            value={data.name}
            onChange={handleChange}
            error={errors.name}
          />
          <TextField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
            error={errors.password}
          />
          <div>
            {registerError && (
              <p className="mb-5 text-sm text-red-600 dark:text-red-500">
                {registerError}
              </p>
            )}
            <Button isValid={!isValid}>Sign Up</Button>
          </div>
        </form>
      </FormWrapper>
    </>
  );
};

export default RegisterForm;
