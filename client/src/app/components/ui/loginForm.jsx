import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAuthErrors, logIn } from "../../store/users";
import { signInSchema } from "../../utils/signInSchema";
import FormWrapper from "../common/formWrapper";
import TextField from "../common/textField";
import Button from "../common/button";

const LoginForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const loginError = useSelector(getAuthErrors());
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validate = () => {
    signInSchema
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
    const redirect = location.state
      ? location.state.referrer.pathname
      : "/cities";
    const isValid = validate();
    if (!isValid) return;
    dispatch(logIn({ payload: data, redirect }));
  };

  return (
    <>
      <FormWrapper>
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
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
            {loginError && (
              <p className="mb-5 text-sm text-red-600 dark:text-red-500">
                {loginError}
              </p>
            )}
            <Button isValid={!isValid}>Log In</Button>
          </div>
        </form>
      </FormWrapper>
    </>
  );
};

export default LoginForm;
